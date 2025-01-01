<script setup>
import dataList from "@/assets/json/blog-coding.json";
import BlogCardItem from "@/components/BlogCardItem.vue";
import AlertTip from "@/components/AlertTip.vue";

const alertTipList = [
  `程序人生【${dataList.length}】：用代码编织梦想，用逻辑感悟生活`,
];
const dataArray = JSON.parse(JSON.stringify(dataList)).reverse();
</script>

<template>
  <alert-tip :list="alertTipList" />

  <div class="card-list-box">
    <blog-card-item v-for="item in dataArray" :card-data="item" />
  </div>
</template>

<style scoped lang="scss">
.card-list-box {
  display: flex;
  flex-wrap: wrap;
}
</style>
