<script setup></script>

<template>
  <van-nav-bar>
    <template #left>
      <van-icon name="/logo.png" size="32" class="logo" />
    </template>
    <template #right>
      <van-icon name="ellipsis" size="32" />
    </template>
  </van-nav-bar>
</template>

<style scoped lang="scss">
.logo {
  :deep(.van-icon__image) {
    border-radius: 4px;
  }
}
</style>
