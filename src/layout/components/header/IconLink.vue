<script setup>
import { ref } from "vue";
import { githubBaseUrl, csdnBaseUrl } from "@/config.js";
import { sourceType } from "@/constants/index.js";
import FullSearch from "@/layout/components/header/FullSearch.vue";

const fullSearchRef = ref();
const handleSearch = () => {
  fullSearchRef.value.openDialog();
};
const handleJump = (type) => {
  let target = "";
  if (sourceType.blog === type) {
    target = csdnBaseUrl;
  } else if (sourceType.repo === type) {
    target = githubBaseUrl;
  }
  window.open(target, "_blank");
};
</script>

<template>
  <div>
    <img
      class="icon-link"
      src="/resources/svg/search.svg"
      alt="search"
      @click="handleSearch"
    />
    <img
      class="icon-link"
      src="/resources/svg/csdn.svg"
      alt="csdn"
      @click="handleJump(sourceType.blog)"
    />
    <img
      class="icon-link"
      src="/resources/svg/github.svg"
      alt="github"
      @click="handleJump(sourceType.repo)"
    />
  </div>

  <full-search ref="fullSearchRef" />
</template>

<style scoped lang="scss">
@use "@/styles/variables";

.icon-link {
  margin: 0 4px;
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
}

.icon-link:hover {
  cursor: pointer;
  border-bottom: 1px solid variables.$theme-color;
}
</style>
