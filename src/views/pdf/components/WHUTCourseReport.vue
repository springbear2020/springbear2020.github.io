<script setup>
import AlertTip from "@/components/AlertTip.vue";
import dataList from "/src/assets/json/pdf-whut.json";
import { copyToClipboard } from "@/utils/clipboard.js";
import { processTableRowMerge } from "@/utils/element-plus.js";

const dataArray = JSON.parse(JSON.stringify(dataList)).reverse()
const alertTipList = [
  `武理四年【${dataArray.length}】：武汉理工大学计算机学院软件工程专业本科课程 PDF 报告（2019-2023）`,
];
const arraySpanMethod = ({ row, rowIndex, columnIndex }) => {
  if (columnIndex === 1) {
    return processTableRowMerge(dataArray, row, rowIndex, "semester");
  } else if (columnIndex === 2) {
    return processTableRowMerge(dataArray, row, rowIndex, "course");
  }
};
</script>

<template>
  <alert-tip :list="alertTipList" />

  <el-table :data="dataArray" border :span-method="arraySpanMethod">
    <el-table-column prop="id" label="#" align="center" width="50" />
    <el-table-column prop="semester" label="学期" align="center" width="100" />
    <el-table-column prop="course" label="课程" />
    <el-table-column prop="title" label="PDF 报告">
      <template #default="{ row }">
        <el-link :href="row.link" type="primary" target="_blank"
          >{{ row.title }}
        </el-link>
      </template>
    </el-table-column>
    <el-table-column prop="code" label="提取码" align="center" width="100">
      <template #default="{ row }">
        <div @click="copyToClipboard(row.code)" class="extract-code">
          <span>{{ row.code }}</span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped lang="scss">
@use "@/styles/variables";

.extract-code {
  cursor: pointer;

  span:hover {
    color: variables.$theme-color;
    border-bottom: 1px solid variables.$theme-color;
  }
}
</style>
