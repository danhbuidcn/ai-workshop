// Kiểm tra Code.gs trên máy, không cần Google: giả lập các dịch vụ Apps Script.
// Chạy: node proxy/test-proxy.js
const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

function load(fetchPlan, key = 'test-key') {
  const store = {}, calls = [];
  const ctx = {
    LockService: { getScriptLock: () => ({ tryLock: () => true, releaseLock() {} }) },
    CacheService: { getScriptCache: () => ({ get: k => store[k] || null, put: (k, v) => { store[k] = v; } }) },
    PropertiesService: { getScriptProperties: () => ({ getProperty: () => key }) },
    UrlFetchApp: {
      fetch(url, opt) {
        calls.push({ url, opt });
        const [code, body] = fetchPlan(calls.length, url);
        return { getResponseCode: () => code, getContentText: () => JSON.stringify(body) };
      }
    },
    ContentService: { MimeType: { JSON: 'json' }, createTextOutput: s => ({ setMimeType: () => s }) },
    Logger: { log() {} },
    Date // dùng chung Date để test chỉnh được giờ
  };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(__dirname + '/Code.gs', 'utf8'), ctx);
  const post = req => JSON.parse(ctx.doPost({ postData: { contents: JSON.stringify(req) } }));
  return { post, calls, ctx };
}

const okBody = t => ({ candidates: [{ content: { parts: [{ text: t }] } }] });
const good = { site: 'danhbuidcn.github.io', prompt: 'Xin chào', cid: 'a' };
let t, r;

// Thành công + gửi kèm hướng dẫn và lượt trước
t = load(() => [200, okBody('Chào bạn')]);
r = t.post({ ...good, system: 'Trả lời ngắn', history: [{ q: 'Câu 1', a: 'Đáp 1' }] });
assert.deepStrictEqual([r.ok, r.text], [true, 'Chào bạn']);
const sent = JSON.parse(t.calls[0].opt.payload);
assert.strictEqual(sent.contents.length, 3);
assert.strictEqual(sent.systemInstruction.parts[0].text, 'Trả lời ngắn');
assert.strictEqual(t.calls[0].opt.headers['x-goog-api-key'], 'test-key');

// Chặn trang lạ, câu rỗng, câu quá dài, JSON hỏng
assert.match(load(() => [200, okBody('x')]).post({ ...good, site: 'evil.com' }).error, /Chỉ chạy được/);
assert.match(load(() => [200, okBody('x')]).post({ ...good, prompt: '  ' }).error, /chưa nhập/);
assert.match(load(() => [200, okBody('x')]).post({ ...good, prompt: 'a'.repeat(3001) }).error, /dài quá/);
t = load(() => [200, okBody('x')]);
assert.match(JSON.parse(t.ctx.doPost({ postData: { contents: '{hỏng' } })).error, /không hợp lệ/);

// Giới hạn 20 lượt/5 phút/người, trần chung 100 lượt/5 phút
// (đếm theo khung 5 phút: cố định giờ ở đầu khung để 2 lượt gọi không rơi vào 2 khung khác nhau)
const realNow = Date.now;
Date.now = () => 1_800_000_000_000 - (1_800_000_000_000 % 300000) + 1000;
t = load(() => [200, okBody('x')]);
for (let i = 0; i < 20; i++) assert.ok(t.post(good).ok);
assert.match(t.post(good).error, /20 lần trong 5 phút\. Chờ 5 phút/);
assert.ok(t.post({ ...good, cid: 'b' }).ok); // người khác vẫn hỏi được
Date.now = () => 1_800_000_000_000 - (1_800_000_000_000 % 300000) + 300000 + 1000;
assert.ok(t.post(good).ok); // sang khung 5 phút mới: hỏi lại được
Date.now = () => 1_800_000_000_000 - (1_800_000_000_000 % 300000) + 1000;
t = load(() => [200, okBody('x')]);
for (let i = 0; i < 100; i++) assert.ok(t.post({ ...good, cid: 'c' + (i % 10) }).ok);
assert.match(t.post({ ...good, cid: 'moi' }).error, /Cả lớp .*100 lượt\/5 phút/);
Date.now = realNow;

// Model đầu quá tải → thử model sau
t = load(n => (n === 1 ? [503, {}] : [200, okBody('Từ model 2')]));
r = t.post(good);
assert.deepStrictEqual([r.ok, r.text, t.calls.length], [true, 'Từ model 2', 2]);
assert.match(t.calls[1].url, /gemini-3\.1-flash-lite/);

// Lỗi trả tiếng Việt
assert.match(load(() => [429, {}]).post(good).error, /Hết lượt miễn phí/);
assert.match(load(() => [400, {}]).post(good).error, /Key Gemini .* sai/);
assert.match(load(() => [503, {}]).post(good).error, /quá tải/);
assert.match(load(() => [200, { candidates: [{}] }]).post(good).error, /không trả lời/);
assert.match(load(() => [200, okBody('x')], null).post(good).error, /chưa có key/);

console.log('proxy: tất cả kiểm tra đều qua');
