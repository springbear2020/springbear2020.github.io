<script setup>
import routes from "@/router/modules/index.js";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import MenuItem from "@/layout/components/header/MenuItem.vue";
import IconLink from "@/layout/components/header/IconLink.vue";

const extractPathTitleMap = (routes, map = new Map()) => {
  routes.forEach((route) => {
    if (route.path && route.meta && route.meta.title) {
      map.set(route.path, route.meta.title);
    }
    if (route.children) {
      extractPathTitleMap(route.children, map);
    }
  });
  return map;
};
const pathTitleMap = extractPathTitleMap(routes);

const route = useRoute();
const availableRoutes = routes.filter((r) => !r.meta.hidden);
const handleSelect = (path) => {
  document.title = pathTitleMap.get(path) + " | Spring-_-Bear";
};

onMounted(() => {
  handleSelect(route.path);
});
</script>

<template>
  <div class="header-container">
    <el-menu
      mode="horizontal"
      router
      :ellipsis="false"
      :default-active="route.path"
      @select="handleSelect"
    >
      <el-menu-item index="/">
        <img src="/logo.png" alt="logo" height="48" class="large-radius" />
      </el-menu-item>
      <menu-item v-for="menu in availableRoutes" :menu="menu" />
    </el-menu>

    <icon-link />
  </div>
</template>

<style scoped lang="scss">
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 0 16px;
}
</style>
