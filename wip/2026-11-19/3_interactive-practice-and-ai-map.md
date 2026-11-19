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
- [x] Đọc code, chỉnh lại các bước (2026-11-19 16:30). Kết quả:
  - Hiện 31 slide (file 2 thêm slide 30) → gộp slide 29 "Đến lượt bạn" vào slide 30 "khung thử" (khung thử đã có sẵn 3 mẫu GV Anh / GV Trung / Nhân sự) để còn 30; slide 1–28 giữ số cũ; sửa README + `outline/07`.
  - `ai.js` làm luôn nút "Sao chép" (bỏ đoạn chép lặp ở 2 trang). Ô ① vẫn là khung bấm-vào-sửa (tự cao theo chữ), đổi sang nền sáng, viền nét đứt.
  - Khung ② hiện sẵn từ đầu ("Kết quả sẽ hiện ở đây"); ô "Muốn chỉnh?" chỉ hiện sau câu trả lời đầu (đỡ rối).
  - Phiếu 3 "Những câu chỉnh hay dùng": thành câu mẫu để chép vào ô "Muốn chỉnh?" (không mỗi câu 1 cặp ①②).
  - Tên menu kiểm tra trên mạng (2026-11): Gemini: menu trái **Customize → Connectors → Add** (giao diện cũ: Cài đặt → Connected Apps), gõ **@** trong ô chat để chọn Gmail/Drive; ChatGPT bản free KHÔNG kết nối Gmail/Drive → tải file (nút **+**) hoặc dán chữ. Codex = công cụ lập trình của OpenAI (dòng lệnh, app máy tính, chạy trên mây); Claude Code = công cụ lập trình của Anthropic (dòng lệnh, app, web).
- [x] Làm bố cục ① nhập / ② kết quả dùng chung (`ai.js` + CSS), áp cho mọi slide thực hành và phiếu — xong: `ai.js` `setup()` biến mỗi ô prompt thành khung ① "Bạn nhập" (viền vàng nét đứt, ô trắng sửa được, nút vàng "Gửi cho Gemini ➜", nút nhỏ "📋 Chép" ở góc trên) + "⬇ Gemini trả lời" + khung ② (viền tím, "Kết quả sẽ hiện ở đây", "Gemini đang nghĩ…", ô "✏️ Muốn chỉnh? Gõ thêm ở đây" hiện sau câu trả lời đầu). Khung thử (lab) cũng ghi ① Phần A / Phần B / ②. Nút "Sao chép" của 2 trang chuyển vào `ai.js` (bỏ mã chép lặp).
- [x] Viết bước hướng dẫn chi tiết cho từng bài thực hành (slide + phiếu); bài Drive/Gmail: từng bước kết nối trên app thật (kèm cách làm khác nếu bản free không có) — xong: slide 8, 10, 14, 19, 24, 29 + phiếu 1, 2, 3, 4, 5 (Cách A dán chữ / B tải file / C Gmail-Drive 6 bước), 7 (ví dụ, tự viết, khung thử, Gem). Slide 21 thêm 4 bước kết nối Gemini (Customize → Connectors → Add; cũ: Connected Apps; gõ @) + "ChatGPT free không kết nối Gmail/Drive → 📎 / dán chữ".
- [x] Rà mọi bài thực hành: prompt mẫu điền sẵn trong ô nhập, kết quả hiện đúng chỗ; bài nào không hợp để chạy (vd Drive/Gmail cần quyền) thì ghi rõ làm ở app nào — xong: 11 ô ① trên slide, khung ② ngay dưới mỗi ô (Chrome, máy trung gian giả lập: slide 8, 14, 29 ra kết quả đúng khung ②). Ô không chạy (@Gmail, @Drive, Excel, file yêu cầu cố định, mẫu 4 khối) giữ khung đen + ghi "Làm trong app …". Phiếu 3: 5 câu chỉnh hay dùng → khung đen để chép vào ô "Muốn chỉnh?".
- [x] Sửa slide 9 (bản đồ AI) + thêm phần chat vs Codex, Claude chat vs Claude Code; giữ ≤ 30 slide — xong: thẻ Claude thêm "mạnh cả lập trình"; thêm 2 thẻ nhỏ "ChatGPT khác Codex", "Claude khác Claude Code" + "Buổi này chỉ dùng phần trò chuyện". Gộp slide 29 vào slide khung thử → 30 slide. Sửa README, `outline/00`, `02`, `05`, `07`, `proxy/HUONG-DAN.md` (tên nút mới, 30 slide).
- [x] Đóng vai học viên: đi hết slide + phiếu, ghi bảng lỗi, sửa — xong (2026-11-19 17:20): Chrome 1366×768, chụp 30 slide + 7 phiếu, bấm thật; bảng lỗi ở `## Kết quả`, đã sửa hết.
- [x] Kiểm tra: không tràn chữ, không lỗi JS, `grep` không lộ key (`AQ.`), commit (không push) — xong (2026-11-19 17:30): 30 slide không slide nào bị cắt (slide dài cuộn được, có nhãn nhắc); chữ tràn ngang chỉ có thẻ "Gemini trả lời dài" ở slide 26 (cố ý làm mờ, có từ trước). Lỗi JS: 0. So khớp đúng chuỗi key + mẫu `AQ\.Ab8R|AIza…` trên file và `git log -p --all` → 0 chỗ. `node proxy/test-proxy.js` → qua hết. Đã commit, không push.
## Kết quả
## Kết quả
### Bảng lỗi khi đóng vai học viên (người 30+, không rành kỹ thuật)
| # | Chỗ | Học viên gặp gì | Đã sửa |
|---|---|---|---|
| 1 | Khung ② (mọi chỗ) | Câu trả lời có dấu `*` thừa (Gemini viết chữ nghiêng kiểu `*...*`) | `md()` trong `ai.js` đổi `*...*` thành chữ nghiêng |
| 2 | Slide 8, 14, 24… | Bấm Gửi xong, kết quả nằm dưới mép màn hình, không thấy | Bấm Gửi → tự cuộn tới khung ② |
| 3 | Slide 14, 16, 17, 19, 24, 29 | Không biết slide còn phần bên dưới | Nhãn "⬇ Cuộn xuống xem tiếp" hiện khi còn nội dung |
| 4 | Khung ② trên slide | Chữ kết quả 16px, nhìn máy chiếu hơi nhỏ | Trên slide tăng lên 18px |
| 5 | Câu chỉnh (slide 14, 27, phiếu 3, 7) | Nhãn "(câu chỉnh, gửi tiếp cuộc trò chuyện trên)" dài, khó hiểu | Đổi thành "① Bạn nhập · câu chỉnh (Gemini sửa tiếp bản trên)" |
| 6 | Bảng điều khiển trình duyệt | Lỗi 404 thiếu biểu tượng trang (favicon) | Thêm `<link rel="icon" href="data:,">` ở 2 trang |
| 7 | Slide 29 (khung thử) | Khung thử bị cắt mép trên, không cuộn được | `lab()` gắn class cuộn cho slide; ô hướng dẫn cao 250px trên slide |
| 8 | Slide 9 | Dấu "≠" cạnh biểu tượng hiện thành "=/" | Ghi chữ "khác" |

Đã thử bằng Chrome (Playwright, máy trung gian giả lập + 2 lần gọi thật):
- Slide 14: bấm câu chỉnh trước → nhắc "bấm khung ① phía trên trước"; lần 1 → lần 2 gửi kèm 1 lượt trước → "Muốn chỉnh?" gửi kèm 2 lượt; ô "Muốn chỉnh?" chỉ hiện sau lần trả lời đầu.
- Slide 19: còn `[ ]` → nhắc sửa, không gửi. Phiếu 7: khung trống còn `[ ]` → nhắc; mẫu Bạn Đồng Hành → có kết quả.
- Nút 📋 Chép → "Đã chép ✓". Chế độ in phiếu: hiện đủ 7 phiếu, ẩn nút Gửi và khung ②.
- Gọi thật: slide 8 → Gemini trả lời 5 câu "Mùa hè, em thích đi…"; slide 29 → trả lời đúng khung "🔍 Mình hiểu ý bạn là…". Không lỗi JS.

### Đã đổi (2026-11-19 17:30)
- `ai.js` + `ai.css`: bố cục chung ① "Bạn nhập" (viền vàng nét đứt, sửa được, nút "Gửi cho Gemini ➜", nút nhỏ "📋 Chép") → "⬇ Gemini trả lời" → ② "Gemini trả lời" (viền tím, "Kết quả sẽ hiện ở đây", "Gemini đang nghĩ…", ô "✏️ Muốn chỉnh?"). Khung thử: ① Phần A / Phần B → ②. Nút Sao chép gom vào `ai.js`.
- `index.html`: bước đánh số chi tiết ở slide 8, 10, 14, 19, 24, 29; slide 21 thêm 4 bước kết nối Gmail/Drive trong Gemini; slide 9 thêm "Claude mạnh cả lập trình", "ChatGPT khác Codex", "Claude khác Claude Code"; gộp slide "Đến lượt bạn" vào slide khung thử → 30 slide; nhãn "Cuộn xuống xem tiếp".
- `handouts/index.html`: bước chi tiết phiếu 1, 2, 3, 4, 5 (Cách A dán chữ / B tải file / C Gmail-Drive), 5 (file yêu cầu cố định), 7; đầu trang giải thích khung ①, ②, khung đen.
- README, `outline/00`, `02`, `05`, `07`, `proxy/HUONG-DAN.md`: 30 slide, tên nút mới, Codex / Claude Code, đường kết nối Gemini mới.

### Quyết định worker tự chọn
- Giữ ≤ 30 slide bằng cách gộp slide 29 "Đến lượt bạn" vào slide khung thử (khung thử đã có sẵn 3 mẫu theo nghề); slide 1–28 giữ số cũ.
- Khung ② hiện sẵn từ đầu; ô "Muốn chỉnh?" chỉ hiện sau câu trả lời đầu (đỡ rối).
- Phiếu 3 "Những câu chỉnh hay dùng": thành khung đen để chép vào ô "Muốn chỉnh?", không mỗi câu 1 cặp ①②.
- Ô ① vẫn là khung bấm-vào-sửa (tự cao theo chữ), không dùng ô nhập cố định chiều cao.
- Bài chỉ làm được trong app (@Gmail, @Drive, Excel, file yêu cầu cố định, mẫu 4 khối) giữ khung đen + ghi rõ "Làm trong app …".
- Tên menu lấy từ hướng dẫn trên mạng 2026-11 (không có trang trợ giúp chính thức của Google xác nhận "Customize → Connectors"): ghi cả đường mới và đường cũ (Connected Apps), kèm cách luôn được (@, tải file, dán chữ). Nguồn: promptoptimizer.tools/blog/how-to-connect-apps-to-gemini, zapier.com/blog/gemini-connected-apps, dragapp.com/blog/connect-gmail-to-chatgpt (ChatGPT free không có kết nối Gmail/Drive).

### Còn lại
- Owner bấm thử trên app thật 1 lần: Gemini → Customize → Connectors (tên tiếng Việt của menu có thể khác: "Tùy chỉnh"), nút **+** → "Tải tệp lên" / ChatGPT "Thêm ảnh và tệp", Gem → "Gem mới". Sai tên thì sửa ở slide 21, 24, 29 và phiếu 5, 7.
- Runner push lên GitHub → mở https://danhbuidcn.github.io/ai-workshop/#8 kiểm tra.
