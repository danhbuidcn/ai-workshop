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
- [x] Đọc lại `index.html`, lập bảng: slide cũ → giữ / gom / xoá. Ghi vào Kết quả → bảng 61 → 30 ở `## Kết quả`. Bỏ hết slide chia phần (divider); phần mới bắt đầu bằng nhãn góc phải.
- [ ] Sửa slide 1–11 đúng yêu cầu owner ở trên, thêm slide "Dành cho ai · học xong được gì"
- [ ] Rút các phần còn lại cho đủ ≤ 30 slide, bỏ nhãn thừa (số phút, "lớp 5") trên toàn bộ slide
- [ ] Sửa "2 giờ" → "1 giờ" ở README, outline, handouts nếu có; cập nhật `outline/` khớp slide mới
- [ ] Kiểm tra bằng Chrome headless: không slide tràn chữ, đếm slide, không link hỏng, in PDF
- [ ] Commit
- [ ] `gh repo create danhbuidcn/ai-workshop --public --source=. --remote=origin --push` rồi bật Pages (`gh api -X POST repos/danhbuidcn/ai-workshop/pages -f 'source[branch]=master' -f 'source[path]=/'`)
- [ ] Mở thử link `https://danhbuidcn.github.io/ai-workshop/` (chờ 1–2 phút), báo link
## Kết quả

### Bảng slide cũ → mới (61 → 30)

| Mới | Nội dung | Slide cũ | Cách làm |
|---|---|---|---|
| 1 | Tiêu đề | 1 | Bỏ dòng phụ, 3 nhãn, dòng "Bấm ▶" |
| 2 | Dành cho ai · học xong được gì | (mới) + 2 | Thêm; ý "Bạn → AI → kết quả" của slide 2 gộp vào |
| 3 | Bản đồ buổi học | 3, 4 | Gộp; bỏ số phút; luật chơi thành 1 dòng |
| 4 | AI là gì? | 5–9 | Gom 1 slide (bóng đèn, A = 65, dãy số, AI đọc nhiều) |
| 5 | Đoán chữ tiếp theo | 10, 12 | Giữ 10; câu "máy đoán chữ / LLM" của 12 thành dòng cuối |
| – | Thử đoán cùng AI | 11 | Xoá |
| 6 | Vì đoán nên có thể sai | 13 | Giữ |
| 7 | 2 loại AI | 14 | Giữ |
| 8 | Thực hành đoán chữ | 15 | Giữ, bỏ số phút |
| 9 | 4 cái tên + dùng khi nào | 16–20 | Gộp; ví dụ "chọn điện thoại" chuyển sang `outline/` |
| 10 | Thực hành 2 AI | 21 | Giữ |
| 11 | 5 nguyên tắc = 5 ngón tay | 22, 23 | Bỏ slide chia phần |
| 12 | Nguyên tắc ① ② | 24, 25 | Gộp 2 cột |
| 13 | Nguyên tắc ③ ④ ⑤ | 26–28 | Gộp 3 cột |
| 14 | Thực hành viết lại | 29 | Giữ |
| 15 | Prompt, bối cảnh, giao như người mới | 30–32 | Gộp; "3 câu hỏi" (33) → chỉ còn ở `outline/` |
| 16 | Công thức 5 phần + để AI hỏi ngược | 34, 38 | Gộp |
| 17 | 3 ví dụ trước – sau | 35–37 | Gộp 3 cột |
| 18 | 4 năng lực | 39 | Giữ; bảng "AI làm / người làm" (40) xoá vì trùng nguyên tắc ④ |
| 19 | Thực hành viết prompt | 41 | Giữ |
| 20 | Gom 1 folder + 3 cách đưa tài liệu | 42–44 | Gộp |
| 21 | Gemini @Gmail/@Drive + Excel | 45, 46 | Gộp 2 cột |
| 22 | Đừng đưa cho AI | 47 | Giữ |
| 23 | File "yêu cầu cố định" + Project | 48, 49 | Gộp |
| 24 | Thực hành tài liệu | 50 | Giữ |
| 25 | Tổng kết | 51, 52 | Gộp |
| 26 | Lượt 1 (prompt owner) | 53, 54 | Bỏ slide chia phần |
| 27 | Lượt 2 (prompt owner) | 55 | Giữ |
| 28 | Đoạn hướng dẫn 4 khối + khung 3 phần | 56, 57 | Gộp |
| 29 | Đến lượt bạn + thử và chỉnh | 58, 59 | Gộp |
| 30 | Chia sẻ, mang về, cảm ơn | 60, 61 | Gộp |
