# 1. AI là gì (15 phút)

## Mục tiêu
Hiểu 1 câu: **AI tạo chữ bằng cách đoán chữ tiếp theo.** Vì đoán, nên có lúc sai.

## Ý 1: Máy tính chỉ hiểu số
- Lời nói: "Máy tính giống cái công tắc đèn: chỉ có **bật (1)** và **tắt (0)**."
- Hình: 8 bóng đèn xếp hàng, bật/tắt theo mẫu `0 1 0 0 0 0 0 1`.
- Ví dụ: chữ **A** = số **65** = `01000001`. Chữ **a** = 97 = `01100001`. Bảng này tên là ASCII (bảng tra chữ ↔ số), chỉ cần nhớ "mỗi chữ có 1 số".
- Câu chốt: "Mọi thứ trong máy — chữ, ảnh, nhạc — đều là một dãy số."

## Ý 2: AI đọc rất, rất nhiều chữ
- Lời nói: "AI đã đọc hàng tỉ trang sách, bài báo, trang web. Nó không *hiểu* như người, nhưng nó nhớ **chữ nào hay đi sau chữ nào**."
- Hình: chồng sách cao → bộ não 🤖.

## Ý 3: AI đoán chữ tiếp theo
- Ví dụ: "Con mèo đang ăn ___" → cá (60%), cơm (25%), chuột (10%), … Hình: 3 cột cao thấp.
- Ví dụ giáo viên: "Good morning, ___" → teacher / everyone / class.
- Ví dụ tiếng Trung: "你好，我叫 ___" → AI đoán 1 cái tên.
- Câu chốt: "AI viết cả bài văn bằng cách đoán từng chữ một, rất nhanh." Nó còn gọi là **mô hình ngôn ngữ lớn** (tên tiếng Anh: LLM) — chỉ cần nhớ "máy đoán chữ".

## Ý 4: Vì đoán nên có thể sai
- "AI đoán cái **nghe hợp lý nhất**, không phải cái **đúng nhất**." Nó có thể nói sai rất tự tin.
- Hình: con vẹt 🦜 nói rất trôi chảy nhưng không kiểm tra lại.

## Ý 5: 2 loại AI
| AI dự đoán | AI tạo nội dung |
|---|---|
| Đoán điều sắp xảy ra hoặc phân loại | Viết, vẽ, nói ra thứ mới |
| Gmail lọc thư rác, YouTube gợi ý video, dự báo thời tiết | ChatGPT viết thư, Gemini soạn giáo án, vẽ tranh |
| Đã có từ lâu, chạy ngầm | Mới nổi từ 2022, mình nói chuyện trực tiếp |

## Thực hành: "Đoán chữ tiếp theo" (3 phút)
1. Cả nhóm đoán: "Mùa hè, em thích đi ___". Mỗi người viết 1 chữ.
2. Gõ vào AI: `Hoàn thành câu sau bằng 5 cách khác nhau: "Mùa hè, em thích đi ..."`
3. So sánh: người và AI đoán giống nhau không? → AI đoán theo "cái hay gặp nhất".
