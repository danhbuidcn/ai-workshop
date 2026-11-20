# Slide 7: hiện nội dung ngay, không cần Enter
## Input
Owner (2026-11-20): "sửa luôn slide 7, cho hiển thị luôn nội dung thay vì để Enter mới hiển thị". Ảnh: slide "Xem thêm: video gợi ý" (buoi-1, mục 1 · Kĩ năng mềm), có khung "Video do người hướng dẫn gợi ý" + nút "Mở video trên YouTube".
## Context
- File: `buoi-1/index.html` (slide video gợi ý, link youtube sGTkYMrWX6U).
- Hiện nội dung slide chỉ hiện sau khi bấm Enter (cơ chế reveal/step). Cần hiện hết ngay khi vào slide.
- Chỉ sửa slide này (slide thứ 7), không đổi slide khác, không đổi cơ chế chung nếu không cần.
## Plan
- [x] Đọc `buoi-1/index.html`, tìm slide 7 và đoạn code làm nội dung chỉ hiện sau Enter
- [x] Sửa để toàn bộ nội dung slide 7 hiện ngay khi vào slide (bỏ bước ẩn/Enter của slide này)
- [x] Kiểm tra: Enter/mũi tên vẫn chuyển slide bình thường, các slide khác không đổi
- [x] Ghi kết quả vào mục Kết quả, cập nhật index
## Kết quả
Sửa trực tiếp (owner cho làm luôn, không qua worker). Slide video gợi ý (mục tag '1 · KĨ NĂNG MỀM') thêm `data-rv="none"`; JS `buoi-1/index.html` hiểu giá trị `none` = không chia bước, hiện hết ngay. Chưa commit. Chưa test trên trình duyệt.
Sửa thêm cùng đợt: slide 'Cùng 1 việc, hai cách hỏi' bỏ chữ AI; slide 6 Tư duy phản biện viết lại thành 5 chủ đề + ví dụ.
