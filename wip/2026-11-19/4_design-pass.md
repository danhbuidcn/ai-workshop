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
- Không đổi nội dung/ý nghĩa, không tăng số slide (≤ 30), không đụng `ai.js` logic/key.
## Plan
- [ ] Chụp ảnh toàn bộ slide hiện tại (Chrome headless, 1280×720), xem từng slide, ghi bảng: slide → mắt nhìn đâu trước? → vấn đề → cách sửa
- [ ] Làm thành phần "bấm để mở" dùng chung (CSS + vài dòng JS); áp cho slide 13 trước, rồi mọi slide nhiều chữ
- [ ] Làm thành phần "so sánh 2 cột" dùng chung, áp cho slide 14 và các bài trước/sau
- [ ] Thiết lập hệ thống thiết kế chung (cỡ chữ 3 mức, bảng màu có nghĩa, khoảng cách, khung chốt) trong CSS, dùng chung
- [ ] Thiết kế lại từng slide theo 10 nguyên tắc; làm slide 12 trước làm mẫu rồi áp các slide còn lại
- [ ] Làm tương tự phần phiếu (`handouts/index.html`) ở mức vừa đủ (thứ bậc + màu có nghĩa)
- [ ] Kiểm tra: chụp lại, bài "nheo mắt" (làm mờ ảnh: ý chính còn đọc được không), không tràn chữ, in PDF ≤ 30 trang, không lỗi JS, commit (không push)
- [ ] Ghi bảng trước/sau vào Kết quả, kèm ảnh slide 12 trước/sau trong `wip/2026-11-19/img/`
## Kết quả
