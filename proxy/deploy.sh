#!/usr/bin/env bash
# Đẩy máy trung gian lên Google Apps Script rồi ghi địa chỉ vào ai.js.
# Key đọc từ file ngoài repo, chỉ chèn vào 1 bản tạm; bản tạm bị xoá khi xong. Không in key.
# Chạy: bash proxy/deploy.sh   (cần đăng nhập 1 lần: npx @google/clasp login)
set -euo pipefail
cd "$(dirname "$0")"
KEY_FILE="${GEMINI_KEY_FILE:-$HOME/.config/ai-workshop/gemini.key}"
STATE="${CLASP_STATE:-$HOME/.config/ai-workshop/clasp-state.json}" # scriptId + deploymentId, ngoài repo
CLASP=(npx -y @google/clasp@3)
AI_JS="$(cd .. && pwd)/ai.js"

[ -f "$HOME/.clasprc.json" ] || { echo "Chưa đăng nhập Google. Chạy: npx @google/clasp login"; exit 1; }
[ -s "$KEY_FILE" ] || { echo "Không thấy key ở $KEY_FILE"; exit 1; }
get() { [ -f "$STATE" ] && node -e 'const s=require(process.argv[1]);process.stdout.write(s[process.argv[2]]||"")' "$STATE" "$1" || true; }
put() { node -e 'const fs=require("fs"),f=process.argv[1];let s={};try{s=JSON.parse(fs.readFileSync(f))}catch(e){}s[process.argv[2]]=process.argv[3];fs.writeFileSync(f,JSON.stringify(s,null,2))' "$STATE" "$1" "$2"; }

TMP=$(mktemp -d); trap 'rm -rf "$TMP"' EXIT
SCRIPT_ID=$(get scriptId)
if [ -z "$SCRIPT_ID" ]; then
  (cd "$TMP" && "${CLASP[@]}" create-script --type standalone --title "ai-workshop-gemini" --rootDir .)
  SCRIPT_ID=$(node -e 'process.stdout.write(require(process.argv[1]).scriptId)' "$TMP/.clasp.json")
  put scriptId "$SCRIPT_ID"
  rm -f "$TMP"/*.js "$TMP"/*.gs "$TMP"/appsscript.json
fi
printf '{"scriptId":"%s","rootDir":"."}\n' "$SCRIPT_ID" > "$TMP/.clasp.json"
cp appsscript.json "$TMP/"
# Chèn key vào bản tạm (chỉ chỗ trống đầu tiên)
node -e 'const fs=require("fs");const k=fs.readFileSync(process.argv[1],"utf8").trim();const s=fs.readFileSync("Code.gs","utf8");
if(!s.includes("__GEMINI_KEY__")){console.error("Code.gs thiếu chỗ trống __GEMINI_KEY__");process.exit(2)}
fs.writeFileSync(process.argv[2],s.replace("__GEMINI_KEY__",()=>k))' "$KEY_FILE" "$TMP/Code.gs"

(cd "$TMP" && "${CLASP[@]}" push -f)

DEP=$(get deploymentId)
if [ -z "$DEP" ]; then
  OUT=$(cd "$TMP" && "${CLASP[@]}" create-deployment -d "ai-workshop")
  DEP=$(printf '%s' "$OUT" | grep -o 'AKfyc[A-Za-z0-9_-]*' | head -1)
  [ -n "$DEP" ] || { echo "Không đọc được deployment id:"; echo "$OUT"; exit 1; }
  put deploymentId "$DEP"
else
  (cd "$TMP" && "${CLASP[@]}" update-deployment "$DEP" -d "ai-workshop")
fi
URL="https://script.google.com/macros/s/$DEP/exec"

# Ghi địa chỉ vào ai.js (1 chỗ duy nhất)
node -e 'const fs=require("fs"),f=process.argv[1];fs.writeFileSync(f,fs.readFileSync(f,"utf8").replace(/var AI_PROXY_URL = .*;/,"var AI_PROXY_URL = \x27"+process.argv[2]+"\x27;"))' "$AI_JS" "$URL"
echo "Địa chỉ máy trung gian: $URL (đã ghi vào ai.js)"

echo "Thử gọi thật 1 lần:"
RES=$(curl -sSL -m 90 -H 'Content-Type: text/plain' -d '{"site":"localhost","cid":"deploy","prompt":"Chào bạn, trả lời 1 câu ngắn."}' "$URL" || true)
case "$RES" in
  '{'*) echo "$RES" | head -c 600; echo ;;
  *) echo "Chưa gọi được (Google trả trang lỗi). Lần đầu cần cấp quyền:"
     echo "  mở https://script.google.com/d/$SCRIPT_ID/edit → chọn hàm kiemTra → Chạy → Cho phép."
     echo "  Xong chạy lại: bash proxy/deploy.sh"; exit 1 ;;
esac
