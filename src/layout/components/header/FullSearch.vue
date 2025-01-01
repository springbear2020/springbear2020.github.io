<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useSearchStore } from "@/pinia/index.js";
import { appsBaseUrl, githubBaseUrl } from "@/config.js";
import { copyToClipboard } from "@/views/utils/clipboard.js";
import { sourceType } from "@/constants/index.js";

const router = useRouter();
const searchStore = useSearchStore();

// 对话框
const dialogShow = ref(false);
const openDialog = () => {
  dialogShow.value = true;
};
const handleClosed = () => {
  resultList.value = [];
  keyword.value = "";
  typeChosen.value = sourceType.all;
};
const handleOpened = () => {
  searchInputRef.value.focus();
};
defineExpose({ openDialog });

// 输入框
const searchInputRef = ref();
const keyword = ref("");

// 搜索结果
const resultList = ref();
const typeChosen = ref(sourceType.all);
const emptyShow = computed(() => {
  return keyword.value.length > 0 && resultList.value.length === 0;
});
const handleSearch = () => {
  if (!keyword.value) {
    resultList.value = [];
    return;
  }
  resultList.value = searchStore
    .doSearch(keyword.value, typeChosen.value)
    .slice(0, 10);
};
const handleClick = (result) => {
  const { type, link } = result;
  switch (type) {
    case sourceType.blog:
      window.open(link, "_blank");
      break;
    case sourceType.repo:
      window.open(`${githubBaseUrl}/${link}/`, "_blank");
      break;
    case sourceType.app:
      window.open(`${appsBaseUrl}/${link}/`, "_blank");
      break;
    case sourceType.pdf:
      const { remark } = result;
      copyToClipboard(remark, `百度网盘提取码 ${remark} 已复制到剪切板！`);
      setTimeout(() => {
        window.open(link, "_blank");
      }, 1000);
      break;
    case sourceType.route:
      router.push(link);
      dialogShow.value = false;
      break;
  }
};

onMounted(() => {
  window.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      openDialog();
    }
  });
});
</script>

<template>
  <el-dialog
    width="1080px"
    center
    v-model="dialogShow"
    @closed="handleClosed"
    @opened="handleOpened"
  >
    <el-radio-group v-model="typeChosen" @change="handleSearch">
      <el-radio-button :value="sourceType.all">所有</el-radio-button>
      <el-radio-button :value="sourceType.blog">博客</el-radio-button>
      <el-radio-button :value="sourceType.repo">仓库</el-radio-button>
      <el-radio-button :value="sourceType.app">应用</el-radio-button>
      <el-radio-button :value="sourceType.pdf">PDF</el-radio-button>
      <el-radio-button :value="sourceType.route">路由</el-radio-button>
    </el-radio-group>

    <el-input
      v-model="keyword"
      @input="handleSearch"
      class="search-box"
      prefix-icon="Search"
      size="large"
      clearable
      placeholder="在此输入搜索内容..."
      ref="searchInputRef"
    />

    <div v-if="emptyShow">
      <el-empty description="空空如也~" />
    </div>
    <div
      class="result-line"
      v-for="result in resultList"
      @click="handleClick(result)"
      v-else
    >
      <span>{{ result.title }}</span>
      <span>{{ result.type.toUpperCase() }}</span>
    </div>
  </el-dialog>
</template>

<style scoped lang="scss">
@use "@/styles/variables";

.search-box {
  margin: 16px 0;
}

.result-line {
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.result-line:hover {
  cursor: pointer;
  color: variables.$theme-color;
  background-color: variables.$bg-color;
}
</style>
