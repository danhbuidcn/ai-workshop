# 4. 5 nguyên tắc cốt lõi (10 phút)

Slide 13–19: slide 13 bàn tay 5 ngón (chỉ tên nguyên tắc, không ví dụ) · slide 14–18 mỗi nguyên tắc 1 slide (tiêu đề = câu tiếng Anh gốc, nội dung giữ nguyên văn bản owner duyệt, dòng cuối là câu chốt) · slide 19 thực hành.

Nguồn: chương 1 Claude 101 (Anthropic). Dùng được cho mọi AI, không riêng Claude.

## Nguyên tắc 1: "Claude bring intelligence. You bring context and expertise."
- AI có khả năng reasoning, viết, research.
- Nhưng bối cảnh của công việc — team đang ở đâu, khách hàng này đặc biệt thế nào, quyết định tháng trước vì lý do gì — chỉ có bạn biết.
- Claude chỉ giỏi khi bạn đưa đủ context.
- Prompt rỗng → output rỗng.

## Nguyên tắc 2: "First response is a starting point, not a final answer."
- Người mới hay nhìn response đầu tiên, không ưng → bỏ đi viết lại từ đầu.
- Người thạo sẽ iterate: "bớt formal hơn", "rút thành 3 bullet", "đổi góc nhìn sang khách hàng".
- Iteration là feature, không phải bug.

## Nguyên tắc 3: "Projects store knowledge. Skills perform tasks."
- Hai feature hay bị nhầm. Project = kho kiến thức (brand guide, past projects, references).
- Skill = cỗ máy quy trình (template viết blog, checklist compliance, flow phân tích data).
- Dùng cùng nhau, không thay thế.

## Nguyên tắc 4: "Delegate what's repeatable. Keep what needs judgment."
- AI rất giỏi những việc có pattern: format, tổng hợp, phân loại, first draft.
- AI không nên — và bạn không nên — giao cho AI những quyết định cần trách nhiệm: chiến lược, hire/fire, giá trị đạo đức.
- Rule of thumb: nếu bạn sai ai sẽ chịu trách nhiệm, người đó phải review trước khi ship.

## Nguyên tắc 5: "Test before you trust. Trust but keep verifying."
- AI có thể tự tin sai (hallucination).
- Trước khi giao việc quan trọng cho Claude, chạy "delegation-diligence loop": lấy 1 task bạn đã làm rồi, xem Claude có reproduce kết quả đúng không.
- Sau khi validate, vẫn check sanity ở mỗi output mới.

## Thực hành: "Viết lại câu trả lời đầu" (3 phút)
1. Slide 19 có khung so sánh 2 cột: trái `Viết thông báo cho phụ huynh về buổi họp lớp.`, phải cùng việc viết theo công thức 5 phần (mỗi phần 1 màu).
2. Bấm **So sánh**: Gemini chạy cả 2 câu cùng lúc, 2 kết quả nằm cạnh nhau.
3. Hỏi lớp: "2 kết quả khác nhau ở đâu?" → bấm 3 ô "nên nhìn" (giờ họp, giọng, độ dài).
4. Nhắc: AI có thể khác mỗi lần, quan trọng là xu hướng. Cho học viên thử thêm cách gõ câu chỉnh trong cùng cuộc trò chuyện.
