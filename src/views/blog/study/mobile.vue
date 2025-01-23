<script setup>
import { ref } from "vue";
import cppPrimerList from "@/assets/json/blog-cpp-primer.json";
import dataList from "@/assets/json/blog-study.json";

const activeTab = ref(0);
const dataArray = JSON.parse(JSON.stringify(dataList)).reverse();
</script>

<template>
  <van-tabs v-model:active="activeTab" animated swipeable>
    <van-tab title="首页">
      <van-cell
        is-link
        center
        v-for="{ title, link, cover, postTime, flag } in dataArray"
        :url="link"
        :class="flag ? 'card-badge' : ''"
      >
        <template #title>
          <van-image :src="`/resources/images/articles/${cover}`" height="100px" />
        </template>
        <template #value>
          <van-text-ellipsis :content="title" />
          <van-text-ellipsis :content="postTime" />
        </template>
      </van-cell>
    </van-tab>
    <van-tab title="C++ Primer">
      <van-cell
        is-link
        center
        v-for="{ title, postTime, link } in cppPrimerList"
        :url="link"
        :value="postTime"
      >
        <template #title>
          <van-text-ellipsis :content="title" />
        </template>
      </van-cell>
    </van-tab>
  </van-tabs>
</template>

<style scoped lang="scss"></style>
