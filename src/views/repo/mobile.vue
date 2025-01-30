<script setup>
import dataList from "@/assets/json/repo.json";
import { githubBaseUrl } from "@/config.js";

const dataArray = JSON.parse(JSON.stringify(dataList))
  .reverse()
  .map((category) => {
    category.list.forEach((item) => {
      const { title, link, dateRange, stack } = item;
      item.icon = `${window.location.origin}/resources/images/repo/${title}.png`;
      item.link = link || githubBaseUrl + `/${title}/`;
      item.firstLine = `开发时间：${dateRange}`;
      item.secondLine = `核心技术：${stack}`;
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
      v-for="{ title, name, icon, link, flag } in category.list"
      :class="flag ? 'card-badge' : ''"
      :url="link"
    >
      <template #icon>
        <van-icon :name="icon" :size="64" />
      </template>
      <template #title>
        <van-text-ellipsis :content="title" />
      </template>
      <template #value>
        <van-text-ellipsis :content="name" />
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
