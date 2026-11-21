# Ví dụ Gemini mẫu của owner (tóm tắt)

Nguồn: https://share.gemini.google/0A8iPMWB2MU3 (đọc ngày 2026-11-19). Cuộc trò chuyện có 2 lượt.

## Lượt 1: hỏi chung chung → trả lời dài, lan man

Prompt:

> Tôi là một lập trình viên. Tôi đã viết 1 app để quản lý thời gian sử dụng tablet cho trẻ em, sử dụng cá nhân trong gia đình. Ngoài ra, tôi muốn hướng dẫn trẻ sử dụng AI gemini. Nhưng lo sợ trẻ sẽ chụp và nhờ AI giải, tôi muốn trẻ dùng AI hướng dẫn cách giải và hướng dẫn cách tư duy, tiếp cận bài toán. Liệu tôi có thể làm gì ?
> 1 bé 9 tuổi, 1 bé 6 tuổi dùng chung tablet.

Gemini trả lời rất dài (3 phần lớn): chặn chụp màn hình, ghim ứng dụng, tạo tài khoản riêng; viết "chỉ dẫn hệ thống" cho AI; giao ước gia đình, dạy con cách hỏi. Cuối cùng gợi ý viết code. Đúng ý nhưng quá dài, không dùng ngay được.

## Lượt 2: nói rõ mình muốn gì → kết quả dùng được ngay

Prompt:

> Bạn trả lời quá dài. Tôi muốn format ouput kết quả trả về cho trẻ. Tất cả các cách trên đều không tốt. Liệu có cách nào ổn hơn không ?
> Tôi cho trẻ dùng 1 account gemini riêng biệt. Liệu có cách nào khuyến khích khả năng tư duy của trẻ, VD, trẻ cung cấp một bài toán mà chưa rõ ràng thì bạn cùng trẻ break nhỏ và brainstoming ý tưởng. Tôi nhớ là CHATGPT có cho phép format ouput AI trả về.

Gemini trả lời ngắn, cụ thể:

1. Dùng công cụ **Guided Learning** (học có hướng dẫn: AI hỏi gợi mở thay vì đưa đáp án) khi tạo **Gem** (trợ lý riêng, tạo được trên bản free).
2. Dán đoạn hướng dẫn cố định vào **Instructions for Gemini** (áp dụng cho mọi cuộc chat; giao diện tiếng Việt: ⚙️ cạnh tên → **Trí thông minh cá nhân** → **Chỉ dẫn cho Gemini**). Đoạn mẫu:

```text
# VAI TRÒ & ĐỐI TƯỢNG
Bạn là "Bạn Đồng Hành Tư Duy" dành cho 2 bé: 6 tuổi và 9 tuổi. Luôn hỏi tên hoặc độ tuổi ở câu đầu tiên nếu chưa biết để chỉnh độ khó.

# QUY TẮC CẤM (TUYỆT ĐỐI)
- KHÔNG BAO GIỜ giải hộ bài tập, không đưa ra đáp án cuối cùng, không làm hộ từ A-Z.
- KHÔNG viết đoạn văn dài quá 3 câu. Dùng từ ngữ đơn giản, vui vẻ.

# LUỒNG XỬ LÝ KHI BÉ ĐƯA BÀI TOÁN / Ý TƯỞNG CHƯA RÕ RÀNG
1. Chia nhỏ (Break down): Tách vấn đề thành các mảnh nhỏ nhất.
2. Não công (Brainstorming): Đưa ra 2-3 hướng gợi ý mở để bé tự chọn, không áp đặt 1 cách duy nhất.

# FORMAT OUTPUT BẮT BUỘC (MỌI CÂU TRẢ LỜI PHẢI THEO ĐÚNG KHUNG NÀY)
Mỗi lần phản hồi, chỉ được xuất ra đúng 3 phần ngắn gọn sau:

🔍 **Mình hiểu ý bạn là:** [Tóm tắt lại đề bài/ý tưởng của bé bằng 1 câu cực dễ hiểu. Nếu đề chưa rõ, chỉ ra điểm còn thiếu].

💡 **Cùng nghĩ ý tưởng nhé (Chọn 1 hướng):**
* Cách 1: [Gợi ý hướng tiếp cận A - chỉ nêu ý tưởng, không tính toán]
* Cách 2: [Gợi ý hướng tiếp cận B - hoặc một ví dụ tương tự ngoài đời thực]

❓ **Câu hỏi cho bạn:** [Đặt DUY NHẤT 1 câu hỏi nhỏ để bé tự làm bước đầu tiên]
```

3. Mẹo: tạo 2 Gem riêng cho 2 bé (bé lớn: phân tích bài toán; bé nhỏ: nhiều emoji, câu cực ngắn). Thỉnh thoảng xem lại lịch sử chat để chỉnh "quy tắc cấm".

## Bài học dùng cho workshop

- Lượt 1 thiếu "muốn kết quả trông thế nào" → AI tự đoán → dài.
- Lượt 2 (prompt C-T-R): Context (ai dùng, để làm gì) + Task (bài toán chưa rõ) + Rules (4 khối, tối đa 3 câu, khung 3 phần) + chê thẳng "quá dài" → 1 đoạn hướng dẫn 4 khối dùng được ngay.
- Đúng nguyên tắc 2: câu trả lời đầu chỉ là điểm khởi đầu.
- Đoạn hướng dẫn có 4 khối dễ bắt chước: **Vai trò – Điều cấm – Cách làm – Khung trả lời**.
