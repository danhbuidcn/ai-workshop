# Slide "Bản đồ buổi học": hiện từng mục khi bấm Enter
Nhánh: .
## Input
Owner (2026-11-20): slide "Bản đồ buổi học" (slide 4/34) chỉ hiển thị tiêu đề; bấm Enter thì mới hiện tiếp các nội dung.
## Context
Slide có 7 mục (01–07) và ô "Mỗi phần có 1 bài thực hành nhỏ." Giả định: lúc đầu chỉ có tiêu đề; mỗi lần Enter hiện thêm 1 mục theo thứ tự 01→07, rồi tới ô cuối. Enter khi đã hiện hết thì sang slide kế như cũ. Mũi tên/nút vẫn dùng bình thường. Khi in PDF hiện hết. Xem cách các slide khác trong `ai.js` đã làm bước hiện dần (VD demo Socrate slide 3, nút "Bấm để nghe tiếp") để dùng lại, không thêm thư viện.
## Plan
- [x] Đọc code: các slide khác dùng class `on` + `body.pmode` trong `index.html` (không phải ai.js)
- [x] Ẩn các mục lúc đầu, Enter hiện từng mục; hết thì Enter sang slide kế
- [x] Kiểm tra bằng Chrome headless: không lỗi JS, Enter hoạt động, quay lại slide không bị hỏng
## Kết quả
Đã sửa [index.html](../../index.html): thêm id `agenda`, class `.rv-hide` (ẩn bằng visibility nên bố cục không nhảy), hàm `agendaNext()`, xử lý Enter trong handler keydown chung. Mục hiện theo số 01→07 (dù thứ tự DOM khác), rồi ô "Mỗi phần có 1 bài thực hành nhỏ". Đã hiện hết thì Enter sang slide kế. In PDF (`body.pmode`) hiện hết.
Test Chrome headless: lúc đầu 0/8 hiện; Enter 2 lần → 2; 8 lần → 8, vẫn slide 4; Enter thứ 9 → slide 5; ArrowLeft quay lại slide 4 vẫn hiện đủ 8; không lỗi JS.
Quyết định: Enter chỉ có tác dụng trên slide này; quay lại slide không ẩn lại mục đã hiện.
Còn lại: không.
