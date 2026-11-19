# Phiếu thực hành: chia tab + chạy Gemini ngay trên trang
## Handoff
- Đang ở: code xong, đã commit, đã triển khai Apps Script (dự án `ai-workshop-gemini`, tài khoản `danhbuidcn@gmail.com`). Địa chỉ đã ghi trong `ai.js`. Gọi thật còn HTTP 403 vì Google bắt chủ tài khoản cấp quyền 1 lần.
- Bước tiếp (owner, 2 phút):
  1. Mở https://script.google.com/d/1m5bqqruHdwnJxhXE_zCwgYE88ucOBVHF7NTyKQf-Lg7cqmXxTqVWsI5G/edit → chọn hàm `kiemTra` → **Chạy** → **Nâng cao** → **Đi tới ai-workshop-gemini** → **Cho phép**. Nhật ký hiện `OK: ...`.
  2. Chạy `bash proxy/deploy.sh` → dòng "Thử gọi thật" phải in `{"ok":true,...}`.
  3. Push lên GitHub, mở https://danhbuidcn.github.io/ai-workshop/#8 → bấm ▶ Chạy thử.
- File: [proxy/HUONG-DAN.md](../../proxy/HUONG-DAN.md), [ai.js](../../ai.js), [proxy/Code.gs](../../proxy/Code.gs).
Nhánh: .
Phụ thuộc: 1_slim-slides-and-publish.md
## Input
Owner (2026-11-19), xem `handouts/index.html`:
- Trang phiếu quá dài → chia theo đầu mục (index): bấm mục nào chỉ hiện phiếu đó.
- Gắn Gemini API key để thao tác trực tiếp trên trang (bấm nút là chạy prompt, thấy kết quả ngay).
- Hướng dẫn owner lấy Gemini API key.
- Owner (cập nhật): thao tác ngay TRÊN SLIDE (không chỉ phiếu): các slide thực hành (vd slide 8 "Đoán chữ tiếp theo") có nút chạy, kết quả hiện ngay dưới prompt. Mọi bài tập khác làm như vậy.
- Owner muốn dùng 1 key chung, học viên không thấy key. Key KHÔNG ghi vào repo/file/lịch sử git/log. Cách duy nhất giấu được: máy trung gian (Google Apps Script hoặc Cloudflare Worker) giữ key trong phần cài đặt kín; trang chỉ gọi địa chỉ trung gian. (GitHub Secrets không giấu được trên trang tĩnh: khi build, key sẽ nằm trong file JS public.) Chờ owner chọn cách + dán key vào phần cài đặt kín của trung gian, worker chỉ viết code + hướng dẫn.
- Trung gian phải có giới hạn lượt/người và chỉ nhận yêu cầu từ trang danhbuidcn.github.io.
## Triển khai Apps Script (owner muốn worker tự làm hết)
- Key chung nằm ở `~/.config/ai-workshop/gemini.key` (ngoài repo, chmod 600). Worker chỉ đọc file này khi triển khai, KHÔNG in ra log, KHÔNG ghi vào repo/wip/commit.
- Mã nguồn Apps Script không lộ cho người ngoài (chỉ chủ tài khoản xem được), nên khi triển khai được phép chèn key vào bản đẩy lên Apps Script bằng `clasp`; bản trong repo (`proxy/Code.gs`) chỉ có chỗ trống `__GEMINI_KEY__`, script triển khai thay chỗ trống ngay lúc đẩy rồi xoá bản tạm.
- Công cụ: `npx @google/clasp`. Cần đăng nhập Google 1 lần (owner làm: `npx @google/clasp login`, và bật "Google Apps Script API" tại https://script.google.com/home/usersettings). Nếu `~/.clasprc.json` chưa có → worker làm hết phần còn lại, ghi Handoff bước triển khai (lệnh sẵn), không chờ.
- Sau khi triển khai: lấy URL web app (quyền "Anyone"), ghi vào 1 biến cấu hình trong `index.html` và `handouts/index.html`, thử gọi thật 1 lần (không in key), rồi mới push.
- Giới hạn lượt: tối đa ~20 lần/phút toàn bộ + tối đa độ dài câu hỏi; trả lỗi tiếng Việt.
- Kiểm tra cuối: `grep -r "AQ\.Ab8R"` toàn repo + `git log -p` không thấy key.
## Context
- Repo public. TUYỆT ĐỐI không ghi key vào file/commit. Thiết kế: mỗi người tự dán key của mình vào 1 ô trên trang; key chỉ lưu trong trình duyệt của người đó (localStorage), có nút "Xoá key". Owner đồng ý hướng này? (chờ xác nhận trong chat; mặc định: có.)
- Gọi thẳng từ trình duyệt tới Gemini API (không server). Dùng model free hiện hành (kiểm tra tên model còn dùng được trước khi code, vd `gemini-2.5-flash` hoặc bản mới hơn; để tên model ở 1 chỗ dễ đổi).
- Mỗi ô prompt "Sao chép" thêm nút "Chạy thử" → hiện câu trả lời ngay dưới. Chưa có key → hiện hướng dẫn 4 bước lấy key bằng chữ đơn giản.
- Bài tập cuối (đặt khung trả lời cho Gemini): ô nhập "hướng dẫn cho AI" + ô hỏi + kết quả, để học viên thử chỉnh ngay.
- Lỗi thường gặp phải báo bằng tiếng Việt dễ hiểu (key sai, hết lượt miễn phí, mất mạng).
- Nhắc học viên: bản free của Google có thể dùng nội dung để cải thiện sản phẩm → không dán thông tin nhạy cảm (tên học sinh, lương...).
- Hướng dẫn lấy key (cho trang + cho owner): vào https://aistudio.google.com/apikey → đăng nhập Gmail → "Create API key" → copy → dán vào trang.
## Plan
- [x] Đọc code, chỉnh lại các bước (2026-11-19 16:00). Kết quả: dùng Apps Script (bỏ khung dán key, bước 4 bỏ); model thử thật: `gemini-3.5-flash-lite` chạy (4 s), `gemini-3.1-flash-lite` chạy, `gemini-3.5-flash` báo quá tải 503, `gemini-2.5-flash` 404 → proxy thử lần lượt danh sách model. `~/.clasprc.json` chưa có → bước triển khai ghi Handoff. Lệnh worker cấm push → không push.
- [x] Chia `handouts/index.html` thành tab/mục: menu trên cùng, bấm mục nào hiện phiếu đó (nhớ mục đang xem, `#phieu-n` mở thẳng); in PDF vẫn in đủ — xong: menu dính trên cùng, id đổi `p1`→`phieu-1`, nhớ bằng localStorage, `@media print` hiện đủ 7 phiếu. Chrome headless mở `#phieu-3` → chỉ phiếu 3 có `on`.
- [x] Viết code máy trung gian + hướng dẫn từng bước cho owner triển khai và dán key (file `proxy/` + `proxy/HUONG-DAN.md`, không chứa key) — xong: `proxy/Code.gs` (20 lượt/phút cả lớp, 5 lượt/phút/trình duyệt, câu hỏi ≤ 3000 ký tự, lỗi tiếng Việt, thử lần lượt 2 model), `appsscript.json`, `deploy.sh`, `test-proxy.js` (`node proxy/test-proxy.js` → qua hết), `HUONG-DAN.md`. Lúc chạy `deploy.sh`, `~/.clasprc.json` đã có (owner đăng nhập `danhbuidcn@gmail.com`) → đã tạo dự án + triển khai (bản @2). Gọi thử: HTTP 403 vì chưa cấp quyền lần đầu (owner phải chạy hàm `kiemTra` 1 lần, xem Handoff).
- [x] Thêm nút chạy trực tiếp trên slide thực hành và phiếu (thay cho khung dán key; dùng địa chỉ trung gian ở 1 biến cấu hình) — xong: `ai.js` + `ai.css` dùng chung; biến `AI_PROXY_URL` ở đầu `ai.js` (deploy.sh tự ghi). Slide: mọi ô `.prompt` có "▶ Chạy thử", trừ 4 ô cần Gmail/Drive/file/hồ sơ (`data-ai="off"`). Slide 24 thêm ô "Tóm tắt đoạn sau…".
- [x] (bỏ nếu dùng trung gian) Thêm khung "Gemini key" — bỏ, vì dùng máy trung gian.
- [x] Thêm nút "Chạy thử" cho các ô prompt, hiện kết quả, xử lý lỗi bằng tiếng Việt — xong: ô prompt sửa được (bấm vào để sửa); còn chỗ `[ ]` thì nhắc sửa, không gửi; khung kết quả có ô "Hỏi tiếp" (cùng cuộc trò chuyện) + nhắc không dán thông tin riêng tư; câu chỉnh (`data-ai="chain"`) gửi kèm lượt trước (slide 14, 26→27, phiếu 3, 7). Lỗi: mất mạng, quá lâu, không kết nối, hết lượt, key sai — tiếng Việt. Gõ phím trong ô không chuyển slide.
- [x] Bài tập cuối: khung thử chỉnh hướng dẫn cho AI — xong: slide mới 30/31 "Dạy Gemini trả lời đúng khung" + khung ở phiếu 7 bước 3: chọn 5 mẫu (khung trống, Bạn Đồng Hành, sửa bài tiếng Anh, thẻ từ tiếng Trung, nhân sự) → sửa → câu hỏi thử → kết quả.
- [x] Kiểm tra: `grep` toàn repo không có chuỗi giống key (`AIza`); thử bằng 1 key thật nếu owner đưa vào biến môi trường `GEMINI_API_KEY` (không ghi ra file), nếu không thì kiểm tra bằng giả lập lỗi — xong (2026-11-19 16:10):
  - Key: so khớp đúng chuỗi key + mẫu `AQ\.Ab8R|AIza…` trên toàn file và `git log -p --all` → 0 chỗ.
  - `node proxy/test-proxy.js` → qua hết (giới hạn lượt, chặn trang lạ, độ dài, đổi model khi 503, lỗi 429/400, thiếu key).
  - Key thật gọi thẳng Gemini (curl, không in key): `gemini-3.5-flash-lite` trả lời OK.
  - Trình duyệt (Playwright + Chrome, máy trung gian giả lập): slide 8, 14 (nối tiếp), 19 (nhắc sửa `[ ]`), 21 (không có nút), 26→27, slide thử 30; phiếu: tab, nhớ tab, chạy + nối tiếp phiếu 3, khung thử phiếu 7, chế độ in hiện đủ 7 phiếu và ẩn nút. Không lỗi JS.
  - Gọi máy trung gian thật: HTTP 403 → chờ owner cấp quyền (Handoff).
  - README + `outline/00`, `outline/07` đổi 30 → 31 slide.
- [x] Commit, push lên `danhbuidcn/ai-workshop`, kiểm tra Pages cập nhật — đã commit; KHÔNG push (lệnh worker cấm push/merge, runner làm sau khi worker thoát).
## Kết quả
Đã đổi (2026-11-19 16:15):
- `handouts/index.html`: mỗi phiếu 1 tab (`#phieu-1`…`#phieu-7`, nhớ tab), in vẫn đủ 7 phiếu; nút ▶ Chạy thử; khung thử ở phiếu 7.
- `index.html`: nút ▶ Chạy thử dưới mỗi prompt; slide mới 30 "Dạy Gemini trả lời đúng khung"; slide 24 thêm ô tóm tắt tài liệu; gõ phím trong ô không chuyển slide. Tổng 31 slide.
- `ai.js` + `ai.css` (mới, dùng chung): gọi máy trung gian, hiện kết quả, "Hỏi tiếp", lỗi tiếng Việt, nhắc không dán thông tin riêng tư.
- `proxy/` (mới): `Code.gs`, `appsscript.json`, `deploy.sh`, `test-proxy.js`, `HUONG-DAN.md`. Không chứa key.
- README, `outline/00-mo-dau.md`, `outline/07-bai-tap-cuoi.md`: 31 slide, thêm dòng máy trung gian.

Quyết định worker tự chọn:
- Dùng Apps Script (theo mục "Triển khai Apps Script"); bỏ khung dán key cá nhân.
- Model: `gemini-3.5-flash-lite`, dự phòng `gemini-3.1-flash-lite` (2.5-flash báo 404, 3.5-flash quá tải lúc thử). Sửa ở đầu `proxy/Code.gs`.
- Giới hạn: 20 lượt/phút cả lớp, 5 lượt/phút mỗi trình duyệt, câu hỏi ≤ 3000 ký tự, hướng dẫn ≤ 4000 ký tự.
- "Chỉ nhận từ danhbuidcn.github.io": Apps Script không đọc được địa chỉ trang gọi thật → trang tự gửi tên trang, máy trung gian kiểm tra (rào nhẹ, giả mạo được); rào chính là giới hạn lượt. Cho thêm `localhost` để thử trên máy. Mở file trực tiếp (file://) → báo dùng "Sao chép".
- Địa chỉ máy trung gian để 1 chỗ: `AI_PROXY_URL` trong `ai.js` (thay vì ghi vào 2 file html).
- Key chèn vào bản tạm lúc đẩy (theo plan); cũng đọc được từ Thuộc tính tập lệnh `GEMINI_KEY` nếu owner muốn dán tay.
- `scriptId`/`deploymentId` lưu ngoài repo: `~/.config/ai-workshop/clasp-state.json` → địa chỉ giữ nguyên khi triển khai lại.
- Ô prompt sửa được; còn chỗ `[ ]` thì nhắc sửa trước khi gửi. Ô cần Gmail/Drive/file và các đoạn "hướng dẫn 4 khối" không có nút (thử ở khung riêng).

Còn lại: owner cấp quyền Apps Script 1 lần + gọi thử thật + push (xem Handoff).

## Việc tiếp (2026-11-19 15:58, từ coordinator)
Owner chạy `bash proxy/deploy.sh` → proxy trả "chưa có key Gemini". Nguyên nhân nghi: `deploy.sh` dùng `s.replace("__GEMINI_KEY__", ...)` thay chỗ đầu tiên, mà chỗ đầu tiên là dòng chú thích 3 của `proxy/Code.gs`, nên `var KEY_IN_CODE = '__GEMINI_KEY__'` vẫn là chỗ trống.
- [x] Sửa để chỉ thay đúng `'__GEMINI_KEY__'` có dấu nháy ở dòng `var KEY_IN_CODE` (và bỏ chuỗi này khỏi chú thích) — xong: `deploy.sh` thay đúng dòng `var KEY_IN_CODE = '__GEMINI_KEY__';` (regex), báo lỗi nếu thiếu dòng hoặc còn sót chỗ trống; chú thích `Code.gs` + `HUONG-DAN.md` bỏ chuỗi. Thử key giả → dòng 7 thành `"FAKEKEY123"`; `node proxy/test-proxy.js` qua hết.
- [x] Chạy lại `bash proxy/deploy.sh` (đã đăng nhập clasp, đã cấp quyền), kiểm tra in `{"ok":true,...}`. Không in key — xong: bản @4, in `{"ok":true,"text":"Chào bạn! Tôi có thể giúp gì cho bạn?","model":"gemini-3.5-flash-lite"}`. Địa chỉ không đổi → `ai.js` không đổi.
- [ ] Thử thật trên slide #8 bằng Chrome (nút ▶ Chạy thử ra câu trả lời)
- [ ] `grep -r` + `git log -p` không thấy key; commit (không push)
