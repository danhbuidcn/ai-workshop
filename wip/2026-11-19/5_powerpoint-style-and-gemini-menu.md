# Slide kiểu PowerPoint có điểm nhấn + sửa menu Gemini theo giao diện thật
Nhánh: .
Phụ thuộc: 4_design-pass.md
## Handoff (2026-11-19 17:45)
- **Đang ở đâu:** xong đợt 1b (góp ý của owner cho slide 1–10). DỪNG chờ owner duyệt. Slide 11–30 vẫn kiểu cũ, trang chạy bình thường.
- **Owner xem:** ảnh mới `img/5_slide-02, 03, 05, 07, 09.png`, hoặc mở `index.html#2` …; thử bấm "x / 30" góc phải dưới, gõ số + Enter. Chi tiết: mục "Đợt 1b" trong `## Kết quả`.
- **Bước tiếp (sau khi duyệt, `spawn --resume`):** thêm class `pp` + sắp layout cho slide 11–30, theo luật "nhiều ý → danh sách căn trái" (bước 3) → sửa menu Gemini (bước 4) → máy trung gian 20 lượt/5 phút (bước 5) → kiểm tra (bước 6).
- **File:** `index.html` (CSS mục "Kiểu PowerPoint", `ul.dot`/`.ls`, ô `#goto` + slide 1–10).
## Input
Owner (2026-11-19):
1. Thiết kế slide "như PowerPoint" (các slide mẫu owner gửi, từ slide 4 của mẫu trở đi), vì chữ/khối hiện tại không tạo được điểm nhấn. Tham khảo thêm thư mục mẫu: https://drive.google.com/drive/folders/1T6xAyeMAyJ42Oaj2-FvZOQV9eLaPngXq
2. Sửa hướng dẫn nối Gmail/Drive cho đúng giao diện Gemini tiếng Việt thật (owner gửi ảnh).
## Context
### A. Ảnh mẫu (để NGOÀI repo, không commit)
`~/.config/ai-workshop/design-ref/mau-17.png … mau-21.png` (mẫu Google Slides chủ đề "Sports and Physical Activity"). Đọc từng ảnh bằng Read. Không chép ảnh/mẫu vào repo, không dùng chữ/hình gốc; chỉ học **cách bố cục**.
Điểm chung cần học:
- Nền kem ấm, trang trí góc (vòng tròn, chấm, nét lượn, mảng màu) tạo khung, không che chữ.
- Tiêu đề rất to, đậm (font có chân/serif đậm cho tiêu đề + font gọn cho thân bài; chỉ dùng font có sẵn trên Windows/web, không tải ngoài nếu làm chậm).
- **Mục lục đánh số**: vòng tròn xanh đậm có số 01/02/03/04, cạnh đó tiêu đề màu + 1 dòng mô tả.
- **Số lớn làm điểm nhấn**: 1 con số khổng lồ, caption nhỏ.
- **Vòng tròn biểu tượng** (icon trong hình tròn) trên mỗi ý, tiêu đề màu + 1–2 dòng chữ; lưới 3×2 đều.
- **Vòng tròn trung tâm** + 4 ý xung quanh nối bằng đường mảnh.
- Bảng: hàng tiêu đề màu hồng, cột đầu xanh đậm chữ trắng, số to đậm.
- Slide mở phần: số rất lớn + tên phần + hình minh hoạ lớn bên phải.
- Palette: xanh lá đậm, cam san hô, hồng nhạt, vàng, xanh đen cho chữ, nền kem. Ít chữ, chữ lớn, nhiều khoảng thở.
Thử mở thư mục Drive bằng WebFetch; không đọc được thì chỉ dùng 5 ảnh, ghi vào Kết quả.
### B. Việc thiết kế
- Bộ "mẫu slide" HTML/CSS dùng chung: Mở phần (số lớn + tên + hình), Mục lục đánh số, Ý chính + số lớn, Lưới 3 ý (vòng tròn biểu tượng), Sơ đồ trung tâm + 4 ý, So sánh 2 thẻ (từ plan 4), Bảng, Thực hành ①② (đã có), Chốt (câu cần nhớ).
- Hình minh hoạ tự vẽ bằng SVG/emoji lớn trong vòng tròn (nhất quán, không cần mạng, không dùng ảnh có bản quyền). Mỗi slide ≥1 hình khối phục vụ ý chính.
- Mỗi slide 1 điểm nhấn duy nhất. Kiểm bằng "nheo mắt": làm mờ ảnh chụp, thấy ý chính trước.
- Giữ tương tác từ plan 4 (bấm để mở, so sánh 2 cột), chữ chân "danhbuidcn", ≤ 30 slide. Chữ thân ≥ 20px, tiêu đề ≥ 56px trên khung 1280×720.
### C. Sửa menu Gemini (giao diện tiếng Việt thật của owner; ảnh `~/.config/ai-workshop/design-ref/gemini-menu-*.png`, đọc để xác nhận)
- Thanh trái: Cuộc trò chuyện mới, Thư viện, Đã lên lịch, **Tuỳ chỉnh**, Video, Sổ ghi chú.
- Menu tài khoản: **Trí thông minh cá nhân**, **Kỹ năng**, **Gem**, Giao diện, ...
- **Tuỳ chỉnh** có 3 tab: **Khám phá | Trình kết nối | Kỹ năng**. Tab **Trình kết nối** (gemini.google.com/customize/connectors) có **Google Workspace** (Gmail, Drive, Docs…), nút **+** để bật; ngoài ra Google Photos, YouTube, Danh bạ, YouTube Music.
- **Trí thông minh cá nhân**: Bộ nhớ (công tắc), **Các ứng dụng có thể kết nối**, **Chỉ dẫn cho Gemini** (dặn cách trả lời cố định, hợp bài tập cuối), Tóm tắt bộ nhớ.
- Việc: sửa mọi chỗ "Customize → Connectors" thành `Tuỳ chỉnh → Trình kết nối → Google Workspace → +` (đường phụ: `Trí thông minh cá nhân → Các ứng dụng có thể kết nối`). Bài tập cuối: thêm `Trí thông minh cá nhân → Chỉ dẫn cho Gemini` là chỗ dán khung trả lời cố định; Gem là cách khác. Thêm câu "không thấy thì tìm chữ 'Trình kết nối' hoặc 'Connectors'".
- Ảnh chụp có tên + lịch sử chat riêng của owner: KHÔNG đưa vào repo.
## Plan
- **Owner đã DUYỆT slide 1–10 (2026-11-19). Làm tiếp toàn bộ phần còn lại ngay, không dừng:** bước 3 (slide 11–30 kiểu PowerPoint, theo đúng luật đã duyệt: nhiều ý → danh sách căn trái, chỉ tiêu đề + câu chốt căn giữa, mỗi slide 1 điểm nhấn), bước 4 (sửa menu Gemini mục C), bước 5 (nâng giới hạn 20 lượt/5 phút, deploy.sh, thử thật, không in key), bước 6 (kiểm tra cuối). Không push.
- **Đợt 1b (owner góp ý sau khi xem 10 slide, 2026-11-19). Chỉ sửa slide 1–10 + thành phần chung, rồi DỪNG chờ duyệt, chưa làm slide 11–30:**
  - [x] Thêm ô **nhập số để nhảy tới slide** (vd gõ 12 + Enter → tới slide 12; hợp lệ 1–30; hiện "x / 30" bấm vào để gõ số; cũng giữ `#số` trên địa chỉ). Không ảnh hưởng phím ←/→. — xong (17:45): "x / 30" thành nút; bấm → ô số; Enter nhảy, số sai (vd 99) ô đỏ + giữ nguyên, Esc/bấm ra ngoài thì thôi. Thử thật: #3 → gõ 12 → #12; → #13; ←← #11; 99 → không đổi; 30 → #30.
  - [x] Slide 2, mục "Dành cho ai": đổi sang **danh sách theo dòng**, căn trái, mỗi dòng 1 ý ngắn (gạch đầu dòng hoặc vòng tròn nhỏ), thay vì đoạn văn căn giữa. — xong: vòng tròn 🙋 + tên cạnh nhau, 4 dòng chấm san hô.
  - [x] Slide 2, ba ý "Mở sẵn AI / Hỏi thoải mái / Làm thật": **bỏ hẳn mục này**. — xong: 3 ý này nằm ở slide 3 (Bản đồ buổi học), đã bỏ ở đó + bỏ CSS `.tips`.
  - [x] Slide 7 ("2 loại AI"): mỗi loại viết **gạch đầu dòng căn trái** (ví dụ, đặc điểm), bỏ các câu liền nhau dài; vẫn giữ vòng tròn biểu tượng và tên loại. — xong: mỗi loại 4 dòng.
  - [x] Slide 9 ("4 cái tên hay gặp"): mỗi tên (ChatGPT, Gemini, Claude, Perplexity) có các ý bên trong dạng **danh sách gạch đầu dòng căn trái** (Dùng khi nào; Mạnh ở đâu…), không viết cụm văn căn giữa. Sửa tiêu đề cho khớp số thẻ thực tế (nếu còn Codex/Claude Code như một mục riêng thì đếm đúng). — xong: thẻ có 2 dòng "Dùng khi / Mạnh"; bấm mở thấy "Hãng / Vào: trang web"; ô Codex thành 3 dòng. Tiêu đề giữ "4": đúng 4 thẻ, Codex/Claude Code là ô phụ.
  - **Luật chung từ nay cho mọi slide:** nội dung nhiều ý → danh sách căn trái, mỗi dòng 1 ý ngắn; chỉ tiêu đề và câu chốt mới căn giữa. Thông tin so sánh nhiều mục → danh sách, không đoạn văn.
  - [x] Chụp lại ảnh các slide đã đổi (ghi đè `img/5_slide-0N.png`), commit, ghi Handoff, DỪNG. — xong: ghi đè ảnh 02, 03, 05, 07, 09.
- **Nhắc lại của owner:** 10 slide đầu phải làm GIỐNG POWERPOINT NHƯ CÁC ẢNH MẪU (`mau-17…21.png`): nền kem có trang trí góc, tiêu đề to đậm, mục lục số trong vòng tròn, vòng tròn biểu tượng, số lớn, hình minh hoạ lớn, bảng màu. Không phải giao diện web/thẻ chữ như hiện tại. Nhìn ảnh mẫu bên cạnh slide mình làm để so (chụp cạnh nhau, ghi vào Kết quả: giống ở đâu, khác ở đâu).
- **Owner (2026-11-19): làm trước 10 slide đầu để duyệt.** Chỉ làm bộ mẫu + slide 1–10 theo phong cách mới, chạy được trên trang thật (file `index.html`), chụp ảnh 10 slide vào `wip/2026-11-19/img/5_slide-01.png … 5_slide-10.png`, commit, rồi **DỪNG** (ghi Handoff: đã làm gì, bước tiếp, ảnh ở đâu). KHÔNG áp cho slide 11 trở đi, KHÔNG sửa menu Gemini (mục C) và KHÔNG nâng giới hạn lượt ở bước này: để sau khi owner duyệt. Slide 11–30 để nguyên kiểu cũ trong lúc chờ, trang vẫn chạy bình thường.
- Chỉ sau khi owner duyệt mới làm phần còn lại (owner ra lệnh nối tiếp bằng `spawn --resume`).
- Owner chốt thêm: nâng giới hạn máy trung gian lên **20 lượt / 5 phút** (hiện 5 lượt/phút toàn bộ; nút So sánh tốn 2 lượt). Sửa trong `proxy/Code.gs`, chạy lại `bash proxy/deploy.sh` (đã đăng nhập clasp), thử gọi thật, vẫn không in key. Chú ý: giới hạn này tính theo từng người (cid) hay toàn bộ? Giữ theo người, thêm trần chung hợp lý để không cạn hạn mức miễn phí của Google (ghi con số chọn vào Kết quả).
- [x] Đọc 5 ảnh mẫu + thử Drive; ghi bảng "layout học được" vào Kết quả — xong (2026-11-19 17:10): Drive chỉ đọc được danh sách 50 file .pptx (Slidesgo…), không có ảnh xem trước → chỉ dùng 5 ảnh. Bảng ở `## Kết quả`. 4 ảnh menu Gemini khớp mục C (menu tài khoản mở từ nút ⚙ cạnh tên ở góc dưới trái).
- [x] Làm bộ mẫu layout (CSS chung) + vài hình SVG/biểu tượng; làm 3 slide mẫu (mở phần, mục lục đánh số, lưới 3 ý), chụp ảnh lưu `wip/2026-11-19/img/` cho owner xem — xong (2026-11-19 17:55): CSS "Kiểu PowerPoint" trong `index.html`, chỉ bật ở slide có class `pp` (slide 1–10). Đã làm 10 slide (không chỉ 3), ảnh `img/5_slide-01…10.png`. Kiểm: tràn dọc 0 ở slide 1–7, 9; slide thực hành 8, 10 cuộn như trước (94px, 115px); chữ < 18px: 0; lỗi JS: 0; in PDF 30 trang; bấm ô slide 9 vẫn mở/đóng; laptop 1024×600 vẫn vừa (tự thu nhỏ). Chi tiết ở `## Kết quả`.
  - Không thêm slide (đang đúng 30). Theo lệnh owner "làm trước 10 slide": kiểu mới chỉ bật ở slide có class `pp` (slide 1–10), slide 11–30 giữ nguyên kiểu cũ.
  - Slide 1–10: "Mở phần" cho slide 1 (tiêu đề) + slide 6 (ý chính + hình lớn); "Mục lục đánh số" cho slide 3; "Số lớn" cho slide 4; "Lưới vòng tròn biểu tượng" cho slide 7, 9; slide 2, 5, 8, 10 theo nền + chữ mới. Để sau duyệt: "Trung tâm + 4 ý" (slide 18), "Bảng" (slide 23), "Mục lục" cho tổng kết (slide 25), "Chốt" (slide 30).
  - Ảnh 10 slide: `wip/2026-11-19/img/5_slide-01.png … 5_slide-10.png`. Xong thì ghi Handoff + DỪNG.
- [ ] Áp bộ mẫu cho toàn bộ slide từ slide 4 trở đi (gồm 12–14, 23), giữ nội dung + tương tác
- [ ] Sửa menu Gemini theo mục C ở slide, phiếu, outline, README
- [ ] Máy trung gian: 20 lượt / 5 phút / người + trần chung; deploy, thử gọi thật, sửa `proxy/HUONG-DAN.md` (để sau khi owner duyệt 10 slide)
- [ ] Kiểm tra: không tràn chữ, "nheo mắt", đọc được ở 1280×720 và laptop nhỏ, in PDF ≤ 30 trang, không lỗi JS, không lộ key, không có ảnh mẫu/ảnh Gemini trong repo (`git ls-files`), commit (không push)
## Kết quả
### Layout học được (5 ảnh mẫu `mau-17…21`)
| Ảnh | Layout | Cái tạo điểm nhấn | Dùng ở slide |
|---|---|---|---|
| 17 | Mục lục 2×2 | Vòng tròn xanh đậm có số 01–04 + chấm cam ở góc; tiêu đề màu xanh + 1 dòng mô tả | 3, 25 |
| 18 | Mở phần | Số "01" rất to màu xanh, tên phần to đậm có chân, hình minh hoạ lớn bên phải | 1, 6 |
| 19 | Lưới 3×2 | Vòng tròn có hình ở mỗi ý, tiêu đề màu, 1–2 dòng chữ, căn giữa | 9, 13, 22 |
| 20 | Bảng | Hàng đầu hồng chữ cam, cột đầu xanh đậm chữ trắng, số to đậm | 23 |
| 21 | Trung tâm + 4 ý | Cụm vòng tròn giữa, 4 ý 2 bên nối bằng đường mảnh | 18 |
Chung: nền kem, trang trí góc (tam giác, vòng cung, chấm, nét lượn) không che chữ; tiêu đề có chân rất to; nhiều khoảng trống.

### Đợt 1: bộ mẫu + slide 1–10 (2026-11-19 17:55)
| Slide | Trước | Sau (mẫu dùng) | Ảnh |
|---|---|---|---|
| 1 | Emoji + tiêu đề giữa | Mở phần: tiêu đề có chân 96px bên trái + 1 câu phụ; cụm vòng tròn 🤖🙋🤝 bên phải | [5_slide-01](img/5_slide-01.png) |
| 2 | 2 thẻ chữ + quy trình hộp | Thẻ trắng có 5 ý đánh số trong vòng tròn (ý 5 = đích, san hô); "Dành cho ai" có vòng tròn biểu tượng; quy trình là 3 vòng tròn nối mũi tên | [5_slide-02](img/5_slide-02.png) |
| 3 | 7 hộp xếp hàng | Mục lục: số 01–07 trong vòng tròn xanh + chấm san hô, tên phần màu, 1 dòng mô tả; 07 (bài tập cuối) màu san hô | [5_slide-03](img/5_slide-03.png) |
| 4 | 3 hộp + thẻ vàng | 3 bước có số tròn, không khung; số khổng lồ "Hàng tỉ" (120px) + vòng tròn 📚 | [5_slide-04](img/5_slide-04.png) |
| 5 | Câu + cột | Câu "Con mèo…" chữ có chân 40px, cột "cá" san hô | [5_slide-05](img/5_slide-05.png) |
| 6 | Emoji + 2 thẻ | Mở phần: tiêu đề 64px bên trái + "AI chọn … khác … Không chắc là …"; cụm vòng tròn 🦜💬❓ bên phải | [5_slide-06](img/5_slide-06.png) |
| 7 | 2 thẻ | Lưới vòng tròn biểu tượng: "AI dự đoán" phụ (nhỏ, không khung), "AI tạo nội dung" chính (vòng tròn 150px, thẻ trắng) | [5_slide-07](img/5_slide-07.png) |
| 8, 10 | Bài thực hành | Nền + tiêu đề mới, các bước có số trong vòng tròn xanh; khung ① ② giữ nguyên | [08](img/5_slide-08.png), [10](img/5_slide-10.png) |
| 9 | 4 thẻ bấm để mở | Lưới vòng tròn biểu tượng trong thẻ trắng (vẫn bấm để mở, viền san hô khi mở) | [5_slide-09](img/5_slide-09.png) |

### So với ảnh mẫu (chụp cạnh nhau ở `/tmp/aw5/side.png`, không đưa ảnh mẫu vào repo)
- **Giống:** nền kem; trang trí góc (tam giác góc trái trên, vòng hồng, vòng vàng, dấu ✕ xanh/san hô, nét lượn vàng, vòng cung xanh góc phải dưới, nửa tròn hồng góc trái dưới); tiêu đề có chân rất to, căn giữa; số trong vòng tròn xanh đậm có chấm san hô (giống mau-17); mở phần chữ to trái + hình lớn phải (mau-18); vòng tròn biểu tượng + tên màu xanh có chân (mau-19).
- **Khác:** hình minh hoạ là emoji trong cụm vòng tròn (không có hình vẽ người như mẫu; không dùng ảnh có bản quyền, không cần mạng). Tam giác góc trái lấy màu từng phần (để biết đang ở phần nào), mẫu dùng xanh đen. Slide nhiều chữ hơn mẫu vì giữ nội dung cũ; dải chốt và thẻ bấm để mở vẫn có khung (để học viên biết bấm được). Slide thực hành 8, 10 vẫn là khung nhập/kết quả.
- Bài "nheo mắt" (làm mờ 3px, `/tmp/aw5/blur.png`): vẫn thấy rõ tiêu đề slide 1, 6; số 01–07 slide 3; "Hàng tỉ" slide 4; cột san hô slide 5; thẻ chính slide 7; 4 vòng tròn slide 9; nút Gửi cam slide 8, 10.

### Quyết định worker tự chọn (đợt 1)
- Kiểu mới chỉ bật bằng class `pp` trên từng `<section>`, để slide 11–30 giữ nguyên khi chờ duyệt. Đợt 2 chỉ cần thêm `pp` + sắp layout.
- Font tiêu đề: `Cambria, Georgia, "Noto Serif", "Liberation Serif", "DejaVu Serif"` (có sẵn trên Windows/Mac, đủ dấu tiếng Việt, không tải ngoài). Ảnh chụp trên máy Linux nên hiện bằng Noto Serif; trên Windows sẽ là Cambria.
- Màu xanh lá đậm `#2f7d63` chỉ làm khung (số, tên mục); "nên làm" vẫn là xanh lá tươi + ✅ ở các khung so sánh. San hô `#f0745a` = chấm nhấn, đích (thay vai trò cam ở slide `pp`); nút Gửi vẫn cam.
- Trang trí góc vẽ bằng 1 SVG nhúng trong CSS (không có file ảnh, không cần mạng); chữ ký "danhbuidcn" dời sang phải 50px để không đè nửa tròn hồng.
- Slide 1 thêm 1 câu phụ "Học cách giao việc cho trợ lý AI." (lấy từ câu chốt slide 2). Slide 3: mô tả 1 dòng cho 7 phần lấy từ nội dung các phần; 3 lời dặn thành hàng 3 cột.
- Đã viết sẵn CSS bảng kiểu mẫu (`.pp table`) để dùng ở đợt 2 (slide 23); "Trung tâm + 4 ý" làm ở đợt 2.
- Có 2 worker cùng id chạy song song lúc đầu (pid 549174 và 550070); đã nhắn nhau, worker sau dừng, không sửa code.

### Đợt 1b: sửa theo góp ý owner (2026-11-19 17:45)
| Việc | Sau | Ảnh |
|---|---|---|
| Nhảy tới slide | Bấm "x / 30" (gạch chân chấm) → gõ số → Enter. Sai số: ô đỏ. Phím ←/→, `#số` trên địa chỉ vẫn chạy | — |
| Slide 2 | "Dành cho ai": 4 dòng căn trái, chấm san hô | [5_slide-02](img/5_slide-02.png) |
| Slide 3 | Bỏ 3 ý "Mở sẵn AI / Hỏi thoải mái / Làm thật" | [5_slide-03](img/5_slide-03.png) |
| Slide 5 | Đoạn văn dưới cột → 2 dòng danh sách (theo luật chung) | [5_slide-05](img/5_slide-05.png) |
| Slide 7 | Mỗi loại AI 4 dòng căn trái; giữ vòng tròn + tên | [5_slide-07](img/5_slide-07.png) |
| Slide 9 | Thẻ: "Dùng khi / Mạnh" thành danh sách; chi tiết khi bấm: "Hãng / Vào: …" xếp 1 hàng; ô Codex 3 dòng | [5_slide-09](img/5_slide-09.png) |

- Kiểm (1280×720, Chrome headless): tràn dọc 0 ở slide 1–7, 9; slide thực hành 8, 10 cuộn như trước (94px, 115px); chữ < 18px: 0; lỗi JS: 0; in PDF 30 trang; laptop 1024×600 vẫn vừa.
- Quyết định tự chọn: owner ghi "slide 2" cho 3 ý cần bỏ, nhưng 3 ý đó chỉ có ở slide 3 → bỏ ở slide 3. Kiểu danh sách chung: `ul.dot` (và `.ls` để dùng trong nút bấm). Vòng tròn biểu tượng ở slide 9 nhỏ lại 96 → 80px để thẻ không tràn. Slide 9 giữ tên "4 cái tên" vì có đúng 4 thẻ.
- Còn lệch: ở slide 9, khi bấm mở 1 thẻ, slide dài thêm 80px và phải cuộn (trước là 39px), vì thẻ giờ có 2 dòng danh sách. Nhãn "⬇ Cuộn xuống xem tiếp" hiện như cũ.

### Còn lại (chờ owner duyệt)
- Bước 3–6 ở `## Plan`: áp cho slide 11–30, sửa menu Gemini, máy trung gian 20 lượt/5 phút, kiểm tra toàn bộ.
- Nhãn "⬇ Cuộn xuống xem tiếp" có thể hiện thoáng qua khi vừa chuyển slide (có từ trước).
