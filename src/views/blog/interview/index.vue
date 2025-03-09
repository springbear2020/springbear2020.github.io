<script setup>
import dataList from "@/assets/json/blog-interview.json";
import BlogCardItem from "@/components/BlogCardItem.vue";
import AlertTip from "@/components/AlertTip.vue";

const alertTipList = [
  `面试宝典【${dataList.length}】：良禽择木而栖，贤臣择主而事`,
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
  margin-bottom: 16px;
}
</style>
