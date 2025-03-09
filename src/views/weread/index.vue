<script setup>
import dataList from "@/assets/json/weread.json";
import AlertTip from "@/components/AlertTip.vue";
import BookCategoryList from "@/views/weread/components/BookCategoryList.vue";

const dataArray = JSON.parse(JSON.stringify(dataList))
  .reverse()
  .map((category) => {
    category.list.forEach((item) => {
      const { id, time, duration } = item;
      item.icon = `${window.location.origin}/resources/images/books/${id}.jpg`;
      item.firstLine = `首次读完：${time}`;
      item.secondLine = `阅读时长：${duration}`;
    });
    return {
      ...category,
      list: category.list.reverse(),
    };
  });

const bookCount = dataArray.reduce(function (sum, obj) {
  return sum + (Array.isArray(obj.list) ? obj.list.length : 0);
}, 0);
const alertTipList = [
  `微信读书【${bookCount}】：粗缯大布裹生涯，腹有诗书气自华`,
];
</script>

<template>
  <alert-tip :list="alertTipList" />
  <book-category-list :list="dataArray" />
</template>
