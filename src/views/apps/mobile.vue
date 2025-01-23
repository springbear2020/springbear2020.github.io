<script setup>
import dataList from "@/assets/json/apps.json";
import { appsBaseUrl } from "@/config.js";

const dataArray = JSON.parse(JSON.stringify(dataList))
  .reverse()
  .map((category) => {
    category.list.forEach((item) => {
      const { name, link, comment } = item;
      item.icon = `${window.location.origin}/resources/images/apps/${name}.png`;
      item.link = link || appsBaseUrl + `/${name}/`;
      item.line = comment;
    });
    return {
      ...category,
      list: category.list.reverse(),
    };
  });
</script>

<template>
  <div v-for="category in dataArray">
    <div class="category">{{ category.title }}</div>
    <van-cell
      is-link
      center
      v-for="{ title, name, icon, link } in category.list"
      :url="link"
    >
      <template #icon>
        <van-icon :name="icon" :size="64" />
      </template>
      <template #title>
        <van-text-ellipsis :content="name" />
      </template>
      <template #value>
        <van-text-ellipsis :content="title" />
      </template>
    </van-cell>
  </div>
</template>

<style scoped lang="scss">
.category {
  padding: 16px;
}

:deep(.van-cell__title) {
  margin-left: 16px;
}
</style>
