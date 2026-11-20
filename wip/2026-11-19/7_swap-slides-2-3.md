# Đổi chỗ slide 2 và slide 3
Nhánh: .
## Input
Owner (2026-11-20): slide "MỞ ĐẦU · TƯ DUY PHẢN BIỆN" đưa xuống slide 3; slide "Dành cho ai · Học xong được gì" đưa lên slide 2.
## Context
Chỉ đổi thứ tự 2 slide trong `index.html`, không đổi nội dung. Sau khi đổi, sửa số slide đang được nhắc ở slide khác, README, `outline/` nếu có; kiểm tra không lỗi JS.
## Plan
- [x] Đổi thứ tự 2 slide trong `index.html` (Socrate xuống vị trí 3, "Dành cho ai · Học xong được gì" lên vị trí 2)
- [x] Sửa tham chiếu số slide (README, outline, mục lục), kiểm tra Chrome headless không lỗi
## Kết quả
- Đã đổi 2 `<section>` trong `index.html` (Dành cho ai → slide 2, Socrate → slide 3).
- Sửa `outline/00-mo-dau.md` (đổi số + thứ tự). README, số slide khác (18, 21, 23, 25) không đổi vì tổng slide giữ nguyên.
- Kiểm tra: script trong index.html parse được (node), không chạy Chrome headless; JS Socrate dùng id nên không bị ảnh hưởng.
