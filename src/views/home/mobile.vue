<script setup>
import { ref, onMounted } from "vue";
import TypeIt from "typeit";
import { greetingWords } from "@/config.js";

const elementRef = ref();

onMounted(() => {
  new TypeIt(elementRef.value, {
    strings: greetingWords,
    speed: 100,
    loop: true,
  }).go();
});
</script>

<template>
  <div class="home-container">
    <div ref="elementRef"></div>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/variables";

.home-container {
  height: calc(100vh - 46px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: variables.$theme-color;
  padding: 0 16px;

  div {
    line-height: 2;
  }
}
</style>
