<script setup>
import dataList from "@/assets/json/apps.json";
import CategoryList from "@/components/CategoryList.vue";
import AlertTip from "@/components/AlertTip.vue";

const BASE_PATH = import.meta.env.VITE_BASE_PATH;

const dataArray = JSON.parse(JSON.stringify(dataList))
  .reverse()
  .map((category) => {
    category.list.forEach((item) => {
      const { name, link, comment } = item;
      item.icon = `${window.location.origin}/resources/images/apps/${name}.png`;
      item.link = BASE_PATH + (link || `/${name}/`);
      item.line = comment;
    });
    return {
      ...category,
      list: category.list.reverse(),
    };
  });
const appsCount = dataArray.reduce(function (sum, obj) {
  return sum + (Array.isArray(obj.list) ? obj.list.length : 0);
}, 0);
const alertTipList = [
  `WSL 应用【${appsCount}】：一些部署在我个人电脑 Windows Subsystem for Linux(WSL) 环境中可正常运行的应用`,
];
</script>

<template>
  <alert-tip :list="alertTipList" />
  <category-list :list="dataArray" />
</template>
