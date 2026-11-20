# Buổi 1: sửa lại slide (font, Bản đồ 8 phần, Kĩ năng mềm, tên tác giả)
## Input
Owner (2026-11-20): Ai-workshop buổi 1, tất cả nội dung: giảm font-size 5px, thiết kế theo hướng thuyết trình PowerPoint. Slide 3 hiển thị luôn "Bản đồ buổi học" gồm 8 phần. Phần 1 giới thiệu kĩ năng mềm: 3W2H, tư duy phản biện, có nút bấm mở link YouTube https://www.youtube.com/watch?v=sGTkYMrWX6U (video owner recommend). Sửa lại toàn bộ nội dung. Đưa tên tác giả lên góc trái màn hình.
## Context
- File chính: `buoi-1/index.html` (CSS inline đầu file + slide), `buoi-1/ai.css`, `buoi-1/ai.js`; tài liệu: `buoi-1/README.md`, `buoi-1/outline/`.
- Đã chốt với owner:
  - Slide 3 = "Bản đồ buổi học" (hiện đang là slide 4, sau slide "Hỏi tiếp như Socrate"): đổi chỗ, hiện đủ 8 mục ngay, không cần bấm Enter.
  - Thêm Phần 1 "Kĩ năng mềm" → đánh số lại 01–08 (7 phần cũ thành 02–08). Giữ nội dung 7 phần cũ, chỉ đổi số/nhãn/màu (`data-s`, `.tag`, outline) cho khớp.
  - Phần 1 có slide: 3W2H (What/Why/Who + How/How much... dùng nghĩa chuẩn của 3W2H: What, Why, Who, How, How much), tư duy phản biện, nút/link mở YouTube (tab mới).
- Giả định (chưa hỏi): "giảm font-size 5px" = trừ 5px cho mọi cỡ chữ trong `index.html` (không để dưới 12px). "Tên tác giả" = chữ "danhbuidcn" (`.slide::after`), hiện ở góc trái DƯỚI → chuyển lên góc trái TRÊN.
- "Thiết kế kiểu PowerPoint": slide gọn, ít chữ, tiêu đề lớn, mỗi slide 1 ý.
## Plan
- [x] Đọc `buoi-1/index.html`, `ai.js`, `ai.css`, outline; chi tiết hoá các bước dưới
- [x] Giảm mọi font-size 5px (CSS inline + ai.css), kiểm tra không tràn slide
- [x] Đưa tên tác giả lên góc trái trên (tránh đè `.tag` ở góc phải trên)
- [x] Thêm Phần 1 "Kĩ năng mềm": slide 3W2H, slide tư duy phản biện, nút mở YouTube
- [x] Đổi slide "Bản đồ buổi học" lên vị trí 3, 8 mục, hiện hết 1 lần (bỏ `data-rv` của slide này)
- [x] Đánh số lại 01–08 ở mọi `.tag`, `data-s`, màu, `.toc`, README và outline (thêm `outline/00x-ki-nang-mem.md`)
- [x] Rà lại lời chữ các slide cho gọn kiểu thuyết trình
- [x] Mở thử trên trình duyệt: duyệt từng slide, bấm link YouTube, chụp ảnh vài slide chính vào `wip/2026-11-20/img/`
## Kết quả
Đã làm xong, commit `af8674b` (trên nhánh `wip/2026-11-20-1-session1-rework`).
- Font: trừ 5px mọi cỡ chữ trong `buoi-1/index.html` và các dòng `.slide…` của `ai.css` (sàn 12px). Giữ nguyên thanh điều hướng (`#nav`, `#goto`, `#more`) cho dễ bấm.
- Tên tác giả `danhbuidcn`: chuyển lên góc trái trên (`left:120px` ở slide `pp`, né tam giác màu).
- Phần 1 "Kĩ năng mềm" (slide 4–7, màu xanh chanh mới `--s8`): 3W2H (What/Why/Who/How/How much), tư duy phản biện, demo Socrate (chuyển từ slide 3), slide video có nút "Mở video trên YouTube" (tab mới).
- Slide 3 = "Bản đồ buổi học", 8 mục hiện hết ngay (`data-rv="custom"`, không cần Enter). Slide Socrate và bản đồ đã đổi chỗ.
- Đánh số lại 01–08: `data-s`, `.tag`, màu, mục lục, README (bảng lịch, 37 slide), `README.md` + `index.html` gốc (34 → 37 slide), outline đổi tên `02…08`, thêm `outline/01-ki-nang-mem.md`, số slide trong outline +3.
- Kiểm tra: Chrome headless, 37 slide, không lỗi JS. Ảnh: `wip/2026-11-20/img/6_slide-*.png`. Slide thực hành (21, 23, 24, 26, 31, 33, 36) cuộn dọc như trước (đã có gợi ý "cuộn xuống").
Quyết định tự chọn: giữ giả định ở Context; nội dung 3W2H viết ngắn kiểu thuyết trình; thời lượng Phần 1 ghi 4 phút (tổng buổi ~65 phút); chưa bấm thật link YouTube (không có mạng kiểm thử), chỉ kiểm `href` và `target=_blank`.
Còn lại: owner xem lại chữ trên slide 4–5 và thời lượng; chưa mở bản đã giảm font trên màn hình nhỏ.
