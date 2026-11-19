// Máy trung gian Gemini cho ai-workshop (Google Apps Script).
// Trang web gọi vào đây; máy này gọi Gemini bằng key chung. Học viên không thấy key.
// Bản trong git chỉ có chỗ trống ở dòng KEY_IN_CODE. Key thật: deploy.sh chèn lúc đẩy lên,
// hoặc dán tay vào Cài đặt dự án → Thuộc tính tập lệnh, tên GEMINI_KEY.

var MODELS = ['gemini-3.5-flash-lite', 'gemini-3.1-flash-lite']; // thử lần lượt; đổi model ở đây
var KEY_IN_CODE = '__GEMINI_KEY__';
var SITES = ['danhbuidcn.github.io', 'localhost', '127.0.0.1']; // trang được phép gọi
var WINDOW_MIN = 5;          // đếm lượt theo từng khung 5 phút
var LIMIT_ONE = 20;          // số lượt / 5 phút cho 1 trình duyệt (nút So sánh tốn 2 lượt)
var LIMIT_ALL = 100;         // trần chung: tổng số lượt / 5 phút, mọi người cộng lại (trung bình 20 lượt/phút)
var MAX_PROMPT = 3000;       // ký tự câu hỏi
var MAX_SYSTEM = 4000;       // ký tự "hướng dẫn cho AI"
var MAX_HISTORY = 4;         // số lượt hỏi-đáp trước được gửi kèm
var MAX_HISTORY_CHARS = 12000;
var MAX_OUTPUT_TOKENS = 2048;

function doGet() {
  return json_({ ok: true, info: 'Máy trung gian Gemini của ai-workshop đang chạy.' });
}

function doPost(e) {
  var req;
  try { req = JSON.parse(e.postData.contents); } catch (err) { return json_(fail_('Yêu cầu không hợp lệ.')); }
  try { return json_(handle_(req)); } catch (err) { return json_(fail_('Máy trung gian gặp lỗi. Thử lại sau ít phút.')); }
}

// Chạy tay 1 lần trong trình soạn Apps Script để cấp quyền và thử key.
function kiemTra() {
  var r = askGemini_([{ role: 'user', parts: [{ text: 'Chào bạn, trả lời 1 câu ngắn.' }] }], '');
  Logger.log(r.ok ? 'OK: ' + r.text : 'LỖI: ' + r.error);
}

function handle_(req) {
  if (SITES.indexOf(String(req.site || '')) < 0) return fail_('Chỉ chạy được trên trang workshop (danhbuidcn.github.io).');
  var prompt = String(req.prompt || '').trim();
  if (!prompt) return fail_('Bạn chưa nhập câu hỏi.');
  if (prompt.length > MAX_PROMPT) return fail_('Câu hỏi dài quá (tối đa ' + MAX_PROMPT + ' ký tự). Hãy cắt bớt.');
  var system = String(req.system || '').trim();
  if (system.length > MAX_SYSTEM) return fail_('Đoạn hướng dẫn dài quá (tối đa ' + MAX_SYSTEM + ' ký tự). Hãy cắt bớt.');

  var contents = [], total = 0;
  var history = Array.isArray(req.history) ? req.history.slice(-MAX_HISTORY) : [];
  history.forEach(function (h) {
    var q = String(h && h.q || ''), a = String(h && h.a || '');
    if (!q || !a) return;
    total += q.length + a.length;
    contents.push({ role: 'user', parts: [{ text: q }] }, { role: 'model', parts: [{ text: a }] });
  });
  if (total > MAX_HISTORY_CHARS) return fail_('Cuộc trò chuyện dài quá. Tải lại trang để bắt đầu lại.');
  contents.push({ role: 'user', parts: [{ text: prompt }] });

  var busy = takeTurn_(String(req.cid || 'x').slice(0, 40));
  if (busy) return fail_(busy);
  return askGemini_(contents, system);
}

// Đếm lượt theo từng khung WINDOW_MIN phút. Trả về câu báo lỗi nếu quá giới hạn, rỗng nếu được chạy.
function takeTurn_(cid) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return 'Đang đông người dùng. Thử lại sau vài giây.';
  try {
    var cache = CacheService.getScriptCache();
    var ms = WINDOW_MIN * 60000, win = Math.floor(Date.now() / ms);
    var wait = Math.max(1, Math.ceil(((win + 1) * ms - Date.now()) / 60000)); // số phút tới khung sau
    var kAll = 'all:' + win, kOne = 'one:' + cid + ':' + win;
    var all = Number(cache.get(kAll) || 0), one = Number(cache.get(kOne) || 0);
    if (all >= LIMIT_ALL) return 'Cả lớp đang hỏi nhiều quá (tối đa ' + LIMIT_ALL + ' lượt/' + WINDOW_MIN + ' phút). Chờ ' + wait + ' phút rồi thử lại.';
    if (one >= LIMIT_ONE) return 'Bạn đã hỏi ' + LIMIT_ONE + ' lần trong ' + WINDOW_MIN + ' phút. Chờ ' + wait + ' phút rồi thử lại.';
    cache.put(kAll, String(all + 1), WINDOW_MIN * 120);
    cache.put(kOne, String(one + 1), WINDOW_MIN * 120);
    return '';
  } finally {
    lock.releaseLock();
  }
}

function askGemini_(contents, system) {
  var key = PropertiesService.getScriptProperties().getProperty('GEMINI_KEY') || KEY_IN_CODE;
  if (!key || /^__/.test(key)) return fail_('Máy trung gian chưa có key Gemini. Báo người hướng dẫn.');
  var body = { contents: contents, generationConfig: { maxOutputTokens: MAX_OUTPUT_TOKENS } };
  if (system) body.systemInstruction = { parts: [{ text: system }] };

  var last = 0;
  for (var i = 0; i < MODELS.length; i++) {
    var res = UrlFetchApp.fetch('https://generativelanguage.googleapis.com/v1beta/models/' + MODELS[i] + ':generateContent', {
      method: 'post', contentType: 'application/json', headers: { 'x-goog-api-key': key },
      payload: JSON.stringify(body), muteHttpExceptions: true
    });
    last = res.getResponseCode();
    if (last === 200) {
      var data = JSON.parse(res.getContentText());
      var c = data.candidates && data.candidates[0];
      var text = c && c.content && c.content.parts ? c.content.parts.map(function (p) { return p.text || ''; }).join('') : '';
      if (!text) return fail_('Gemini không trả lời câu này (có thể vì nội dung bị chặn). Hãy hỏi cách khác.');
      return { ok: true, text: text, model: MODELS[i] };
    }
    if (last === 400 || last === 401 || last === 403) break; // key sai: đổi model cũng không được
  }
  if (last === 429) return fail_('Hết lượt miễn phí của Gemini lúc này. Chờ 1 phút rồi thử lại, hoặc bấm "Sao chép" rồi dán vào gemini.google.com.');
  if (last === 400 || last === 401 || last === 403) return fail_('Key Gemini của máy trung gian sai hoặc hết hạn. Báo người hướng dẫn.');
  return fail_('Gemini đang quá tải. Thử lại sau ít phút, hoặc bấm "Sao chép" rồi dán vào gemini.google.com.');
}

function fail_(msg) { return { ok: false, error: msg }; }

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
