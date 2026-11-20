# Mọi slide: chỉ hiện tiêu đề, Enter hiện dần nội dung
Nhánh: .
Phụ thuộc: 9_agenda-reveal-on-enter.md
## Input
Owner (2026-11-20): tất cả các trang đều phải như slide "Bản đồ buổi học": chỉ hiển thị tiêu đề, bấm Enter mới hiện tiếp từng nội dung.
## Context
File 9 đã làm cơ chế cho slide "Bản đồ buổi học" (xem `ai.js`, `ai.css`, phần Kết quả của file 9). Mở rộng cho cả 34 slide. Giả định:
- Mỗi slide lúc đầu chỉ có tiêu đề (cùng nhãn phần, hình trang trí).
- Mỗi Enter hiện thêm 1 khối nội dung theo thứ tự đọc trên xuống (1 mục danh sách, 1 thẻ, 1 dòng, 1 ô so sánh…). Chia khối hợp lý, tránh quá nhiều lần bấm (khoảng 3–8 lần/slide).
- Hiện hết mà bấm Enter thì sang slide kế. Slide đã có bước riêng (demo Socrate, nút bấm, slide thực hành, so sánh 2 cột) giữ cơ chế riêng, chỉ làm cho Enter chạy cùng với nó, không xung đột.
- Dùng cơ chế chung (VD gắn thuộc tính `data-step` hoặc class cho các khối), không viết code riêng từng slide nếu tránh được. Không thêm thư viện.
- Quay lại slide trước thì hiện sẵn đầy đủ. In PDF hiện hết.
- Không đổi nội dung chữ.
## Plan
- [ ] Đọc kết quả file 9, `ai.js`, `ai.css`, các slide trong `index.html`
- [ ] Làm cơ chế chung cho mọi slide, đánh dấu khối cần hiện dần ở từng slide
- [ ] Xử lý các slide có tương tác riêng (Socrate, thực hành, so sánh 2 cột)
- [ ] Kiểm tra Chrome headless: duyệt cả 34 slide bằng Enter, không lỗi JS, bấm lùi OK, in PDF hiện hết
## Kết quả
