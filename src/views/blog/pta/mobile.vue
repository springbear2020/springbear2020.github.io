<script setup>
import dataList from "/src/assets/json/blog-pta.json";

const groupedData = dataList.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category].push(item);
  return acc;
}, {});
</script>

<template>
  <div v-for="category in Object.keys(groupedData)">
    <div class="category">{{category}}</div>
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
  </div>
</template>

<style scoped lang="scss">
.category {
  padding: 16px;
}
</style>
