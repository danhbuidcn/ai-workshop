# Slide 3W2H: thêm ví dụ 2 prompt (mơ hồ vs rõ)
## Input
Owner (2026-11-20): trên slide 4 "Kĩ năng mềm: hỏi 5 câu" (3W2H), lấy ví dụ 2 prompt: prompt 1 không rõ ràng, prompt 2 trả lời rõ ràng theo 3W2H.
## Context
- File: `buoi-1/index.html` (slide 4, phần 1 "Kĩ năng mềm"), `buoi-1/ai.js` (nếu cần hiện từng bước), `buoi-1/outline/01-ki-nang-mem.md`, `buoi-1/README.md` (đếm slide).
- Slide 4 hiện có 5 vòng tròn What/Why/Who/How/How much và 1 dòng ví dụ nhỏ: "viết email nhắc nợ · vì hạn · gửi chị Lan · giọng lịch sự · dưới 100 chữ".
- Hướng đề xuất (chưa hỏi owner, giả định): thêm 1 slide mới ngay sau slide 4 (tổng 38 slide), 2 khung cạnh nhau kiểu `.prompt` có sẵn:
  - Prompt 1 (mơ hồ): `Viết email nhắc nợ.`
  - Prompt 2 (rõ, tô màu từng phần theo What/Why/Who/How/How much): `Viết email nhắc nợ (What) để khách trả trước hạn 25/11 (Why), gửi chị Lan, kế toán công ty ABC (Who), giọng lịch sự, 3 đoạn (How), dưới 100 chữ (How much).`
  - Dưới mỗi khung 1 dòng kết luận: "AI phải đoán nhiều" vs "AI làm đúng ngay".
- Owner chốt (ok): nhãn 2 khung là "Ví dụ 1: câu không rõ ràng" và "Ví dụ 2: câu rõ ràng (theo 3W2H)"; mỗi ví dụ là 1 câu.
- Giữ kiểu thuyết trình: ít chữ, cỡ chữ theo mặt bằng đã giảm 5px; hiện prompt 2 sau prompt 1 bằng Enter (cơ chế `data-rv` có sẵn) nếu dễ làm.
- Đồng bộ ví dụ nhỏ ở slide 4 để không lặp (bỏ hoặc rút gọn dòng ví dụ).
## Plan
- [x] Đọc slide 4, class `.prompt`, cơ chế `data-rv` trong `index.html`/`ai.js`
- [x] Thêm slide ví dụ 2 prompt sau slide 4, màu từng phần theo 3W2H
- [x] Rút gọn dòng ví dụ ở slide 4; cập nhật số slide (37 → 38) ở README, `index.html` gốc, `outline/01-ki-nang-mem.md`, số slide các outline sau
- [x] Mở thử trên Chrome: slide mới không tràn, Enter hiện đúng, không lỗi JS; chụp ảnh vào `wip/2026-11-20/img/`
## Kết quả
- Slide mới số 5 (`buoi-1/index.html`): 2 khung cạnh nhau, nhãn "Ví dụ 1: câu không rõ ràng" / "Ví dụ 2: câu rõ ràng (theo 3W2H)"; prompt 2 tô 5 màu What/Why/Who/How/How much. Enter hiện từng khung (cơ chế tự chia khối có sẵn).
- Slide 4: bỏ dòng ví dụ, thay bằng "Xem ví dụ ở slide sau."
- Tổng 38 slide. Đã sửa số slide ở `README.md`, `outline/00..08`, 2 chỗ "slide 19, 22, 24" và "slide 26" trong `index.html`. Thêm mô tả slide 5 vào `outline/01-ki-nang-mem.md`.
- Quyết định: dùng class `.exq` (không dùng `.prompt`) vì `AI.setup('.prompt')` biến mọi `.prompt` thành ô nhập có nút Chép/Gửi.
- Test: Chrome headless, 38 slide, không tràn. Ảnh: `wip/2026-11-20/img/slide5-chua-enter.png`, `slide5-day-du.png`, `slide4.png`. Chưa tự bấm Enter thật (headless), chỉ kiểm slide ẩn ban đầu và hiện đủ.
- Còn lại: không.
