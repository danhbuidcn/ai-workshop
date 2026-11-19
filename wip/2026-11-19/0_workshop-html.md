# Workshop "Làm việc với AI" cho người không rành kỹ thuật (HTML, public)
Nhánh: .
## Input
Owner (2026-11-19): Làm bộ tài liệu workshop 1–2h cho 3 bạn (30+ tuổi, không rành kỹ thuật, dùng ChatGPT/Gemini free, Windows). Slide bằng HTML, đẩy lên GitHub cá nhân public, có trang GitHub Pages để share link. Giao account miichi2.
## Context
- Phong cách: giải thích như cho học sinh lớp 5 (Feynman, 80/20). Từ đơn giản, không thuật ngữ, nhiều hình khối, 1 ý/slide. Áp dụng được ngay.
- Người học: 1 giáo viên tiếng Anh, 1 giáo viên tiếng Trung, 1 làm nhân sự.
- Format workshop: giới thiệu mục → từng phần có thực hành nhỏ → tổng kết → bài tập cuối.
- Nguồn nội dung: 5 nguyên tắc Claude 101 (đã có trong `sources/`), ch.2/4/6 Claude 101 (owner cung cấp vào `sources/`), link Gemini mẫu của owner: https://share.gemini.google/0A8iPMWB2MU3 (thử mở; không được thì dùng file owner đưa), NotebookLM: https://notebook.google.com/notebook/c2f5ea9f-5ab8-441c-ab79-ffd2bb2693e7 (worker không mở được, dùng file trong `sources/`).
- GitHub: tài khoản `danhbuidcn`, remote kiểu SSH `git@github.com:danhbuidcn/<repo>.git` (giống repo `~/Documents/personal/kidguard`). Tên repo mặc định `ai-workshop` (đổi nếu trùng). Chỉ push sau khi owner đã duyệt nội dung ở bước cuối.
- Link NotebookLM/Gemini là nội dung public: worker đọc trực tiếp bằng WebFetch. `sources/` đang trống; ảnh 5 nguyên tắc: Chương 1 gồm 5 nguyên tắc (xem mục Context ở dưới).
- Không dạy cách dùng Claude trực tiếp; chỉ lấy tư duy. Ví dụ thực hành dùng ChatGPT/Gemini free.
- Kết nối Drive/Gmail/Excel: chỉ hướng dẫn làm được trên bản free; chỗ nào cần bản trả phí thì nói rõ và đưa cách thay thế (gom file vào 1 folder, dán/tải file lên).
## 5 nguyên tắc (ch.1 Claude 101, từ ảnh owner)
1. Claude mang trí tuệ, bạn mang bối cảnh và chuyên môn (prompt rỗng → kết quả rỗng).
2. Câu trả lời đầu tiên là điểm khởi đầu, không phải đáp án cuối (chỉnh dần là bình thường).
3. Projects lưu kiến thức, Skills thực thi quy trình (dùng cùng nhau).
4. Giao phó việc lặp lại, giữ lại việc cần phán đoán (việc cần chịu trách nhiệm thì người review).
5. Kiểm chứng trước khi tin tưởng (AI có thể tự tin sai; thử với việc mình đã làm rồi; luôn kiểm tra output mới).
## Dòng chảy buổi học
| # | Phần | Phút | Thực hành |
|---|---|---|---|
| 0 | Mở đầu: giới thiệu sơ các chủ đề của buổi | 5 | — |
| 1 | AI là gì (5 tuổi cũng hiểu): máy chỉ hiểu số, chữ → số (ví dụ ASCII, a → 0 1), LLM đoán chữ tiếp theo, AI dự đoán vs AI tạo nội dung | 15 | Đoán chữ tiếp theo |
| 2 | Bản đồ AI: ChatGPT / Gemini / Claude / Perplexity khác nhau thế nào (ví dụ iPhone, Samsung...), chọn cái nào khi nào | 10 | Hỏi cùng 1 câu 2 AI, so sánh |
| 3 | 5 nguyên tắc cốt lõi | 15 | Viết lại câu trả lời đầu |
| 4 | Prompt + context: mình có gì, mình muốn gì, chưa biết thì để AI hỏi ngược; công thức prompt; 4 năng lực; AI làm gì / người làm gì | 25 | Viết prompt theo công thức |
| 5 | Gom tài liệu vào 1 folder, cho AI đọc (Drive, Gmail, Excel); file .md/.txt lưu yêu cầu; ý tưởng "Project" | 20 | Kết nối Drive/Gmail |
| 6 | Tổng kết 1 trang | 5 | — |
| 7 | Bài tập cuối: chỉnh Gemini trả đúng kiểu mình muốn. Xem prompt mẫu của owner trước, rồi học viên tự làm | 20 | Làm tại chỗ + chia sẻ |
## Plan
- [x] Đọc nội dung từ link NotebookLM và link Gemini (WebFetch), lưu bản tóm tắt vào `sources/`. Không đọc được → ghi vào Handoff, hỏi owner
  - Gemini: đọc được (2 lượt) → [sources/gemini-mau.md](../../sources/gemini-mau.md). NotebookLM: cần đăng nhập, không đọc được; ch.2/4/6 chưa có → ghi ở [sources/README.md](../../sources/README.md), bù bằng kiến thức chung, owner xem lại khi duyệt.
- [x] Viết dàn ý chi tiết từng phần: `outline/NN-ten.md` (lời giải thích lớp 5, ví dụ đời thường, mô tả hình khối, bài thực hành). ~~DỪNG, chờ owner duyệt dàn ý~~ (worker chạy liền mạch; owner duyệt dàn ý + slide cùng lúc ở bước cuối)
  - 8 file [outline/00-mo-dau.md](../../outline/00-mo-dau.md) … [07-bai-tap-cuoi.md](../../outline/07-bai-tap-cuoi.md). "4 năng lực" = khung AI Fluency của Anthropic (giao việc – mô tả – đánh giá – chịu trách nhiệm); công thức prompt 5 phần.
- [x] Làm bộ slide HTML: 1 file `index.html` ở gốc repo (thành trang chủ GitHub Pages), CSS/JS viết sẵn trong file, không cần mạng; nút chuyển slide, phím mũi tên, `#số` để nhảy slide, in ra PDF (mỗi slide 1 trang)
  - [index.html](../../index.html): 61 slide, khung 1280×720 tự co theo màn hình; ◀ ▶, phím ←/→/Space/Home/End, F toàn màn hình, vuốt trên điện thoại, nút "Sao chép" ở mọi ô prompt. Chrome headless: 0 slide tràn chữ, in PDF ra đúng 61 trang.
- [ ] Làm phiếu thực hành từng phần + đề bài tập cuối + prompt mẫu có nút "Sao chép": 1 file `handouts/index.html` (in được)
- [ ] `README.md` giới thiệu ngắn + cách mở
- [ ] Kiểm tra: đọc lại với góc nhìn người non-tech (không thuật ngữ, câu ngắn), mở thử trong trình duyệt, kiểm tra link
- [ ] Tạo repo GitHub public cá nhân + bật GitHub Pages (chỉ làm sau khi owner xác nhận tên repo và rà nội dung không có thông tin riêng tư)
- [ ] Báo link Pages cho owner
## Kết quả
