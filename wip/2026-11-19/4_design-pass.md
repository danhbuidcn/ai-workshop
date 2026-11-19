# Thiết kế lại slide: đẹp và chỉ rõ chỗ cần tập trung
Nhánh: .
Phụ thuộc: 3_interactive-practice-and-ai-map.md
## Input
Owner (2026-11-19), xem slide 12 (nguyên tắc 1–2): đóng vai designer, thiết kế không chỉ đẹp mà còn để học viên biết nên tập trung vào đâu.
## Context
- Vấn đề nhìn thấy ở slide 12: 2 cột cùng cỡ chữ, cùng độ nổi → mắt không biết nhìn đâu trước; nhiều vùng trống phía trên/dưới, chữ nhỏ so với khung; nhãn ①② nhỏ; ví dụ "Hỏi trống / Có bối cảnh" và câu chốt "Hỏi trống → trả lời trống" gần như cùng trọng lượng; 4 nút "Nói thẳng" kéo mắt xuống cuối.
- Nguyên tắc thiết kế chung cho cả bộ (áp mọi slide):
  1. Mỗi slide có đúng 1 ý chính → hiện to nhất, đặt ở vị trí mắt nhìn đầu tiên (trên-trái hoặc giữa). Có thể thấy rõ khi nheo mắt/giảm sáng.
  2. Thứ bậc 3 mức: ý chính (rất to, đậm) → ví dụ/bằng chứng (vừa) → chú thích (nhỏ, nhạt). Bỏ mức thứ 4.
  3. Màu có nghĩa cố định: xanh lá = nên làm/đúng, đỏ = tránh, vàng/cam = chỗ cần nhấn/hành động, xanh dương = bạn nhập, xám = phụ. Mỗi slide tối đa 2 màu nhấn.
  4. Chữ nhấn (tô đậm/tô màu) chỉ dùng cho từ khoá cần nhớ, không quá 2–3 chỗ/slide.
  5. Câu cần nhớ (chốt) nằm riêng 1 dải/khung ở cuối, cỡ lớn, tách rõ khỏi phần giải thích.
  6. Slide có 2 cột: cột chính (rộng, nổi) và cột phụ, hoặc xếp trên-dưới theo thứ tự đọc có số; không 2 khối bằng nhau tranh nhau.
  7. Tận dụng khoảng trống: tăng cỡ chữ nội dung (ngồi cuối phòng vẫn đọc được), căn khối giữa theo chiều dọc, không để nửa trống nửa chật.
  8. Hình khối/biểu tượng phục vụ ý chính (so sánh, quy trình, trước-sau), không trang trí thừa. Quy trình dùng mũi tên rõ, bước hiện tại/đích nổi bật.
  9. Slide thực hành: nhãn ① Bạn nhập / ② Kết quả to, nút hành động (Gửi) là thứ nổi nhất.
  10. Đủ tương phản chữ/nền (đạt WCAG AA), cỡ chữ tối thiểu 18px trên khung 1280×720.
- Owner (slide 13, nguyên tắc 3–5): quá nhiều chữ cùng lúc. Dùng **bấm để mở**: hiện sẵn chỉ đầu mục (tiêu đề + 1 hình/biểu tượng + 1 câu rất ngắn), bấm vào mới hiện chi tiết (ví dụ, giải thích). Áp dụng cho mọi slide có nhiều khối chữ (không chỉ slide 13) để tăng tương tác. Quy định:
  - Thẻ chưa mở trông rõ là bấm được (mũi tên/dấu "+", con trỏ tay, viền đổi màu khi rê chuột).
  - Bấm lần nữa để đóng; mở 1 thẻ thì thẻ khác thu lại (hoặc cho mở nhiều, chọn cách hợp từng slide).
  - Có thể bấm bằng bàn phím (Tab/Enter) và điện thoại. Phím ←/→ vẫn chuyển slide.
  - Khi in PDF: mở hết tất cả thẻ.
  - Ghi 1 dòng nhỏ "Bấm vào từng ô để xem thêm" ở slide dùng kiểu này lần đầu.
  - Câu chốt (ý cần nhớ) luôn hiện sẵn, không giấu.
- Owner (slide 14, "Viết lại câu trả lời đầu"): bài thực hành phải **so sánh rõ ràng** để học viên NHÌN là thấy khác biệt. Ví dụ: prompt 1 "Viết thông báo cho phụ huynh về buổi họp lớp." → AI trả về; prompt 2 áp dụng đủ công thức (vai trò, bối cảnh, việc cần làm, kết quả mong muốn, hỏi lại nếu chưa rõ) → AI trả về. Hai kết quả đặt cạnh nhau.
  - Kiểu "so sánh 2 cột" dùng chung (trong `ai.js` + CSS): cột trái "Lần 1: hỏi ngắn" (đỏ/xám), cột phải "Lần 2: có công thức" (xanh lá); mỗi cột có ① prompt (nhập được) và ② kết quả. 1 nút "So sánh" chạy cả 2 cùng lúc.
  - Phía trên hai cột: 1 dòng câu hỏi dẫn mắt "Nhìn xem: 2 kết quả khác nhau ở đâu?"; dưới cột phải: gợi ý 2–3 điểm nên nhìn (ví dụ: có ghi giờ họp? có đúng giọng? độ dài?) dạng ô bấm để mở.
  - Prompt công thức ở cột phải tô màu từng phần (vai trò / bối cảnh / việc / kết quả mong muốn / hỏi lại) để học viên thấy phần nào tạo nên khác biệt.
  - Áp dụng cho mọi bài có tính chất "trước/sau": slide 14, bài công thức prompt (phần 4), bài đưa tài liệu/bối cảnh, bài đặt khung trả lời cuối buổi (trước và sau khi đặt khung). Bài nào chỉ 1 lần chạy thì giữ ① ②.
  - Học viên không phải tự đọc dài: kết quả dài thì cắt gọn ở đầu và có nút "xem hết"; dòng tóm khác biệt (ví dụ "Lần 2: có giờ họp, dưới 60 chữ, giọng thân thiện") do trang tự ghi sẵn dưới 2 cột (ghi cố định, không nhờ AI chấm).
  - Cùng prompt chạy lại có thể ra kết quả khác nhau: ghi 1 câu "AI có thể khác mỗi lần, quan trọng là xu hướng" và có nút "Chạy lại".
- Owner (slide 23, phần 5 Tài liệu): 2 nội dung khác nhau ("File yêu cầu cố định" và "Project") đặt cạnh nhau nhưng nhìn như 1 khối, lộn xộn. Luật: **mỗi khái niệm = 1 thẻ riêng** để học viên nhìn là biết 2 thứ khác nhau.
  - Mỗi thẻ: nền/viền màu riêng (khác nhau rõ), 1 biểu tượng lớn, tên thẻ cỡ lớn, 1 câu "nó là gì" bằng hình ảnh đời thường, 1 dòng "dùng khi nào". Chi tiết (cách làm, bảng, prompt mẫu) giấu trong "bấm để mở" của từng thẻ.
  - Giữa 2 thẻ có chữ nối rõ quan hệ (ví dụ "hoặc" / "cách dễ" vs "cách mạnh hơn") để biết nên chọn cái nào trước.
  - Slide 23: thẻ 1 "Tờ giấy dán tủ lạnh (file yêu cầu cố định)" — cách dễ, ai cũng làm được; thẻ 2 "Tủ tài liệu (Project/Gem)" — cách mạnh hơn, tuỳ app. Bảng ChatGPT/Gemini/NotebookLM ở trong thẻ 2 khi bấm mở.
  - Áp dụng luật "mỗi khái niệm một thẻ" cho mọi slide đặt cạnh nhau 2+ ý khác nhau (vd slide 9 bản đồ AI, slide 12–13).
- Không đổi nội dung/ý nghĩa, không tăng số slide (≤ 30), không đụng `ai.js` logic/key.
## Plan
- [x] Chụp ảnh toàn bộ slide hiện tại (Chrome headless, 1280×720), xem từng slide, ghi bảng: slide → mắt nhìn đâu trước? → vấn đề → cách sửa — xong (2026-11-19 16:45): ảnh ở `/tmp/aw4/before/`, bảng ở mục "Bảng rà slide" bên dưới. Đổi thứ tự: làm hệ thống thiết kế trước (2 thành phần dùng nó).
- [ ] Thiết lập hệ thống thiết kế chung (cỡ chữ 3 mức, bảng màu có nghĩa, khoảng cách, khung chốt) trong CSS, dùng chung
- [ ] Làm thành phần "bấm để mở" dùng chung (CSS trong `ai.css` + JS trong `ai.js`); áp cho slide 13 trước, rồi mọi slide nhiều chữ
- [ ] Làm thành phần "so sánh 2 cột" dùng chung, áp cho slide 14 và các bài trước/sau (17, 19, 24, 29)
- [ ] Thiết kế lại từng slide theo 10 nguyên tắc; làm slide 12 trước làm mẫu rồi áp các slide còn lại
- [ ] Làm tương tự phần phiếu (`handouts/index.html`) ở mức vừa đủ (thứ bậc + màu có nghĩa)
- [ ] Kiểm tra: chụp lại, bài "nheo mắt" (làm mờ ảnh: ý chính còn đọc được không), không tràn chữ, in PDF ≤ 30 trang, không lỗi JS, commit (không push)
- [ ] Ghi bảng trước/sau vào Kết quả, kèm ảnh slide 12 trước/sau trong `wip/2026-11-19/img/`
### Bảng rà slide (trước khi sửa, 2026-11-19 16:45)
Lỗi chung: chữ phụ 12–17px (nhãn ①②, ghi chú, thẻ "Dùng khi"); màu phần (đỏ phần 4, hồng phần 7) dùng tô thẻ chính → đỏ bị hiểu là "tránh"; chữ trắng trên vàng/cam không đủ tương phản; dấu "≠" hiện "=/" (slide 6, 13); câu chốt cùng cỡ với chữ thường.
| Slide | Mắt nhìn đâu trước | Vấn đề | Cách sửa |
|---|---|---|---|
| 1 | Tiêu đề | Ổn | Giữ |
| 2 | 2 thẻ bằng nhau | Chữ nhỏ 19px, khung trống nửa dưới | Thẻ "Học xong, bạn biết" chính (rộng), "Dành cho ai" phụ; câu chốt thành dải |
| 3 | 7 thẻ nhỏ | 7 thẻ + 3 thẻ cùng trọng lượng | 7 phần thành dải quy trình có số; 3 lời dặn thành hàng nhỏ; chốt thành dải |
| 4 | 4 thẻ bằng nhau | Thẻ ý chính (AI nhớ chữ nào đi sau chữ nào) không nổi hơn | 3 thẻ nhỏ đánh số có mũi tên → thẻ đích nổi |
| 5 | Câu "Con mèo…" | Chữ giải thích nhỏ, chốt chìm | Tăng cỡ; câu "máy đoán chữ" thành dải chốt |
| 6 | Con vẹt | "≠" lỗi, thẻ nhỏ, xanh/đỏ sai nghĩa | Thẻ to, xám → cam; chữ "khác"; chốt dải |
| 7 | Thẻ xanh | 2 thẻ bằng nhau | Thẻ "AI tạo nội dung" chính (rộng, viền cam), thẻ kia phụ xám |
| 8, 10 | Các bước | Nhãn ①② 16px, ghi chú 12px | Hệ thống chung: ① xanh dương, nút Gửi cam nổi nhất, chữ ≥18px |
| 9 | 4 thẻ app | Chữ 17px, 2 thẻ Codex/Claude Code chen ngang | Thẻ app: tên to + "dùng khi"; chi tiết bấm để mở; Codex/Claude Code thành 1 ô phụ bấm để mở; chốt dải |
| 11 | Bàn tay | Chữ ngón tay 16–19px | Tăng cỡ |
| 12 | 2 cột bằng nhau | Như owner tả | Mẫu: 2 thẻ có số ①②, màu riêng, hình + 1 câu; ví dụ và câu chỉnh bấm để mở; dải chốt |
| 13 | 3 khối chữ dày | Quá nhiều chữ | 3 thẻ đầu mục, chi tiết bấm để mở; dải chốt |
| 14 | Các bước | Kết quả 2 lần nằm trên-dưới, phải cuộn | So sánh 2 cột (owner tả) |
| 15 | 2 thẻ | Ổn, chữ nhỏ | Tăng cỡ, thẻ màu riêng, dải chốt |
| 16 | Thẻ đỏ "Hỏi lại" | Đỏ sai nghĩa | 5 thẻ màu theo 5 phần (dùng lại ở prompt tô màu slide 14, 19); không tô đỏ |
| 17 | 3 cột ① ② | 3 bộ ①② nhỏ, phải cuộn | So sánh 2 cột + 3 nút chọn nghề |
| 18 | Thẻ đỏ | Đỏ sai nghĩa | Thẻ thường, thẻ "Chịu trách nhiệm" viền cam |
| 19 | Các bước | Chỉ 1 lần chạy | So sánh: câu ngắn của bạn ↔ công thức tô màu |
| 20 | 3 thẻ | Bước 1/Bước 2 lẫn | 2 bước có số; 3 cách: tên + "Free", cách làm bấm để mở |
| 21 | 2 cột chữ dày | Rất nhiều chữ | 2 thẻ (Gmail/Drive, Excel), chi tiết bấm để mở |
| 22 | 4 thẻ đỏ | Ổn (đỏ = tránh) | Tăng cỡ; chốt dải |
| 23 | 2 cột | Như owner tả | 2 thẻ "Tờ giấy dán tủ lạnh" / "Tủ tài liệu" + chữ nối |
| 24 | Các bước | Dài, phải cuộn | So sánh: không đưa tài liệu ↔ có dán tài liệu; cách B, C bấm để mở |
| 25 | 4 thẻ | Chốt chìm | Tăng cỡ, dải chốt, dải hành động cam |
| 26–27 | Khung ① | Ổn | Theo hệ thống chung |
| 28 | Thẻ hồng | Màu phần làm nhấn | Thẻ "Khung trả lời" cam; dải chốt |
| 29 | Khung thử | Chỉ 1 kết quả | Kết quả 2 cột: không có hướng dẫn ↔ có hướng dẫn Phần A |
| 30 | Tiêu đề | Ổn | Tăng cỡ |

## Kết quả
