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
- [x] Đọc kết quả file 9, `ai.js`, `ai.css`, các slide trong `index.html` (ai.js không cần sửa; làm hết trong `index.html`)
- [x] Làm cơ chế chung cho mọi slide, đánh dấu khối cần hiện dần ở từng slide (tự chia theo cấu trúc; 3 slide có `data-rv`)
- [x] Xử lý các slide có tương tác riêng (Socrate, thực hành, so sánh 2 cột)
- [x] Kiểm tra Chrome headless: duyệt cả 34 slide bằng Enter, không lỗi JS, bấm lùi OK, in PDF hiện hết
## Kết quả
Đã sửa [index.html](../../index.html) (không đụng `ai.js`, `ai.css`). Thay đoạn code riêng của slide "Bản đồ" bằng cơ chế chung cho cả 34 slide.
- **Cách chia khối (tự động):** tiêu đề, nhãn góc, nút "THỰC HÀNH", dấu tiến độ và hình trang trí luôn hiện. Phần còn lại ẩn; mỗi Enter hiện 1 khối: 1 mục danh sách, 1 thẻ, 1 ô bấm để mở, 1 dòng, 1 hộp prompt (kèm khung Gemini trả lời), 1 widget so sánh, câu chốt. Mũi tên, số, biểu tượng hiện cùng khối kế tiếp. Quy tắc nằm ở `RV_SKIP`, `RV_BOX`, `RV_PRE`, `RV_POST` trong script cuối `index.html`.
- **Chỉnh tay khi cần:** thuộc tính `data-rv="phần | phần"` trên `<section>` (mỗi phần là 1 selector; `all:` = cả nhóm hiện cùng lúc). Dùng ở 3 slide: "AI chơi trò đoán chữ" (4 thanh % hiện cùng lúc), "2 loại AI" (tách danh sách bên phải), "Gemini đưa 1 đoạn hướng dẫn 4 khối" (3 thẻ + danh sách gom nhóm, tránh 10 lần bấm).
- **Slide có tương tác riêng:** Socrate (`data-rv="custom"`): Enter = bấm nút "Bấm để nghe tiếp", đủ 7 câu thì Enter sang slide kế. Ô bấm để mở, bài thực hành, so sánh 2 cột: giữ nguyên, chỉ hiện dần cả khối. Đang chọn 1 nút mà còn khối chưa hiện thì Enter vẫn hiện khối (không bấm nút); hiện hết rồi thì Enter trên nút làm việc của nút như cũ.
- **Quay lại:** `show()` hiện đầy đủ slide đích khi đi lùi (◀, ←, nhập số nhỏ hơn). Đi tới slide chưa xem thì chỉ có tiêu đề. In PDF hiện hết (`body.pmode` và `@media print`).
- Số lần Enter mỗi slide: 1–10 (đa số 4–8): slide 1: 1, slide 3 Socrate: 7, slide 8: 3, slide 21 và 25: 2, slide 32: 7, slide 34: 4.
Test Chrome headless (CDP, 1 instance, đã tắt): duyệt cả 34 slide bằng Enter, mỗi slide Enter hiện đúng từng khối rồi sang slide kế; không lỗi JS. Quay lại slide đang hiện dở (slide 5) → hiện đủ 0 khối ẩn; Socrate đi lùi hiện đủ 7 câu; bấm 1 ô bấm để mở rồi Enter vẫn hiện khối kế; slide 18 (so sánh 2 cột) hiện hết sau 6 Enter; chế độ in và `beforeprint` đều `visibility: visible`.
Quyết định của tôi:
- Mũi tên →, PageDown, Space và nút ▶ vẫn chỉ chuyển slide (đúng quyết định ở file 9), không hiện khối. Hệ quả: thiết bị cảm ứng (vuốt) không có Enter nên không hiện được khối ẩn; bộ bấm slide (clicker) gửi PageDown cũng sẽ bỏ qua nội dung.
- Slide bìa (1) giữ tiêu đề, Enter hiện dòng phụ. Slide cuối (34) giữ tiêu đề "Cảm ơn mọi người!", 2 mục "Chia sẻ" và "Mang về" hiện dần.
- Slide 21 "Trước và sau" và 25 chỉ có 2 khối vì là 1 widget/2 thẻ lớn, không chia nhỏ thêm.
Còn lại: nếu muốn → hoặc ▶/vuốt cũng hiện khối trước khi sang slide (cần owner quyết).
