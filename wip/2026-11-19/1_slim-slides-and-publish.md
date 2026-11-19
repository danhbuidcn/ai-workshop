# Rút gọn slide còn ~30 và đẩy lên GitHub
Nhánh: .
Phụ thuộc: 0_workshop-html.md
## Input
Owner (2026-11-19), sau khi xem slide 1–11:
- Bỏ chữ thừa học viên không cần (vd slide 1: dòng "Cho người bận rộn · không cần biết kỹ thuật", 3 nhãn "2 giờ / ChatGPT-Gemini miễn phí / Làm được ngay", dòng hướng dẫn bấm ▶).
- Sau slide 1 thêm 1 slide: đối tượng hướng đến + mục tiêu (học xong nhận được gì).
- Slide 5: xoá "Giải thích cho học sinh lớp 5 · 15 phút" (và nhãn tương tự ở mọi phần).
- Gom slide 5–9 thành 1 slide. Xoá slide 11, giữ slide 10.
- Phần giới thiệu chỉ có 1 giờ → giảm từ 61 slide xuống ít nhất có thể (đề xuất ≤ 30).
- Đẩy TOÀN BỘ nội dung repo lên GitHub (owner đã biết repo public lộ prompt cá nhân + wip/, đồng ý đẩy hết).
- Giảm cỡ chữ (font-size) để mỗi slide chứa được nhiều nội dung hơn, miễn vẫn đọc được khi chiếu.
- Thêm chữ "danhbuidcn" ở chân slide, như tên tác giả (hiện trên mọi slide, nhỏ, kín đáo).
- Chốt: 30 slide, đẩy hết.
## Context
- File: `index.html` (slide), `handouts/index.html` (phiếu), `outline/`, `README.md`. Plan cũ: [0_workshop-html.md](0_workshop-html.md).
- Giữ phong cách lớp 5, nhưng KHÔNG ghi nhãn "lớp 5", số phút, hay lời nói với người dạy lên slide. Ghi chú cho người dạy (nếu cần) để ở `outline/`, không để trên slide.
- Mỗi phần: giữ ý chính + 1 slide thực hành; bỏ slide lặp ý. Tổng kết 1 slide; bài tập cuối giữ prompt mẫu của owner.
- Thời gian lại: buổi 1 giờ (thay 2 giờ). Sửa "2 giờ" ở mọi nơi (slide, README, handouts, outline).
- Đẩy GitHub: tài khoản `danhbuidcn`, repo `ai-workshop` public (đã kiểm tra trống). Bật Pages nhánh `master`, thư mục `/`.
## Plan
- [ ] Đọc lại `index.html`, lập bảng: slide cũ → giữ / gom / xoá. Ghi vào Kết quả
- [ ] Sửa slide 1–11 đúng yêu cầu owner ở trên, thêm slide "Dành cho ai · học xong được gì"
- [ ] Rút các phần còn lại cho đủ ≤ 30 slide, bỏ nhãn thừa (số phút, "lớp 5") trên toàn bộ slide
- [ ] Sửa "2 giờ" → "1 giờ" ở README, outline, handouts nếu có; cập nhật `outline/` khớp slide mới
- [ ] Kiểm tra bằng Chrome headless: không slide tràn chữ, đếm slide, không link hỏng, in PDF
- [ ] Commit
- [ ] `gh repo create danhbuidcn/ai-workshop --public --source=. --remote=origin --push` rồi bật Pages (`gh api -X POST repos/danhbuidcn/ai-workshop/pages -f 'source[branch]=master' -f 'source[path]=/'`)
- [ ] Mở thử link `https://danhbuidcn.github.io/ai-workshop/` (chờ 1–2 phút), báo link
## Kết quả
