import { successMessage, errorMessage } from "@/views/utils/message.js";

export function copyToClipboard(text, message = "复制成功！") {
  navigator.clipboard
    .writeText(text)
    .then(function () {
      successMessage(message);
    })
    .catch(function (err) {
      console.log(err);
      errorMessage("当前环境不支持复制，请手动复制！");
    });
}
