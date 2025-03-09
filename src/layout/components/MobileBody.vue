<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <router-view />
  <van-divider v-if="!route.meta.hidden">没有更多了</van-divider>
</template>

<style scoped lang="scss"></style>
