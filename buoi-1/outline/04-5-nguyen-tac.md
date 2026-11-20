# 4. 5 nguyên tắc cốt lõi (10 phút)

Slide 12–18: slide 12 bàn tay 5 ngón (mỗi ngón = câu tiếng Anh gốc; phụ đề "Có 5 nguyên tắc sẽ lặp lại nhiều lần.") · slide 13–17 mỗi nguyên tắc 1 slide (tiêu đề = câu tiếng Anh gốc, tiêu đề "N. \"câu gốc\"", mọi dòng là gạch đầu dòng, nguyên văn owner gửi, không ô câu chốt) · slide 18 ví dụ không nên / nên.

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

## Slide 18: Ví dụ 2 cách hỏi (chỉ chữ, không thực hành)
- ❌ Không nên: "Viết thông báo cho phụ huynh về buổi họp lớp."
- ✅ Nên: 3 dòng theo C-T-R, mỗi dòng 1 màu (Context · Task · Rules).
