<script setup>
import dataList from "@/assets/json/blog-coding.json";

const dataArray = JSON.parse(JSON.stringify(dataList)).reverse();
</script>

<template>
  <van-cell
    is-link
    center
    v-for="{ title, link, cover, postTime } in dataArray"
    :url="link"
  >
    <template #title>
      <van-image :src="`/resources/images/articles/${cover}`" height="100px" />
    </template>
    <template #value>
      <van-text-ellipsis :content="title" />
      <van-text-ellipsis :content="postTime" />
    </template>
  </van-cell>
</template>

<style scoped lang="scss"></style>
