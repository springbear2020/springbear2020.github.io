<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import DesktopHeader from "@/layout/header/DesktopHeader.vue";
import MobileHeader from "@/layout/header/MobileHeader.vue";
import routes from "@/router/modules/index.js";
import { useRoute } from "vue-router";

const buildPathTitleMap = (routes, map = new Map()) => {
  routes.forEach((route) => {
    if (!route.meta.hidden) {
      map.set(route.path, route.meta.title);
    }
    if (route.children) {
      buildPathTitleMap(route.children, map);
    }
  });
  return map;
};
const route = useRoute();
const menus = routes.filter((route) => !route.meta.hidden);
const pathTitleMap = buildPathTitleMap(routes);
const handleSet = (path) => {
  const routeTitle = pathTitleMap.get(path);
  document.title = routeTitle ? `${routeTitle} - 春天熊` : "春天熊";
};

// 动态加载头部组件
const RESIZE_THRESHOLD = 867
const innerWidth = ref(window.innerWidth);
const headerComponent = computed(() => {
  return innerWidth.value < RESIZE_THRESHOLD ? MobileHeader : DesktopHeader;
});
const handleResize = () => {
  innerWidth.value = window.innerWidth;
};

onMounted(() => {
  handleSet(route.path);

  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <component :is="headerComponent" :menus="menus" @select="handleSet" />
</template>
