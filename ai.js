// Chạy prompt bằng Gemini ngay trên trang, qua máy trung gian (proxy/Code.gs).
// Không có key ở đây. Địa chỉ máy trung gian: 1 chỗ duy nhất, proxy/deploy.sh tự ghi.
var AI_PROXY_URL = 'https://script.google.com/macros/s/AKfycbwRPQ7UxwLXRd9xLawb4jWeMylhpDcImrVvZqhR9upVifqcUg9tXbRMMFT3dljL6xdh/exec';

(function () {
  var NOTE = '⚠️ Gemini bản miễn phí có thể dùng nội dung bạn gửi để cải thiện sản phẩm. Không dán thông tin riêng tư (tên học sinh, lương, số CCCD…).';
  var SAMPLES = [
    { name: '✏️ Tự viết (khung trống)', q: '', sum: '',
      sys: '# VAI TRÒ\nBạn là [ai], giúp [ai], trong việc [gì].\n\n# ĐIỀU CẤM\n- Không [điều 1].\n- Không [điều 2].\n\n# CÁCH LÀM\n1. [bước 1]\n2. [bước 2]\n\n# KHUNG TRẢ LỜI (luôn đúng khung này)\n[biểu tượng] [Tên phần 1]: [nội dung]\n[biểu tượng] [Tên phần 2]: [nội dung]\n[biểu tượng] [Tên phần 3]: [nội dung]' },
    { name: '🧒 Bạn Đồng Hành Tư Duy (ví dụ thật)', sum: 'Có hướng dẫn: đúng 3 phần 🔍 💡 ❓, không đưa đáp án, mỗi phần rất ngắn.', q: 'Em 9 tuổi. Lớp em có 28 bạn, cô chia đều thành 4 nhóm. Mỗi nhóm mấy bạn?',
      sys: '# VAI TRÒ & ĐỐI TƯỢNG\nBạn là "Bạn Đồng Hành Tư Duy" dành cho 2 bé: 6 tuổi và 9 tuổi. Luôn hỏi tên hoặc độ tuổi ở câu đầu tiên nếu chưa biết để chỉnh độ khó.\n\n# QUY TẮC CẤM (TUYỆT ĐỐI)\n- KHÔNG BAO GIỜ giải hộ bài tập, không đưa ra đáp án cuối cùng, không làm hộ từ A-Z.\n- KHÔNG viết đoạn văn dài quá 3 câu. Dùng từ ngữ đơn giản, vui vẻ.\n\n# LUỒNG XỬ LÝ KHI BÉ ĐƯA BÀI TOÁN / Ý TƯỞNG CHƯA RÕ RÀNG\n1. Chia nhỏ: Tách vấn đề thành các mảnh nhỏ nhất.\n2. Nghĩ ý tưởng: Đưa ra 2-3 hướng gợi ý mở để bé tự chọn, không áp đặt 1 cách duy nhất.\n\n# KHUNG TRẢ LỜI BẮT BUỘC (MỌI CÂU TRẢ LỜI PHẢI THEO ĐÚNG KHUNG NÀY)\nMỗi lần phản hồi, chỉ được xuất ra đúng 3 phần ngắn gọn sau:\n\n🔍 Mình hiểu ý bạn là: [Tóm tắt lại đề bài/ý tưởng của bé bằng 1 câu cực dễ hiểu. Nếu đề chưa rõ, chỉ ra điểm còn thiếu].\n\n💡 Cùng nghĩ ý tưởng nhé (Chọn 1 hướng):\n* Cách 1: [Gợi ý hướng A - chỉ nêu ý tưởng, không tính toán]\n* Cách 2: [Gợi ý hướng B - hoặc một ví dụ tương tự ngoài đời thực]\n\n❓ Câu hỏi cho bạn: [Đặt DUY NHẤT 1 câu hỏi nhỏ để bé tự làm bước đầu tiên]' },
    { name: '🇬🇧 GV tiếng Anh: Trợ lý sửa bài viết', sum: 'Có hướng dẫn: đúng 3 phần 👍 ✏️ ❓, chỉ gợi ý lỗi, không viết lại cả bài.', q: 'My summer holiday. Last summer I go to Da Nang with my family. We swimed in the sea and eat many seafood. It were very fun.',
      sys: '# VAI TRÒ\nBạn là trợ lý sửa bài viết tiếng Anh cho học sinh lớp 7, trình độ A2.\n\n# ĐIỀU CẤM\n- Không viết lại cả bài hộ học sinh. Không đưa câu đã sửa hoàn chỉnh.\n- Không dùng từ khó hơn trình độ B1.\n- Mỗi giải thích không quá 2 câu, bằng tiếng Việt.\n\n# CÁCH LÀM\n1. Đọc bài, tìm tối đa 5 lỗi quan trọng nhất (ngữ pháp, từ vựng, chính tả).\n2. Với mỗi lỗi: chỉ ra chỗ sai và giải thích ngắn vì sao sai.\n3. Khen 1 điểm học sinh làm tốt.\n\n# KHUNG TRẢ LỜI (luôn đúng 3 phần)\n👍 Điểm em làm tốt: [1 câu]\n✏️ Lỗi cần sửa: [bảng: # | câu có lỗi | loại lỗi | gợi ý, không đưa đáp án]\n❓ Câu hỏi cho em: [1 câu hỏi để em tự sửa lỗi số 1]' },
    { name: '🇨🇳 GV tiếng Trung: Thẻ từ vựng', sum: 'Có hướng dẫn: mỗi từ 1 thẻ đúng 5 dòng 🀄 🔤 🇻🇳 💡 📝.', q: '学习, 朋友',
      sys: '# VAI TRÒ\nBạn là giáo viên tiếng Trung cho người Việt mới học (HSK1–HSK2).\n\n# ĐIỀU CẤM\n- Không giải thích dài. Không dùng thuật ngữ ngôn ngữ học.\n- Câu ví dụ chỉ dùng từ trong HSK1–HSK2.\n\n# CÁCH LÀM\nTôi gửi 1 hoặc nhiều từ. Mỗi từ làm 1 thẻ theo khung bên dưới.\n\n# KHUNG TRẢ LỜI (mỗi từ 1 thẻ, đúng 5 dòng)\n🀄 Chữ Hán: …\n🔤 Pinyin: …\n🇻🇳 Nghĩa: …\n💡 Mẹo nhớ: [hình ảnh hoặc câu chuyện ngắn về các phần trong chữ]\n📝 Ví dụ: [1 câu ngắn] – [pinyin] – [nghĩa tiếng Việt]' },
    { name: '👥 Nhân sự: Trả lời câu hỏi nhân viên', sum: 'Có hướng dẫn: trả lời theo Điều 5–6 (báo trước 3 ngày), đúng 3 dòng ✅ 📖 ➡️.', q: 'Tuần sau tôi muốn nghỉ 2 ngày thì phải làm gì?',
      sys: '# VAI TRÒ\nBạn là trợ lý phòng nhân sự, trả lời câu hỏi của nhân viên về quy định công ty.\n\n# ĐIỀU CẤM\n- Chỉ trả lời dựa trên quy định tôi dán bên dưới. Không tự bịa.\n- Không chắc chắn → nói: "Phần này bạn cần hỏi phòng nhân sự."\n- Không quá 5 câu.\n\n# CÁCH LÀM\n1. Tìm điều khoản liên quan trong quy định.\n2. Trả lời bằng lời đơn giản, giọng thân thiện.\n\n# KHUNG TRẢ LỜI\n✅ Trả lời: [tối đa 3 câu]\n📖 Căn cứ: [Điều mấy, trích 1 câu]\n➡️ Việc bạn cần làm tiếp: [1 câu, nếu có]\n\n# QUY ĐỊNH CÔNG TY (ví dụ)\nĐiều 5. Nhân viên chính thức được nghỉ phép 12 ngày/năm.\nĐiều 6. Muốn nghỉ phép phải gửi đơn cho trưởng phòng trước ít nhất 3 ngày làm việc.' }
  ];

  var convs = new WeakMap(); // mỗi khung (slide, khung thử) 1 cuộc trò chuyện
  var named = {};            // data-conv="tên": nhiều slide dùng chung 1 cuộc trò chuyện

  function cid() {
    try {
      var id = localStorage.getItem('ai-cid');
      if (!id) { id = Math.random().toString(36).slice(2, 12); localStorage.setItem('ai-cid', id); }
      return id;
    } catch (e) { return 'x'; }
  }

  function ask(prompt, system, history) {
    if (!AI_PROXY_URL) return Promise.resolve({ ok: false, error: 'Chưa bật chạy thử trên trang. Bấm "📋 Chép" rồi dán vào gemini.google.com.' });
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
        return { ok: false, error: 'Không kết nối được máy trung gian. Kiểm tra mạng rồi thử lại, hoặc bấm "📋 Chép" rồi dán vào gemini.google.com.' };
      })
      .then(function (res) { clearTimeout(timer); return res; });
  }

  function esc(s) { return s.replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }
  function md(s) { // vài dấu markdown hay gặp → chữ đậm, gạch đầu dòng, chữ nghiêng
    return esc(s).replace(/\*\*([^*\n]+)\*\*/g, '<b>$1</b>').replace(/^#{1,6} *(.+)$/gm, '<b>$1</b>').replace(/^(\s*)[*-] /gm, '$1• ')
      .replace(/\*([^*\n]+)\*/g, '<i>$1</i>');
  }

  var EMPTY = 'Kết quả sẽ hiện ở đây. Bấm nút cam <b>Gửi cho Gemini</b> ở khung ① phía trên.';

  // Chép chữ vào bộ nhớ tạm (để dán sang ChatGPT, Gemini).
  function copyBtn(label, getText) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'copy'; b.textContent = label;
    b.title = 'Chép câu này để dán sang ChatGPT hoặc Gemini';
    b.onclick = function (e) {
      e.stopPropagation();
      var text = getText().trim();
      var done = function () { b.textContent = 'Đã chép ✓'; setTimeout(function () { b.textContent = label; }, 1500); };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done);
      else { var t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); done(); }
    };
    return b;
  }

  // Khung ② "Gemini trả lời": câu trả lời + ô "Muốn chỉnh?" (cùng cuộc trò chuyện, hiện sau lần trả lời đầu).
  function makeOut(after, convKey, getSystem) {
    var arrow = document.createElement('div');
    arrow.className = 'ai-arrow';
    arrow.textContent = '⬇ Gemini trả lời';
    var out = document.createElement('div');
    out.className = 'ai-out';
    out.innerHTML = '<div class="ai-lbl">② Gemini trả lời</div><div class="ai-ans empty">' + EMPTY + '</div>' +
      '<div class="ai-more" hidden><label>✏️ Muốn chỉnh? Gõ thêm ở đây rồi bấm Gửi:</label>' +
      '<div class="ai-row"><input type="text" placeholder="vd: ngắn hơn, dưới 60 chữ"><button type="button">Gửi</button></div></div><div class="ai-note"></div>';
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
    after.parentNode.insertBefore(arrow, out);
    return out;
  }

  function show(out, html, cls) {
    var ans = out.querySelector('.ai-ans');
    ans.className = 'ai-ans' + (cls ? ' ' + cls : '');
    ans.innerHTML = html;
  }

  function run(prompt, out, convKey, getSystem, chain) {
    if (/\[[^\]\n]{1,60}\]/.test(prompt)) {
      show(out, 'Chưa gửi. Bấm vào khung ①, thay các chỗ <b>[ ]</b> bằng thông tin của bạn (xoá cả dấu [ ]), rồi bấm lại <b>Gửi cho Gemini</b>.', 'warn');
      return;
    }
    var conv = convs.get(convKey) || [];
    var showQ = chain && out.dataset.q;
    if (chain && !conv.length) { show(out, 'Chưa gửi. Hãy bấm <b>Gửi cho Gemini</b> ở khung ① phía trên trước, rồi quay lại đây.', 'warn'); return; }
    var history = chain ? conv : [];
    show(out, '⏳ Gemini đang nghĩ… (thường 5–20 giây)', 'wait');
    if (out.scrollIntoView) out.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); // cho thấy khung ②
    ask(prompt, getSystem ? getSystem() : '', history).then(function (res) {
      if (!res || !res.ok) { show(out, '❌ ' + esc((res && res.error) || 'Có lỗi. Thử lại.'), 'err'); return; }
      convs.set(convKey, history.concat([{ q: prompt, a: res.text }]).slice(-4));
      show(out, (showQ ? '<div class="ai-q">🙋 Bạn: ' + esc(prompt) + '</div>' : '') + md(res.text));
      out.querySelector('.ai-more').hidden = false;
    });
    out.dataset.q = '1';
  }

  // Biến mỗi ô prompt thành khung ① "Bạn nhập" (sửa được, nút Gửi) + khung ② "Gemini trả lời".
  // data-ai="off": chỉ để xem + nút Sao chép (bài phải làm trong app); data-ai="chain": nối tiếp cuộc trò chuyện ô trước.
  function setup(selector) {
    document.querySelectorAll(selector).forEach(function (box) {
      if (box.dataset.ai === 'off') {
        box.appendChild(copyBtn('Sao chép', function () { return box.firstChild.textContent; }));
        return;
      }
      var chain = box.dataset.ai === 'chain';
      box.style.fontSize = getComputedStyle(box).fontSize; // giữ cỡ chữ của ô cũ (.sm, .col)
      var txt = document.createElement('div');
      txt.className = 'ai-txt';
      txt.title = 'Bấm vào để sửa';
      txt.spellcheck = false;
      try { txt.contentEditable = 'plaintext-only'; } catch (e) {}
      if (txt.contentEditable !== 'plaintext-only') txt.contentEditable = 'true';
      while (box.firstChild) txt.appendChild(box.firstChild);
      box.className = 'ai-in';
      var head = document.createElement('div');
      head.className = 'ai-head';
      head.innerHTML = '<span class="ai-lbl">① Bạn nhập' + (chain ? ' · câu chỉnh (Gemini sửa tiếp bản trên)' : '') +
        ' <small>bấm vào khung để sửa</small></span>';
      head.appendChild(copyBtn('📋 Chép', function () { return txt.innerText; }));
      var foot = document.createElement('div');
      foot.className = 'ai-foot';
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'run'; b.textContent = 'Gửi cho Gemini ➜';
      foot.appendChild(b);
      box.appendChild(head); box.appendChild(txt); box.appendChild(foot);
      var c = box.closest('[data-conv]');
      var convKey = c ? (named[c.dataset.conv] = named[c.dataset.conv] || {}) : (box.closest('section') || document.body);
      var out = makeOut(box, convKey, null);
      var slide = box.closest('.slide');
      if (slide) slide.classList.add('has-out');
      b.onclick = function (e) {
        e.stopPropagation();
        out.dataset.q = '';
        run(txt.innerText.trim(), out, convKey, null, chain);
      };
    });
  }

  // Khung thử "hướng dẫn cho AI": chọn mẫu → sửa → hỏi → so sánh 2 kết quả (không có / có hướng dẫn Phần A).
  function lab(el) {
    el.innerHTML = '<div class="lab-grid"><div class="lab-l ai-in"><div class="ai-lbl">① Bạn nhập · Phần A: hướng dẫn cho AI</div>' +
      '<label>Chọn mẫu: <select></select></label><textarea class="lab-sys" spellcheck="false"></textarea></div>' +
      '<div class="lab-r"><div class="ai-in"><div class="ai-lbl">① Bạn nhập · Phần B: câu hỏi thử</div><textarea class="lab-q" spellcheck="false"></textarea>' +
      '<div class="ai-foot"><button type="button" class="run">So sánh ➜</button></div></div>' +
      '<p class="cmp-tip">Gửi cùng 1 câu hỏi 2 lần: không có và có Phần A.</p></div></div>';
    var sel = el.querySelector('select'), sys = el.querySelector('.lab-sys'), q = el.querySelector('.lab-q');
    var btn = el.querySelector('.lab-r .run');
    var two = pairOuts(el, 'Không có hướng dẫn', 'Có hướng dẫn Phần A');
    SAMPLES.forEach(function (s, i) { var o = document.createElement('option'); o.value = i; o.textContent = s.name; sel.appendChild(o); });
    var pick = function () { var s = SAMPLES[sel.value]; sys.value = s.sys; q.value = s.q; two.reset(s.sum); btn.textContent = 'So sánh ➜'; };
    sel.value = 1; pick();
    sel.onchange = pick;
    [sys, q].forEach(function (t) { t.onkeydown = function (e) { e.stopPropagation(); }; });
    var slide = el.closest('.slide');
    if (slide) slide.classList.add('has-out');
    btn.onclick = function () {
      if (/\[(ai|gì|điều \d|bước \d)\]/.test(sys.value)) { show(two.b, 'Chưa gửi. Thay các chỗ <b>[ ]</b> trong Phần A bằng việc của bạn trước.', 'warn'); return; }
      var text = q.value.trim();
      if (!text) { show(two.b, 'Chưa gửi. Bạn chưa nhập câu hỏi thử ở Phần B.', 'warn'); return; }
      runTwo([{ p: text, sys: '' }, { p: text, sys: sys.value.trim() }], two, btn);
    };
  }

  // ===== So sánh 2 cột: Lần 1 (trái, đỏ) ↔ Lần 2 (phải, xanh lá), 1 nút chạy cả 2 =====
  var SAME = 'AI có thể khác mỗi lần, quan trọng là xu hướng.';

  // 2 khung ② cạnh nhau + dòng tóm khác biệt (ghi sẵn, không nhờ AI chấm). Kết quả dài: cắt gọn + nút "Xem hết".
  function pairOuts(after, la, lb) {
    var wrap = document.createElement('div');
    wrap.className = 'cmp-two';
    wrap.innerHTML = '<div class="ai-arrow">⬇ Gemini trả lời</div><div class="cmp-row"></div>' +
      '<div class="cmp-sum" hidden></div><div class="ai-note"></div>';
    wrap.querySelector('.ai-note').textContent = SAME + ' ' + NOTE;
    var row = wrap.querySelector('.cmp-row'), sum = wrap.querySelector('.cmp-sum');
    var mk = function (lbl, cls) {
      var o = document.createElement('div');
      o.className = 'ai-out cmp-out ' + cls;
      o.innerHTML = '<div class="ai-lbl"></div><div class="ai-ans empty">' + EMPTY + '</div>' +
        '<button type="button" class="cmp-all" hidden>Xem hết ▾</button>';
      o.querySelector('.ai-lbl').textContent = '② ' + lbl;
      var all = o.querySelector('.cmp-all');
      all.onclick = function () { var on = o.classList.toggle('all'); all.textContent = on ? 'Thu gọn ▴' : 'Xem hết ▾'; };
      row.appendChild(o);
      return o;
    };
    var a = mk(la, 'a'), b = mk(lb, 'b');
    after.parentNode.insertBefore(wrap, after.nextSibling);
    return {
      a: a, b: b, wrap: wrap,
      reset: function (text) {
        [a, b].forEach(function (o) { show(o, 'Kết quả sẽ hiện ở đây. Bấm nút cam <b>So sánh</b> phía trên.', 'empty'); fit(o); });
        sum.hidden = !text; sum.textContent = text ? '👀 ' + text : '';
      }
    };
  }

  function fit(o) { // cắt gọn kết quả dài, hiện nút "Xem hết"
    var ans = o.querySelector('.ai-ans'), all = o.querySelector('.cmp-all');
    o.classList.remove('all'); all.textContent = 'Xem hết ▾';
    all.hidden = ans.scrollHeight <= ans.clientHeight + 4;
    o.classList.toggle('clip', !all.hidden);
  }

  function runTwo(jobs, two, btn) {
    var outs = [two.a, two.b];
    outs.forEach(function (o) { show(o, '⏳ Gemini đang nghĩ… (thường 5–20 giây)', 'wait'); fit(o); });
    if (two.a.scrollIntoView) two.a.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    btn.disabled = true;
    Promise.all(jobs.map(function (j) { return ask(j.p, j.sys, []); })).then(function (rs) {
      rs.forEach(function (res, i) {
        if (!res || !res.ok) show(outs[i], '❌ ' + esc((res && res.error) || 'Có lỗi. Thử lại.'), 'err');
        else show(outs[i], md(res.text));
        fit(outs[i]);
      });
      btn.disabled = false; btn.textContent = '🔄 Chạy lại';
    });
  }

  var PARTS = { pp1: 'Vai trò', pp2: 'Bối cảnh', pp3: 'Việc cần làm', pp4: 'Kết quả mong muốn', pp5: 'Hỏi lại nếu chưa rõ' };

  // .ai-cmp > .cmp-set (data-name, data-sum) > 2 × .cmp-p (prompt lần 1, lần 2) + .cmp-look (ô bấm để mở: điểm nên nhìn).
  // Nhiều .cmp-set → nút chọn bộ. Phần prompt tô màu: span.pp1…pp5 (vai trò, bối cảnh, việc, kết quả, hỏi lại).
  function compare(el) {
    var sets = Array.prototype.slice.call(el.querySelectorAll('.cmp-set')).map(function (st) {
      var ps = st.querySelectorAll('.cmp-p'), look = st.querySelector('.cmp-look');
      return { name: st.dataset.name || '', sum: st.dataset.sum || '', a: ps[0].innerHTML.trim(), b: ps[1].innerHTML.trim(), look: look ? look.innerHTML : '' };
    });
    var la = el.dataset.a || 'Lần 1: hỏi ngắn', lb = el.dataset.b || 'Lần 2: có công thức';
    el.innerHTML = '<div class="cmp-ask">👀 Nhìn xem: 2 kết quả khác nhau ở đâu?</div><div class="cmp-pick"></div>' +
      '<div class="cmp-row"><div class="cmp-col a"><div class="cmp-h"></div></div><div class="cmp-col b"><div class="cmp-h"></div></div></div>' +
      '<div class="cmp-go"><button type="button" class="run">So sánh ➜</button><span class="cmp-tip">1 nút gửi cả 2 câu cùng lúc</span></div>';
    var cols = el.querySelectorAll('.cmp-col');
    cols[0].querySelector('.cmp-h').textContent = '❌ ' + la;
    cols[1].querySelector('.cmp-h').textContent = '✅ ' + lb;
    var mkIn = function (col) {
      var box = document.createElement('div');
      box.className = 'ai-in';
      box.innerHTML = '<div class="ai-head"><span class="ai-lbl">① Bạn nhập <small>bấm vào để sửa</small></span></div><div class="pp-legend"></div>';
      var txt = document.createElement('div');
      txt.className = 'ai-txt'; txt.title = 'Bấm vào để sửa'; txt.spellcheck = false;
      try { txt.contentEditable = 'plaintext-only'; } catch (e) {}
      if (txt.contentEditable !== 'plaintext-only') txt.contentEditable = 'true';
      txt.onkeydown = function (e) { e.stopPropagation(); };
      box.querySelector('.ai-head').appendChild(copyBtn('📋 Chép', function () { return txt.innerText; }));
      box.appendChild(txt);
      col.appendChild(box);
      return { txt: txt, legend: box.querySelector('.pp-legend') };
    };
    var A = mkIn(cols[0]), B = mkIn(cols[1]);
    var go = el.querySelector('.cmp-go'), btn = go.querySelector('.run');
    var two = pairOuts(go, la, lb);
    var look = document.createElement('div');
    look.className = 'cmp-look';
    two.wrap.insertBefore(look, two.wrap.querySelector('.ai-note'));
    var pick = el.querySelector('.cmp-pick');
    var use = function (i) {
      var st = sets[i];
      A.txt.innerHTML = st.a; B.txt.innerHTML = st.b;
      [A, B].forEach(function (X) {
        var found = Object.keys(PARTS).filter(function (k) { return X.txt.querySelector('.' + k); });
        X.legend.innerHTML = found.map(function (k) { return '<span class="' + k + '">' + PARTS[k] + '</span>'; }).join('');
        X.legend.hidden = !found.length;
      });
      look.innerHTML = st.look; look.hidden = !st.look;
      if (window.AI && AI.folds) AI.folds(look);
      two.reset(st.sum);
      btn.textContent = 'So sánh ➜';
      pick.querySelectorAll('button').forEach(function (b, k) { b.classList.toggle('on', k === i); b.setAttribute('aria-pressed', k === i); });
    };
    if (sets.length > 1) sets.forEach(function (st, i) {
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = st.name;
      b.onclick = function () { use(i); };
      pick.appendChild(b);
    });
    pick.hidden = sets.length < 2;
    use(0);
    var slide = el.closest('.slide');
    if (slide) slide.classList.add('has-out');
    btn.onclick = function () {
      var pa = A.txt.innerText.trim(), pb = B.txt.innerText.trim();
      var br = /\[[^\]\n]{1,60}\]/, bad = false;
      [[pa, two.a], [pb, two.b]].forEach(function (x) {
        if (br.test(x[0])) { bad = true; show(x[1], 'Chưa gửi. Bấm vào khung ① cột này, thay các chỗ <b>[ ]</b> bằng thông tin của bạn (xoá cả dấu [ ]).', 'warn'); fit(x[1]); }
      });
      if (bad) return;
      if (!pa || !pb) { show(pa ? two.b : two.a, 'Chưa gửi. Khung ① cột này đang trống.', 'warn'); return; }
      runTwo([{ p: pa, sys: '' }, { p: pb, sys: '' }], two, btn);
    };
  }

  // Ô "bấm để mở": .fold > .fold-h (nút, luôn hiện) + .fold-b (chi tiết, ẩn tới khi bấm). Bấm lần nữa để đóng.
  // Khung cha có data-one: mở 1 ô thì các ô khác trong khung đó thu lại. Khi in: CSS mở hết.
  var foldN = 0;
  function folds(root) {
    (root || document).querySelectorAll('.fold').forEach(function (f) {
      var h = f.querySelector('.fold-h'), b = f.querySelector('.fold-b');
      if (!h || !b || h.dataset.ready) return;
      h.dataset.ready = '1';
      b.id = b.id || 'fold-' + (++foldN);
      h.setAttribute('aria-controls', b.id);
      var set = function (el, open) {
        el.classList.toggle('open', open);
        el.querySelector('.fold-h').setAttribute('aria-expanded', open ? 'true' : 'false');
      };
      set(f, f.classList.contains('open'));
      h.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = !f.classList.contains('open');
        var grp = f.parentElement && f.parentElement.closest('[data-one]');
        if (open && grp) grp.querySelectorAll('.fold.open').forEach(function (o) { if (o !== f) set(o, false); });
        set(f, open);
      });
    });
  }

  window.AI = { setup: setup, lab: function (sel) { document.querySelectorAll(sel).forEach(lab); }, folds: folds,
    compare: function (sel) { document.querySelectorAll(sel).forEach(compare); } };
})();
