<script setup>
import dataList from "/src/assets/json/blog-pta.json";
import { ref } from "vue";

const activeTab = ref(0);
const groupedData = dataList.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category].push(item);
  return acc;
}, {});
</script>

<template>
  <van-tabs v-model="activeTab" animated swipeable :ellipsis="false">
    <van-tab v-for="category in Object.keys(groupedData)" :title="category">
      <van-cell
        is-link
        center
        v-for="{ title, postTime, link } in groupedData[category]"
        :url="link"
        :value="postTime"
      >
        <template #title>
          <van-text-ellipsis :content="title" />
        </template>
      </van-cell>
    </van-tab>
  </van-tabs>
</template>
