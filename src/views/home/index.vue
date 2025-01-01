<script setup></script>

<template>
  <div class="greeting-box">
    <pre>
     ___           ___           ___       ___       ___
    /\__\         /\  \         /\__\     /\__\     /\  \
   /:/  /        /::\  \       /:/  /    /:/  /    /::\  \
  /:/__/        /:/\:\  \     /:/  /    /:/  /    /:/\:\  \
 /::\  \ ___   /::\~\:\  \   /:/  /    /:/  /    /:/  \:\  \
/:/\:\  /\__\ /:/\:\ \:\__\ /:/__/    /:/__/    /:/__/ \:\__\
\/__\:\/:/  / \:\~\:\ \/__/ \:\  \    \:\  \    \:\  \ /:/  /
     \::/  /   \:\ \:\__\    \:\  \    \:\  \    \:\  /:/  /
     /:/  /     \:\ \/__/     \:\  \    \:\  \    \:\/:/  /
    /:/  /       \:\__\        \:\__\    \:\__\    \::/  /
    \/__/         \/__/         \/__/     \/__/     \/__/
  </pre>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/variables";

.greeting-box {
  color: variables.$theme-color;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>
