import { successMessage, errorMessage } from "@/utils/message.js";

export function copyToClipboard(text, message = "复制成功！") {
  navigator.clipboard
    .writeText(text)
    .then(function () {
      if (message) {
        successMessage(message);
      }
    })
    .catch(function (err) {
      console.error(err);
      errorMessage("当前环境不支持复制，请手动复制！");
    });
}
