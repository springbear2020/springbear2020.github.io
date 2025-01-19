<script setup>
import AlertTip from "@/components/AlertTip.vue";
import dataList from "/src/assets/json/blog-pta.json";
import { processTableRowMerge } from "@/utils/element-plus.js";

const alertTipList = [
  `PTA | 程序设计类实验辅助教学平台【${dataList.length}】：基础编程题目集、C 语言程序设计(第3版)、C 语言程序设计实验与习题指导(第3版)`,
];
const arraySpanMethod = ({ row, rowIndex, columnIndex }) => {
  if (columnIndex === 1) {
    return processTableRowMerge(dataList, row, rowIndex, "category");
  }
};
</script>

<template>
  <alert-tip :list="alertTipList" />

  <el-table :data="dataList" border :span-method="arraySpanMethod">
    <el-table-column prop="order" label="#" align="center" width="50" />
    <el-table-column prop="category" label="题目集" align="center" />
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
