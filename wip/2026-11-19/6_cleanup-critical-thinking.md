# Sửa slide: bỏ phiếu, thêm tư duy phản biện, tách 5 nguyên tắc
Nhánh: .
## Input
Owner (2026-11-20): xoá phiếu thực hành (đã nằm trong bài giảng); sửa slide 4, 9, 14; thêm slide tư duy phản biện (Socrate) ở đầu; 5 nguyên tắc mỗi cái 1 slide kèm key tiếng Anh; áp dụng tư duy phản biện + kỹ năng mềm xuyên bài.
## Context
Repo: bài giảng HTML `index.html` + `ai.css` + `ai.js` (slide `<section class="slide pp" data-s="N">`). Số "slide N" là số thứ tự người xem thấy. Outline ở `outline/`, phiếu ở `handouts/`.
Yêu cầu chi tiết:
1. **Xoá phiếu thực hành**: bỏ thư mục/trang `handouts/` và mọi liên kết/mục/slide `prac` chỉ để phát phiếu (nội dung phiếu đã có trong bài giảng). Nếu một slide `prac` chứa bài thực hành thật thì giữ phần thực hành, chỉ bỏ chữ "phiếu". Cập nhật `README.md`, `outline/`.
2. **Slide 4**: "A ➜ 65 ➜ 01000001" → "A ➜ 01000001". Slide này chưa trả lời "AI là gì?": thêm câu định nghĩa ngắn, dễ hiểu. Giảm font-size cho vừa nhiều nội dung hơn.
3. **Slide 9**: xoá dòng "👆 Bấm vào từng ô để xem thêm. Cả 4 đều có bản miễn phí (giới hạn số lượt mỗi ngày)."; xoá thẻ "🛠️ Còn nghe tên Codex, Claude Code?"; đưa Codex, Claude Code thành gạch đầu dòng con dưới ChatGPT, Claude.
4. **Slide tư duy phản biện ở đầu bài** (sau slide mở đầu): demo Socrate tương tác. Có nút; mỗi lần bấm hiện thêm 1 câu hỏi/đáp bên dưới, theo đoạn đối thoại sau:
   - Socrate: Bạn cho rằng ăn cắp là sai, đúng không?
   - Người đối thoại: Đúng, lấy đồ của người khác mà không được phép là sai.
   - Socrate: Nếu bạn thấy một người bạn đang có vũ khí và định tự sát, bạn giấu vũ khí của anh ta đi mà không hỏi ý. Đó có phải là lấy đồ không được phép không?
   - Người đối thoại: Có, nhưng đó là để cứu người, không phải ăn cắp xấu.
   - Socrate: Vậy hành động lấy đi thứ không thuộc về mình không phải lúc nào cũng xấu, nếu nó hướng tới điều tốt?
   - Người đối thoại: Có lẽ vậy.
   - Socrate: Thế còn kẻ ăn cắp đồ của người khác để làm giàu cho riêng mình thì sao? Anh ta có làm điều tốt cho chính mình không, hay đang làm hại linh hồn và sự công chính của bản thân?
   Thêm 1 dòng nối: hỏi AI cũng vậy, không tin câu trả lời đầu, hỏi tiếp "vì sao? có ngoại lệ không?".
5. **5 nguyên tắc (✋ 5 ngón tay)**: mỗi nguyên tắc 1 slide (5 slide). Mỗi slide có key tiếng Anh làm tiêu đề lớn + giải thích tiếng Việt:
   1. "Claude bring intelligence. You bring context and expertise." — AI có reasoning, viết, research; bối cảnh công việc (team ở đâu, khách đặc biệt thế nào, quyết định tháng trước vì sao) chỉ bạn biết. Prompt rỗng → output rỗng.
   2. "First response is a starting point, not a final answer." — người mới bỏ đi viết lại; người thạo iterate: "bớt formal hơn", "rút thành 3 bullet", "đổi góc nhìn sang khách hàng". Iteration là feature, không phải bug.
   3. "Projects store knowledge. Skills perform tasks." — Project = kho kiến thức (brand guide, dự án cũ, tài liệu); Skill = quy trình (template blog, checklist, flow phân tích). Dùng cùng nhau.
   4. "Delegate what's repeatable. Keep what needs judgment." — giao việc có pattern (format, tổng hợp, phân loại, bản nháp đầu); giữ quyết định cần trách nhiệm (chiến lược, tuyển/sa thải, đạo đức). Bạn sai ai chịu trách nhiệm → người đó review trước khi ship.
   5. "Test before you trust. Trust but keep verifying." — AI có thể tự tin sai (hallucination). Lấy 1 task bạn đã làm, xem AI có tái hiện đúng không (delegation-diligence loop). Sau đó vẫn kiểm tra mỗi output mới.
   Giữ hình 5 ngón tay làm thanh tiến độ/biểu tượng. Dùng cùng kiểu thiết kế các slide hiện có.
6. **Tư duy phản biện + kỹ năng mềm xuyên bài**: thêm 1 dòng/ô "Hỏi lại như Socrate" hoặc "Kỹ năng mềm" ở các phần chính (VD sau nguyên tắc 5, bài tập cuối: câu hỏi phản biện để kiểm tra output AI; làm việc nhóm, giao tiếp, đặt câu hỏi). Gọn, không làm slide nặng chữ. Nếu chưa rõ chỗ đặt → chọn đơn giản nhất và ghi vào Kết quả.
7. **Slide 14** (ví dụ prompt): viết theo dòng thời gian từ trên xuống: Lần 1 hướng dẫn học viên nhập prompt 1 → xem kết quả. Lần 2 nhập prompt đầy đủ hơn → xem kết quả. Dưới cùng: câu kết luận (prompt đủ context → kết quả tốt hơn).
8. **Xoá dòng** "Nguồn: khung AI Fluency (Anthropic)." ở mọi nơi xuất hiện (slide, handout, README, outline).
Ràng buộc: sửa ít nhất, không đổi phần không nêu. Font-size có thể giảm ở slide quá đầy. Sau khi đổi số slide, sửa tham chiếu số slide (mục lục, outline, nhãn tiến độ nếu có).
## Plan
- [x] Đọc `index.html`, `ai.css`, `ai.js`, `outline/`, xác định đúng slide 4, 9, 14 hiện tại — slide 4/9/14 = đúng như yêu cầu (14 = thực hành "Viết lại câu trả lời đầu"); sau khi thêm 1 + 3 slide tổng = 34
- [x] Xoá phiếu thực hành (handouts + liên kết + README/outline) — xoá `handouts/`, nút 📄, link ở slide cuối, chữ "phiếu"; các slide `prac` đều là thực hành thật nên giữ
- [x] Slide 4: đổi chuỗi, thêm định nghĩa AI, giảm font-size
- [x] Slide 9: xoá dòng gợi ý, xoá thẻ Codex/Claude Code, thêm gạch con
- [x] Thêm slide tư duy phản biện (Socrate, bấm để hiện tiếp) ở đầu bài
- [x] Tách 5 nguyên tắc thành 5 slide, có key tiếng Anh
- [x] Thêm ô tư duy phản biện / kỹ năng mềm ở các phần chính
- [x] Slide 14: viết lại theo lần 1 / lần 2 / kết luận
- [x] Xoá dòng "Nguồn: khung AI Fluency (Anthropic)."
- [x] Sửa số slide, mục lục, tham chiếu; mở trang kiểm tra không lỗi JS, bấm thử demo Socrate
- [x] Ghi `## Kết quả`, tick checkbox, cập nhật index
## Kết quả

Đã làm xong cả 8 yêu cầu (không còn việc dở). Tổng 34 slide (trước 30).

- **Phiếu**: xoá `handouts/`, nút 📄, link ở slide cuối, mọi chữ "phiếu" (slide, README, outline, comment). Các slide `prac` đều là bài thực hành thật nên giữ.
- **Slide 5 (cũ 4)**: "A ➜ 01000001"; thêm câu định nghĩa AI; giảm font.
- **Slide 10 (cũ 9)**: bỏ dòng gợi ý và thẻ Codex/Claude Code; Codex, Claude Code thành gạch con hiện sẵn dưới ChatGPT, Claude.
- **Slide 2 (mới)**: demo Socrate, nút "Bấm để nghe tiếp" hiện thêm 1 câu (7 câu) rồi hiện dòng nối về AI. Khi in PDF tự hiện hết.
- **Slide 13–17**: 5 nguyên tắc, mỗi cái 1 slide, tiêu đề lớn là câu tiếng Anh, có thanh tiến độ 5 vòng tròn. Slide 12 (5 ngón) giữ nguyên.
- **Slide 18 (cũ 14)**: bước viết theo thứ tự Lần 1 → Lần 2 → so sánh, thêm câu kết luận ở cuối.
- **Tư duy phản biện/kỹ năng mềm** (chọn cách đơn giản nhất, 1 dòng mỗi chỗ): nguyên tắc 5 (ô "Hỏi lại như Socrate"), slide "4 năng lực" (thay dòng Nguồn), tổng kết, bước 4 bài tập cuối, chia sẻ nhóm ở slide cuối.
- **"Nguồn: khung AI Fluency"**: xoá ở slide và README/outline. Dòng "Nguồn: khoá Claude 101" ở slide 12 giữ (owner không yêu cầu bỏ).
- Sửa số slide ở slide (18/21/23, 25), README (lịch), `outline/` 00–07.

Quyết định: slide 18 vẫn dùng khung so sánh 2 cột có sẵn (không đổi `ai.js`); thứ tự thời gian nằm ở các bước + câu kết luận bên trên/dưới. Số phút trong README/outline giữ nguyên.

Kiểm tra: Chrome headless, 0 lỗi JS; bấm nút Socrate 8 lần → 7 câu + dòng nối, nút ẩn; xem ảnh slide 5 và 13 thấy ổn. Slide 2 khi hiện hết cao ~820px nên cuộn được (có tự cuộn).

