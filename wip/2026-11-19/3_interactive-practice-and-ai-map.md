# Bài thực hành: ô nhập + kết quả Gemini rõ ràng; sửa bản đồ AI; đóng vai học viên
Nhánh: .
Phụ thuộc: 2_handouts-live-gemini.md
## Input
Owner (2026-11-19), xem slide 8 và 9 trên trang thật:
1. Slide thực hành: học viên NHẬP prompt ngay trên trang (ô sửa được, có sẵn prompt mẫu).
2. Bấm nút → gọi Gemini ngay và hiện kết quả ngay dưới. Làm tương tự mọi phần thực hành khác (slide và phiếu).
3. Phải rõ cho học viên: khung ① là chỗ BẠN nhập, khung ② là KẾT QUẢ Gemini trả về.
4. Slide 9 (bản đồ AI): Claude mạnh cả lập trình. Thêm giới thiệu qua: ChatGPT (trò chuyện) khác Codex; Claude (trò chuyện) khác Claude Code.
5. Worker phải đóng vai học viên (người 30+, không rành kỹ thuật) để kiểm tra từng slide.
## Context
- Hiện slide 8: prompt nằm trong khung tối chỉ để xem, nút "Sao chép" + "▶ Chạy thử" cùng chỗ, kết quả hiện ở khung riêng nhưng không có nhãn → học viên không biết đâu là nhập, đâu là kết quả. File: `index.html`, `handouts/index.html`, `ai.js`.
- Đề xuất bố cục chung cho MỌI bài thực hành: 
  - Khung ① nhãn "① Bạn nhập" (nền sáng, viền nét đứt, ô văn bản sửa được, điền sẵn prompt mẫu, nút "Gửi cho Gemini").
  - Mũi tên ↓ + chữ "Gemini trả lời".
  - Khung ② nhãn "② Gemini trả lời" (nền khác màu, trống lúc đầu ghi "Kết quả sẽ hiện ở đây", có trạng thái "Đang nghĩ…").
  - "Hỏi tiếp" nằm trong khung ②, ghi rõ "Muốn chỉnh? Gõ thêm ở đây".
  - "Sao chép" chỉ còn là nút nhỏ phụ (để dán sang ChatGPT), không nằm cạnh nút Gửi.
- Dùng 1 đoạn mã chung (trong `ai.js`) cho mọi chỗ, không chép lặp. Không đổi máy trung gian, không đụng key.
- Bản đồ AI: kiểm tra thông tin hiện hành trước khi ghi (Codex của OpenAI = công cụ viết/sửa phần mềm; Claude Code = công cụ lập trình của Anthropic chạy trên máy). Ghi 1–2 dòng mỗi cái, không hướng dẫn cài. Vẫn ≤ 30 slide: gom bớt chỗ khác nếu cần.
- Đóng vai học viên: mở trang bằng Chrome (kích thước laptop), đi lần lượt từng slide và từng phiếu như người chưa biết gì. Mỗi chỗ tự hỏi: "mình có biết bấm đâu không? từ nào lạ? chữ đủ to không?". Ghi bảng lỗi + cách sửa vào `## Kết quả`, sửa luôn. Thử thật các nút Gửi (không in key).
## Plan
- Owner chốt: bài cần Drive/Gmail làm trên app Gemini/ChatGPT thật, và MỌI bài thực hành phải có các bước hướng dẫn chi tiết (đánh số 1, 2, 3…, mỗi bước 1 việc: bấm vào đâu, gõ gì, thấy gì thì đúng; chữ trên nút/menu ghi đúng như app hiện hành). Kiểm tra tên menu/nút Gemini và ChatGPT bản free trước khi ghi.
- [ ] Làm bố cục ① nhập / ② kết quả dùng chung (`ai.js` + CSS), áp cho mọi slide thực hành và phiếu
- [ ] Viết bước hướng dẫn chi tiết cho từng bài thực hành (slide + phiếu); bài Drive/Gmail: từng bước kết nối trên app thật (kèm cách làm khác nếu bản free không có)
- [ ] Rà mọi bài thực hành: prompt mẫu điền sẵn trong ô nhập, kết quả hiện đúng chỗ; bài nào không hợp để chạy (vd Drive/Gmail cần quyền) thì ghi rõ làm ở app nào
- [ ] Sửa slide 9 (bản đồ AI) + thêm phần chat vs Codex, Claude chat vs Claude Code; giữ ≤ 30 slide
- [ ] Đóng vai học viên: đi hết slide + phiếu, ghi bảng lỗi, sửa
- [ ] Kiểm tra: không tràn chữ, không lỗi JS, `grep` không lộ key (`AQ.`), commit (không push)
## Kết quả
