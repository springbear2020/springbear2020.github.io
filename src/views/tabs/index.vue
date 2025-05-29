<script setup>
import SentenceList from "@/components/SentenceList.vue";
import BlogCardList from "@/components/BlogCardList.vue";
import ElementTable from "@/components/ElementTable.vue";
import CourseTable from "@/components/CourseTable.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useDataStore } from "@/pinia/modules/store.js";

const route = useRoute();
const dataStore = useDataStore();
const subComponentMap = {
  SentenceList,
  BlogCardList,
  ElementTable,
  CourseTable,
};

const { title, tabs } = route.meta;
const tipsLine = ref("");
const dataList = ref([]);
const filterData = (label, ignoreRouteTitle = false) => {
  const categoryStr = !ignoreRouteTitle ? `${title}:${label}` : label;
  return dataList.value.filter(
    ({ category }) => category.indexOf(categoryStr) === 0,
  );
};

onMounted(() => {
  const { tips, data } = dataStore.loadData(route);
  tipsLine.value = tips;
  dataList.value = data;
});
</script>

<template>
  <p class="tips-line">{{ tipsLine }}</p>

  <el-tabs type="card">
    <el-tab-pane
      lazy
      v-for="{ label, subComponent, ignoreRouteTitle } in tabs"
      :label="label"
    >
      <component
        :is="subComponentMap[subComponent]"
        :list="filterData(label, ignoreRouteTitle)"
      />
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
@use "@/styles/variables";

:deep(.el-tabs__header) {
  background-color: variables.$bg-white;
  margin-bottom: 4px;
}
</style>

<style lang="scss">
@use "@/styles/variables";

.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border-bottom-color: variables.$theme-color;
}
</style>
