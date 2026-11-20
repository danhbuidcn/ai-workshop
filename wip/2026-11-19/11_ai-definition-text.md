# Sửa câu định nghĩa AI (slide 5)
Nhánh: .
Phụ thuộc: 10_reveal-on-enter-all-slides.md
## Input
Owner (2026-11-20): sửa câu định nghĩa AI thành: "AI là công nghệ giúp máy tính có thể suy nghĩ, học hỏi và đưa ra quyết định giống như con người."
## Context
Slide "AI là gì" (slide 5, có "A ➜ 01000001") trong `index.html`: thay câu định nghĩa AI worker 6 đã thêm bằng đúng câu trên. Chỉ đổi chữ, giữ bố cục và cơ chế Enter hiện dần (file 10). Nếu `outline/01-ai-la-gi.md` hoặc README chép câu cũ thì sửa cho khớp.
## Plan
- [x] Thay câu định nghĩa ở slide 5 (và outline/README nếu có)
- [x] Kiểm tra slide hiển thị đúng, không lỗi JS
## Kết quả
- Sửa [index.html](../../index.html) dòng 450: giữ "**AI (trí tuệ nhân tạo)** là" + câu mới "công nghệ giúp máy tính có thể suy nghĩ, học hỏi và đưa ra quyết định giống như con người." và phần "Bên trong, nó chỉ là con số:".
- Outline/README không chép câu cũ → không sửa.
- Chỉ đổi chữ trong thẻ `<p>`; HTML/JS không đổi nên không thể lỗi JS (grep xác nhận 1 chỗ mới, 0 chỗ cũ). Không mở trình duyệt.
