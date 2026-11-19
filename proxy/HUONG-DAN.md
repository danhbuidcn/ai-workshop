# Máy trung gian Gemini (Google Apps Script)

Trang workshop có nút **Gửi cho Gemini**. Nút này gửi câu hỏi tới máy trung gian. Máy trung gian giữ key Gemini chung và gọi Gemini. Học viên không thấy key.

## File

| File | Việc |
|---|---|
| [Code.gs](Code.gs) | Code máy trung gian. Chỉ có chỗ trống ở dòng `var KEY_IN_CODE`, không có key. |
| [appsscript.json](appsscript.json) | Cài đặt: ai cũng gọi được, chạy bằng tài khoản chủ. |
| [deploy.sh](deploy.sh) | Đẩy code lên Apps Script, chèn key vào bản tạm, ghi địa chỉ vào [../ai.js](../ai.js). |
| [test-proxy.js](test-proxy.js) | Kiểm tra code trên máy, không cần Google: `node proxy/test-proxy.js`. |

## Giới hạn có sẵn (sửa ở đầu `Code.gs`)

- Cả lớp: tối đa 20 lượt/phút. Mỗi trình duyệt: 5 lượt/phút.
- Câu hỏi tối đa 3000 ký tự, hướng dẫn cho AI tối đa 4000 ký tự.
- Chỉ nhận yêu cầu ghi trang gửi là `danhbuidcn.github.io` (hoặc `localhost` để thử trên máy).
  Lưu ý: Apps Script không đọc được địa chỉ trang gọi thật, nên đây là rào nhẹ; giới hạn lượt mới là rào chính.
- Model: danh sách `MODELS`, model đầu bận thì thử model sau.
- Lỗi báo bằng tiếng Việt: hết lượt miễn phí, key sai, Gemini quá tải, mất mạng.

## 1. Lấy key Gemini (miễn phí)

1. Vào https://aistudio.google.com/apikey, đăng nhập Gmail.
2. Bấm **Create API key** → copy.
3. Lưu vào file ngoài repo (không dán vào chat, không commit):
   ```bash
   mkdir -p ~/.config/ai-workshop
   nano ~/.config/ai-workshop/gemini.key   # dán key, lưu
   chmod 600 ~/.config/ai-workshop/gemini.key
   ```

## 2. Đăng nhập Google cho công cụ `clasp` (1 lần)

1. Bật **Google Apps Script API**: https://script.google.com/home/usersettings
2. Chạy: `npx @google/clasp login` → chọn tài khoản → Cho phép.

## 3. Triển khai

```bash
bash proxy/deploy.sh
```

Script làm: tạo dự án Apps Script (lần đầu) → đẩy code (có key, chỉ trong bản tạm) → tạo/cập nhật bản triển khai → ghi địa chỉ vào `ai.js` → gọi thử 1 lần.
`scriptId` và `deploymentId` lưu ở `~/.config/ai-workshop/clasp-state.json` (ngoài repo), nên lần sau địa chỉ giữ nguyên.

**Lần đầu** Google bắt chủ tài khoản cấp quyền "gọi ra ngoài" 1 lần:

1. Mở `https://script.google.com/d/<scriptId>/edit` (script in ra link này).
2. Chọn hàm **kiemTra** ở thanh trên → bấm **Chạy**.
3. Hiện "Cần cấp quyền" → chọn tài khoản → **Nâng cao** → **Đi tới ai-workshop-gemini** → **Cho phép**.
4. Xem nhật ký: thấy `OK: ...` là được.
5. Chạy lại `bash proxy/deploy.sh` → phần "Thử gọi thật" in ra `{"ok":true,...}`.

Cách khác (không dùng `deploy.sh`): dán key vào **Cài đặt dự án → Thuộc tính tập lệnh**, tên `GEMINI_KEY`. Code ưu tiên giá trị này.

## 4. Đổi key / tắt

- Đổi key: sửa `~/.config/ai-workshop/gemini.key` → chạy lại `bash proxy/deploy.sh`.
- Tắt nút chạy thử: để `var AI_PROXY_URL = '';` trong [../ai.js](../ai.js). Trang báo học viên bấm "Chép" rồi dán vào Gemini.
- Tắt hẳn: vào trình soạn Apps Script → **Triển khai → Quản lý bản triển khai** → lưu trữ bản triển khai.

## Kiểm tra không lộ key

```bash
grep -rnE 'AQ\.Ab8R|AIza[0-9A-Za-z_-]{20}' . ; git log -p | grep -cE 'AQ\.Ab8R|AIza[0-9A-Za-z_-]{20}'   # phải ra 0
```
