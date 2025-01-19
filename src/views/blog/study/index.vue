<script setup>
import dataList from "@/assets/json/blog-study.json";
import cppPrimerList from "@/assets/json/blog-cpp-primer.json";
import BlogCardItem from "@/components/BlogCardItem.vue";
import AlertTip from "@/components/AlertTip.vue";
import { processTableRowMerge } from "@/utils/element-plus.js";

const alertTipList = [
  `学习笔记【${dataList.length + cppPrimerList.length}】：路漫漫其修远兮，吾将上下而求索`,
];
const dataArray = JSON.parse(JSON.stringify(dataList)).reverse();
const arraySpanMethod = ({ row, rowIndex, columnIndex }) => {
  if (columnIndex === 1) {
    return processTableRowMerge(cppPrimerList, row, rowIndex, "category");
  }
};
</script>

<template>
  <alert-tip :list="alertTipList" />

  <div class="card-list-box">
    <blog-card-item v-for="item in dataArray" :card-data="item" />
  </div>

  <el-table :data="cppPrimerList" border :span-method="arraySpanMethod">
    <el-table-column prop="id" label="#" align="center" width="50" />
    <el-table-column prop="category" label="分类" align="center" />
    <el-table-column prop="postTime" label="发布时间" align="center" />
    <el-table-column prop="title" label="博客">
      <template #default="{ row }">
        <el-link :href="row.link" type="primary" target="_blank"
          >{{ row.title }}
        </el-link>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped lang="scss">
.card-list-box {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
</style>
