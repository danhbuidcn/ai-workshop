# Gom buổi 1 vào folder, thêm trang danh sách buổi học
## Input
Owner (2026-11-20): đưa nội dung vào folder để quản lý theo danh sách. Nội dung hiện tại là buổi 1. Vào trang sẽ hiện danh sách các buổi học; bấm vào thì hiện nội dung buổi đó.
## Context
- Gốc repo hiện có: `index.html` (slide), `ai.css`, `ai.js`, `README.md`, `outline/`, `sources/`, `proxy/`, `wip/`.
- Giả định (owner chưa trả lời, mặc định theo đề nghị): `proxy/` dùng chung, ở lại gốc. `wip/` và `.git` ở lại gốc.
- Chuyển vào `buoi-1/`: `index.html`, `ai.css`, `ai.js`, `outline/`, `sources/`. README: tách (xem Plan).
- `ai.js` ghi địa chỉ proxy 1 chỗ, `proxy/deploy.sh` tự ghi vào đó → sau khi chuyển phải sửa đường dẫn trong `deploy.sh`, `HUONG-DAN.md`, `test-proxy.js` nếu có.
- Nút "Gửi cho Gemini" chạy trên trang `danhbuidcn.github.io`; link slide sẽ đổi thành `.../buoi-1/`. Giữ nguyên behavior slide.
- Owner chốt: mở trang gốc phải hiện danh sách buổi học trước (mặc định), bấm vào mới hiện nội dung buổi đó.
- Đơn giản nhất: HTML tĩnh, không framework. Trang gốc `index.html` mới = danh sách (đọc từ 1 mảng JS hoặc viết tay), mỗi buổi là 1 thẻ link tới `buoi-N/index.html`.
## Plan
- [x] `git mv` các file/folder trên vào `buoi-1/`
- [x] Sửa đường dẫn tương đối bị gãy (README, `proxy/*`, link trong slide nếu có)
- [x] Tạo `index.html` mới ở gốc: tiêu đề khoá học + danh sách buổi (hiện có buổi 1: tên, mô tả ngắn, 34 slide, link). Dùng kiểu chữ/màu giống slide.
- [x] Tách README: README gốc (mô tả khoá + bảng danh sách buổi + cách mở), `buoi-1/README.md` (nội dung cũ: mục tiêu, lịch, nguồn)
- [x] Kiểm tra: mở thử gốc → bấm buổi 1 → slide chạy, CSS/JS tải được, `grep` không còn link gãy
- [x] Ghi `## Kết quả` + cập nhật index. Không commit/push.
## Kết quả
- Đã chuyển `index.html`, `ai.css`, `ai.js`, `outline/`, `sources/` vào `buoi-1/` (`git mv`). `proxy/`, `wip/` ở gốc.
- Sửa `proxy/deploy.sh` (ghi vào `buoi-1/ai.js`), `proxy/HUONG-DAN.md`, link trong `buoi-1/sources/README.md`. `test-proxy.js` không cần sửa.
- `index.html` gốc mới: danh sách buổi (mảng `BUOI`, thêm buổi = thêm 1 dòng). `README.md` gốc: danh sách buổi + cách mở; `buoi-1/README.md`: nội dung cũ.
- Kiểm tra: `buoi-1/index.html` chỉ tham chiếu `ai.css`, `ai.js` (cùng folder, có đủ). Link markdown đã sửa. Chưa mở bằng trình duyệt.
- Không sửa `wip/index.md`, không push. Còn lại: sau khi deploy, link slide thành `.../buoi-1/`.
