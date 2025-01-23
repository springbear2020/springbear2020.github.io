<script setup></script>

<template>
  <div class="container">
    <el-scrollbar>
      <router-view />
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 1080px;
  margin: 0 auto;
  height: calc(100vh - 60px);
}
</style>
