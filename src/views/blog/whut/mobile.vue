<script setup>
import dataList from "/src/assets/json/blog-whut.json";

const dataArray = JSON.parse(JSON.stringify(dataList)).reverse();
const groupedData = dataArray.reduce((acc, item) => {
  if (!acc[item.semester]) {
    acc[item.semester] = [];
  }
  acc[item.semester].push(item);
  return acc;
}, {});
</script>

<template>
  <div v-for="semester in Object.keys(groupedData)">
    <div class="semester">{{ semester }}</div>
    <van-cell
      is-link
      center
      v-for="{ title, link, cover, postTime } in groupedData[semester]"
      :url="link"
    >
      <template #title>
        <van-image
          :src="`/resources/images/articles/${cover}`"
          height="100px"
        />
      </template>
      <template #value>
        <van-text-ellipsis :content="title" />
        <van-text-ellipsis :content="postTime" />
      </template>
    </van-cell>
  </div>
</template>

<style scoped lang="scss">
.semester {
  padding: 16px;
}
</style>
