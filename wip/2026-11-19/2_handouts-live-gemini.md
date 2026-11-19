# Phiếu thực hành: chia tab + chạy Gemini ngay trên trang
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
- [ ] Kiểm tra: `grep` toàn repo không có chuỗi giống key (`AIza`); thử bằng 1 key thật nếu owner đưa vào biến môi trường `GEMINI_API_KEY` (không ghi ra file), nếu không thì kiểm tra bằng giả lập lỗi
- [ ] Commit, push lên `danhbuidcn/ai-workshop`, kiểm tra Pages cập nhật
## Kết quả
