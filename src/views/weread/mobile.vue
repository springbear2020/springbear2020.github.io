<script setup>
import dataList from "@/assets/json/weread.json";

const dataArray = JSON.parse(JSON.stringify(dataList))
  .reverse()
  .map((category) => {
    category.list.forEach((item) => {
      const { id } = item;
      item.icon = `${window.location.origin}/resources/images/books/${id}.jpg`;
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
    <div
      v-for="{
        title,
        icon,
        time,
        duration,
        sentence,
        paraphrase,
      } in category.list"
    >
      <van-cell center :border="false">
        <template #icon>
          <van-icon :name="icon" :size="64" />
        </template>
        <template #title>
          <van-text-ellipsis :content="title" />
        </template>
        <template #value>
          <van-text-ellipsis :content="time" />
          <van-text-ellipsis :content="duration" />
        </template>
      </van-cell>
      <div class="sentence">
        {{ sentence }}<span class="arrow"> => </span>{{ paraphrase }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/variables.scss";

.category {
  padding: 16px;
}

.sentence {
  color: var(--van-cell-value-color);
  padding: 10px 16px;
  background: #fff;
  font-size: 14px;
  border-bottom: 1px solid #ebedf0;

  .arrow {
    color: variables.$theme-color;
  }
}

:deep(.van-cell__title) {
  margin-left: 16px;
}
</style>
