<script setup>
import dataList from "/src/assets/json/pdf-whut.json";
import { copyToClipboard } from "@/utils/clipboard.js";
import { showSuccessToast } from "vant";

const dataArray = JSON.parse(JSON.stringify(dataList)).reverse()
const groupedData = dataArray.reduce((acc, item) => {
  if (!acc[item.semester]) {
    acc[item.semester] = [];
  }
  acc[item.semester].push(item);
  return acc;
}, {});
const handleClick = (link, code) => {
  copyToClipboard(code, "");
  showSuccessToast(`百度网盘提取码 ${code} 已复制到剪切板！`);
  setTimeout(() => {
    window.open(link, "_blank");
  }, 1000);
};
</script>

<template>
  <div v-for="semester in Object.keys(groupedData)">
    <div class="semester">{{ semester }}</div>
    <van-cell
      is-link
      center
      v-for="{ course, title, link, code } in groupedData[semester]"
      @click="handleClick(link, code)"
    >
      <template #title>
        <van-text-ellipsis :content="title" />
      </template>
      <template #value>
        <van-text-ellipsis :content="course" />
      </template>
    </van-cell>
  </div>
</template>

<style scoped lang="scss">
.semester {
  padding: 16px;
}
</style>
