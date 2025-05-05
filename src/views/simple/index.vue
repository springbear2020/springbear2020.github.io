<script setup>
import CategoryCardList from "@/components/CategoryCardList.vue";
import BlogCardList from "@/components/BlogCardList.vue";
import CourseTable from "@/components/CourseTable.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useDataStore } from "@/pinia/modules/store.js";

const route = useRoute();
const dataStore = useDataStore();

const { subComponent } = route.meta;
const subComponentMap = { CategoryCardList, BlogCardList, CourseTable };

const tipsLine = ref("");
const dataList = ref([]);

onMounted(() => {
  const { tips, data } = dataStore.loadData(route);
  tipsLine.value = tips;
  dataList.value = data;
});
</script>

<template>
  <p class="tips-line">{{ tipsLine }}</p>
  <component :is="subComponentMap[subComponent]" :list="dataList" />
</template>
