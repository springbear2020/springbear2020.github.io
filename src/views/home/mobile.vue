<script setup>
import studyList from "@/assets/json/blog-study.json";
import codingList from "@/assets/json/blog-coding.json";
import whutList from "/src/assets/json/blog-whut.json";
import { shuffleArray } from "@/utils/array.js";

const dataList = shuffleArray([...studyList, ...codingList, ...whutList]);
const handleClick = (link) => {
  window.open(link, "_blank");
};
</script>

<template>
  <van-swipe lazy-render :autoplay="3000">
    <van-swipe-item
      v-for="{ title, link, cover } in dataList"
      @click="handleClick(link)"
    >
      <div class="image-container">
        <van-image
          :src="`/resources/images/articles/${cover}`"
          height="256px"
        />
        <div class="image-title">{{ title }}</div>
      </div>
    </van-swipe-item>
    <template #indicator="{ active, total }">
      <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
    </template>
  </van-swipe>
</template>

<style scoped lang="scss">
@use "@/styles/variables.scss";

.image-container {
  position: relative;
}

.image-title {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 8px;
  text-align: center;
  font-size: 14px;
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
