<script setup>
import dataList from "@/assets/json/repo.json";
import CategoryList from "@/components/CategoryList.vue";
import AlertTip from "@/components/AlertTip.vue";
import { githubBaseUrl } from "@/config.js";

const dataArray = JSON.parse(JSON.stringify(dataList))
  .reverse()
  .map((category) => {
    category.list.forEach((item) => {
      const { title, link, dateRange, stack } = item;
      item.icon = `${window.location.origin}/resources/images/repo/${title}.png`;
      item.link = githubBaseUrl + (link || `/${title}/`);
      item.firstLine = `开发时间：${dateRange}`;
      item.secondLine = `核心技术：${stack}`;
    });
    return {
      ...category,
      list: category.list.reverse(),
    };
  });
const repoCount = dataArray.reduce(function (sum, obj) {
  return sum + (Array.isArray(obj.list) ? obj.list.length : 0);
}, 0);
const alertTipList = [
  `工程项目【${repoCount}】：本人在项目中担任主导角色，负责整体设计并亲自参与全程开发、精心打造的代码工程项目`,
];
</script>

<template>
  <alert-tip :list="alertTipList" />
  <category-list :list="dataArray" />
</template>
