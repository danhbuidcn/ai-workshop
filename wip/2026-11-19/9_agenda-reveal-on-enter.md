# Slide "Bản đồ buổi học": hiện từng mục khi bấm Enter
Nhánh: .
## Input
Owner (2026-11-20): slide "Bản đồ buổi học" (slide 4/34) chỉ hiển thị tiêu đề; bấm Enter thì mới hiện tiếp các nội dung.
## Context
Slide có 7 mục (01–07) và ô "Mỗi phần có 1 bài thực hành nhỏ." Giả định: lúc đầu chỉ có tiêu đề; mỗi lần Enter hiện thêm 1 mục theo thứ tự 01→07, rồi tới ô cuối. Enter khi đã hiện hết thì sang slide kế như cũ. Mũi tên/nút vẫn dùng bình thường. Khi in PDF hiện hết. Xem cách các slide khác trong `ai.js` đã làm bước hiện dần (VD demo Socrate slide 3, nút "Bấm để nghe tiếp") để dùng lại, không thêm thư viện.
## Plan
- [ ] Đọc `ai.js`, `ai.css`, slide "Bản đồ buổi học"
- [ ] Ẩn các mục lúc đầu, Enter hiện từng mục; hết thì Enter sang slide kế
- [ ] Kiểm tra bằng Chrome headless: không lỗi JS, Enter hoạt động, quay lại slide không bị hỏng
## Kết quả
