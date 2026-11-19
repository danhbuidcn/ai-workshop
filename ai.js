// Chạy prompt bằng Gemini ngay trên trang, qua máy trung gian (proxy/Code.gs).
// Không có key ở đây. Địa chỉ máy trung gian: 1 chỗ duy nhất, proxy/deploy.sh tự ghi.
var AI_PROXY_URL = 'https://script.google.com/macros/s/AKfycbwRPQ7UxwLXRd9xLawb4jWeMylhpDcImrVvZqhR9upVifqcUg9tXbRMMFT3dljL6xdh/exec';

(function () {
  var NOTE = '⚠️ Gemini bản miễn phí có thể dùng nội dung bạn gửi để cải thiện sản phẩm. Không dán thông tin riêng tư (tên học sinh, lương, số CCCD…).';
  var SAMPLES = [
    { name: '✏️ Tự viết (khung trống)', q: '',
      sys: '# VAI TRÒ\nBạn là [ai], giúp [ai], trong việc [gì].\n\n# ĐIỀU CẤM\n- Không [điều 1].\n- Không [điều 2].\n\n# CÁCH LÀM\n1. [bước 1]\n2. [bước 2]\n\n# KHUNG TRẢ LỜI (luôn đúng khung này)\n[biểu tượng] [Tên phần 1]: [nội dung]\n[biểu tượng] [Tên phần 2]: [nội dung]\n[biểu tượng] [Tên phần 3]: [nội dung]' },
    { name: '🧒 Bạn Đồng Hành Tư Duy (ví dụ thật)', q: 'Em 9 tuổi. Lớp em có 28 bạn, cô chia đều thành 4 nhóm. Mỗi nhóm mấy bạn?',
      sys: '# VAI TRÒ & ĐỐI TƯỢNG\nBạn là "Bạn Đồng Hành Tư Duy" dành cho 2 bé: 6 tuổi và 9 tuổi. Luôn hỏi tên hoặc độ tuổi ở câu đầu tiên nếu chưa biết để chỉnh độ khó.\n\n# QUY TẮC CẤM (TUYỆT ĐỐI)\n- KHÔNG BAO GIỜ giải hộ bài tập, không đưa ra đáp án cuối cùng, không làm hộ từ A-Z.\n- KHÔNG viết đoạn văn dài quá 3 câu. Dùng từ ngữ đơn giản, vui vẻ.\n\n# LUỒNG XỬ LÝ KHI BÉ ĐƯA BÀI TOÁN / Ý TƯỞNG CHƯA RÕ RÀNG\n1. Chia nhỏ: Tách vấn đề thành các mảnh nhỏ nhất.\n2. Nghĩ ý tưởng: Đưa ra 2-3 hướng gợi ý mở để bé tự chọn, không áp đặt 1 cách duy nhất.\n\n# KHUNG TRẢ LỜI BẮT BUỘC (MỌI CÂU TRẢ LỜI PHẢI THEO ĐÚNG KHUNG NÀY)\nMỗi lần phản hồi, chỉ được xuất ra đúng 3 phần ngắn gọn sau:\n\n🔍 Mình hiểu ý bạn là: [Tóm tắt lại đề bài/ý tưởng của bé bằng 1 câu cực dễ hiểu. Nếu đề chưa rõ, chỉ ra điểm còn thiếu].\n\n💡 Cùng nghĩ ý tưởng nhé (Chọn 1 hướng):\n* Cách 1: [Gợi ý hướng A - chỉ nêu ý tưởng, không tính toán]\n* Cách 2: [Gợi ý hướng B - hoặc một ví dụ tương tự ngoài đời thực]\n\n❓ Câu hỏi cho bạn: [Đặt DUY NHẤT 1 câu hỏi nhỏ để bé tự làm bước đầu tiên]' },
    { name: '🇬🇧 GV tiếng Anh: Trợ lý sửa bài viết', q: 'My summer holiday. Last summer I go to Da Nang with my family. We swimed in the sea and eat many seafood. It were very fun.',
      sys: '# VAI TRÒ\nBạn là trợ lý sửa bài viết tiếng Anh cho học sinh lớp 7, trình độ A2.\n\n# ĐIỀU CẤM\n- Không viết lại cả bài hộ học sinh. Không đưa câu đã sửa hoàn chỉnh.\n- Không dùng từ khó hơn trình độ B1.\n- Mỗi giải thích không quá 2 câu, bằng tiếng Việt.\n\n# CÁCH LÀM\n1. Đọc bài, tìm tối đa 5 lỗi quan trọng nhất (ngữ pháp, từ vựng, chính tả).\n2. Với mỗi lỗi: chỉ ra chỗ sai và giải thích ngắn vì sao sai.\n3. Khen 1 điểm học sinh làm tốt.\n\n# KHUNG TRẢ LỜI (luôn đúng 3 phần)\n👍 Điểm em làm tốt: [1 câu]\n✏️ Lỗi cần sửa: [bảng: # | câu có lỗi | loại lỗi | gợi ý, không đưa đáp án]\n❓ Câu hỏi cho em: [1 câu hỏi để em tự sửa lỗi số 1]' },
    { name: '🇨🇳 GV tiếng Trung: Thẻ từ vựng', q: '学习, 朋友',
      sys: '# VAI TRÒ\nBạn là giáo viên tiếng Trung cho người Việt mới học (HSK1–HSK2).\n\n# ĐIỀU CẤM\n- Không giải thích dài. Không dùng thuật ngữ ngôn ngữ học.\n- Câu ví dụ chỉ dùng từ trong HSK1–HSK2.\n\n# CÁCH LÀM\nTôi gửi 1 hoặc nhiều từ. Mỗi từ làm 1 thẻ theo khung bên dưới.\n\n# KHUNG TRẢ LỜI (mỗi từ 1 thẻ, đúng 5 dòng)\n🀄 Chữ Hán: …\n🔤 Pinyin: …\n🇻🇳 Nghĩa: …\n💡 Mẹo nhớ: [hình ảnh hoặc câu chuyện ngắn về các phần trong chữ]\n📝 Ví dụ: [1 câu ngắn] – [pinyin] – [nghĩa tiếng Việt]' },
    { name: '👥 Nhân sự: Trả lời câu hỏi nhân viên', q: 'Tuần sau tôi muốn nghỉ 2 ngày thì phải làm gì?',
      sys: '# VAI TRÒ\nBạn là trợ lý phòng nhân sự, trả lời câu hỏi của nhân viên về quy định công ty.\n\n# ĐIỀU CẤM\n- Chỉ trả lời dựa trên quy định tôi dán bên dưới. Không tự bịa.\n- Không chắc chắn → nói: "Phần này bạn cần hỏi phòng nhân sự."\n- Không quá 5 câu.\n\n# CÁCH LÀM\n1. Tìm điều khoản liên quan trong quy định.\n2. Trả lời bằng lời đơn giản, giọng thân thiện.\n\n# KHUNG TRẢ LỜI\n✅ Trả lời: [tối đa 3 câu]\n📖 Căn cứ: [Điều mấy, trích 1 câu]\n➡️ Việc bạn cần làm tiếp: [1 câu, nếu có]\n\n# QUY ĐỊNH CÔNG TY (ví dụ)\nĐiều 5. Nhân viên chính thức được nghỉ phép 12 ngày/năm.\nĐiều 6. Muốn nghỉ phép phải gửi đơn cho trưởng phòng trước ít nhất 3 ngày làm việc.' }
  ];

  var convs = new WeakMap(); // mỗi khung (slide, phiếu, khung thử) 1 cuộc trò chuyện
  var named = {};            // data-conv="tên": nhiều slide dùng chung 1 cuộc trò chuyện

  function cid() {
    try {
      var id = localStorage.getItem('ai-cid');
      if (!id) { id = Math.random().toString(36).slice(2, 12); localStorage.setItem('ai-cid', id); }
      return id;
    } catch (e) { return 'x'; }
  }

  function ask(prompt, system, history) {
    if (!AI_PROXY_URL) return Promise.resolve({ ok: false, error: 'Chưa bật chạy thử trên trang. Bấm "Sao chép" rồi dán vào gemini.google.com.' });
    var ctl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, 90000);
    // Gửi dạng chữ thường (text/plain) để trình duyệt không hỏi trước (Apps Script không hỗ trợ).
    return fetch(AI_PROXY_URL, {
      method: 'POST', signal: ctl ? ctl.signal : undefined,
      body: JSON.stringify({ site: location.hostname, cid: cid(), prompt: prompt, system: system || '', history: history || [] })
    }).then(function (r) { return r.json(); })
      .catch(function (e) {
        if (e && e.name === 'AbortError') return { ok: false, error: 'Gemini trả lời lâu quá. Thử lại.' };
        if (!navigator.onLine) return { ok: false, error: 'Mất mạng. Kiểm tra Wi-Fi rồi thử lại.' };
        return { ok: false, error: 'Không kết nối được máy trung gian. Kiểm tra mạng rồi thử lại, hoặc bấm "Sao chép" rồi dán vào gemini.google.com.' };
      })
      .then(function (res) { clearTimeout(timer); return res; });
  }

  function esc(s) { return s.replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }
  function md(s) { // vài dấu markdown hay gặp → chữ đậm, gạch đầu dòng
    return esc(s).replace(/\*\*([^*\n]+)\*\*/g, '<b>$1</b>').replace(/^#{1,6} *(.+)$/gm, '<b>$1</b>').replace(/^(\s*)[*-] /gm, '$1• ');
  }

  // Khung kết quả: câu trả lời + ô "Hỏi tiếp" (cùng cuộc trò chuyện).
  function makeOut(after, convKey, getSystem) {
    var out = document.createElement('div');
    out.className = 'ai-out';
    out.innerHTML = '<div class="ai-ans"></div><div class="ai-more"><input type="text" placeholder="Hỏi tiếp / chỉnh: vd &quot;ngắn hơn, dưới 60 chữ&quot;"><button type="button">Gửi</button></div><div class="ai-note"></div>';
    out.querySelector('.ai-note').textContent = NOTE;
    var input = out.querySelector('input'), send = out.querySelector('.ai-more button');
    var go = function () {
      var q = input.value.trim();
      if (!q) return;
      input.value = '';
      run(q, out, convKey, getSystem, true);
    };
    send.onclick = go;
    input.onkeydown = function (e) { e.stopPropagation(); if (e.key === 'Enter') go(); };
    after.parentNode.insertBefore(out, after.nextSibling);
    return out;
  }

  function show(out, html, cls) {
    var ans = out.querySelector('.ai-ans');
    ans.className = 'ai-ans' + (cls ? ' ' + cls : '');
    ans.innerHTML = html;
    var slide = out.closest('.slide');
    if (slide) slide.classList.add('has-out');
  }

  function run(prompt, out, convKey, getSystem, chain) {
    if (/\[[^\]\n]{1,60}\]/.test(prompt)) {
      show(out, 'Bấm vào ô chữ, thay các chỗ <b>[ ]</b> bằng thông tin của bạn, rồi bấm Chạy thử.', 'warn');
      return;
    }
    var conv = convs.get(convKey) || [];
    var showQ = chain && out.dataset.q;
    if (chain && !conv.length) { show(out, 'Hãy bấm <b>▶ Chạy thử</b> ở ô phía trên trước.', 'warn'); return; }
    var history = chain ? conv : [];
    show(out, '⏳ Gemini đang trả lời…', 'wait');
    ask(prompt, getSystem ? getSystem() : '', history).then(function (res) {
      if (!res || !res.ok) { show(out, '❌ ' + esc((res && res.error) || 'Có lỗi. Thử lại.'), 'err'); return; }
      convs.set(convKey, history.concat([{ q: prompt, a: res.text }]).slice(-4));
      show(out, (showQ ? '<div class="ai-q">🙋 ' + esc(prompt) + '</div>' : '') + md(res.text));
    });
    out.dataset.q = '1';
  }

  // Gắn nút "Chạy thử" vào các ô prompt. data-ai="off": không gắn; data-ai="chain": nối tiếp ô trước.
  function setup(selector) {
    document.querySelectorAll(selector).forEach(function (box) {
      if (box.dataset.ai === 'off') return;
      var txt = document.createElement('div');
      txt.className = 'ai-txt';
      txt.title = 'Bấm vào để sửa câu hỏi';
      txt.spellcheck = false;
      try { txt.contentEditable = 'plaintext-only'; } catch (e) {}
      if (txt.contentEditable !== 'plaintext-only') txt.contentEditable = 'true';
      while (box.firstChild) txt.appendChild(box.firstChild);
      box.appendChild(txt);
      box.classList.add('ai-box');
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'run'; b.textContent = '▶ Chạy thử';
      var c = box.closest('[data-conv]');
      var convKey = c ? (named[c.dataset.conv] = named[c.dataset.conv] || {}) : (box.closest('section') || document.body);
      var out = null;
      b.onclick = function (e) {
        e.stopPropagation();
        out = out || makeOut(box, convKey, null);
        out.dataset.q = '';
        run(txt.innerText.trim(), out, convKey, null, box.dataset.ai === 'chain');
      };
      box.appendChild(b);
    });
  }

  // Khung thử "hướng dẫn cho AI": chọn mẫu → sửa → hỏi → xem kết quả.
  function lab(el) {
    el.innerHTML = '<div class="lab-l"><label>1. Hướng dẫn cho AI <select></select></label><textarea class="lab-sys" spellcheck="false"></textarea></div>' +
      '<div class="lab-r"><label>2. Câu hỏi thử</label><textarea class="lab-q" spellcheck="false"></textarea><button type="button" class="run">▶ Chạy thử</button></div>';
    var sel = el.querySelector('select'), sys = el.querySelector('.lab-sys'), q = el.querySelector('.lab-q');
    SAMPLES.forEach(function (s, i) { var o = document.createElement('option'); o.value = i; o.textContent = s.name; sel.appendChild(o); });
    var pick = function () { var s = SAMPLES[sel.value]; sys.value = s.sys; q.value = s.q; };
    sel.value = 1; pick();
    sel.onchange = pick;
    [sys, q].forEach(function (t) { t.onkeydown = function (e) { e.stopPropagation(); }; });
    var convKey = {}, out = null, btn = el.querySelector('.lab-r .run');
    var getSys = function () { return sys.value.trim(); };
    btn.onclick = function () {
      if (/\[(ai|gì|điều \d|bước \d)\]/.test(sys.value)) { out = out || makeOut(btn, convKey, getSys); show(out, 'Thay các chỗ <b>[ ]</b> trong hướng dẫn bằng việc của bạn trước.', 'warn'); return; }
      var text = q.value.trim();
      out = out || makeOut(btn, convKey, getSys);
      if (!text) { show(out, 'Bạn chưa nhập câu hỏi thử.', 'warn'); return; }
      out.dataset.q = '';
      run(text, out, convKey, getSys, false);
    };
  }

  window.AI = { setup: setup, lab: function (sel) { document.querySelectorAll(sel).forEach(lab); } };
})();
