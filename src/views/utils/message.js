import { ElMessage } from "element-plus";

export function successMessage(message) {
  ElMessage({
    message: message,
    type: "success",
    showClose: true,
  });
}

export function errorMessage(message) {
  ElMessage({
    message: message,
    type: "error",
    showClose: true,
  });
}

export function infoMessage(message) {
  ElMessage({
    message: message,
    type: "info",
    showClose: true,
  });
}

export function warningMessage(message) {
  ElMessage({
    message: message,
    type: "warning",
    showClose: true,
  });
}
