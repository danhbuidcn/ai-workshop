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
- [ ] Đọc `buoi-1/index.html`, `ai.js`, `ai.css`, outline; chi tiết hoá các bước dưới
- [ ] Giảm mọi font-size 5px (CSS inline + ai.css), kiểm tra không tràn slide
- [ ] Đưa tên tác giả lên góc trái trên (tránh đè `.tag` ở góc phải trên)
- [ ] Thêm Phần 1 "Kĩ năng mềm": slide 3W2H, slide tư duy phản biện, nút mở YouTube
- [ ] Đổi slide "Bản đồ buổi học" lên vị trí 3, 8 mục, hiện hết 1 lần (bỏ `data-rv` của slide này)
- [ ] Đánh số lại 01–08 ở mọi `.tag`, `data-s`, màu, `.toc`, README và outline (thêm `outline/00x-ki-nang-mem.md`)
- [ ] Rà lại lời chữ các slide cho gọn kiểu thuyết trình
- [ ] Mở thử trên trình duyệt: duyệt từng slide, bấm link YouTube, chụp ảnh vài slide chính vào `wip/2026-11-20/img/`
## Kết quả
