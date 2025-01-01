<script setup>
import AlertTip from "@/components/AlertTip.vue";
import dataList from "/src/assets/json/blog-whut.json";
import { processTableRowMerge } from "@/views/utils/element-plus.js";
import { ref } from "vue";

const dataArray = JSON.parse(JSON.stringify(dataList)).reverse()
const alertTipList = [
  `武理四年【${dataArray.length}】：武汉理工大学计算机学院软件工程专业本科课程设计及实验（2019-2023）`,
];
const arraySpanMethod = ({ row, rowIndex, columnIndex }) => {
  if (columnIndex === 1) {
    return processTableRowMerge(dataArray, row, rowIndex, "semester");
  } else if (columnIndex === 2) {
    return processTableRowMerge(dataArray, row, rowIndex, "course");
  }
};
const imagePreviewList = ref([]);
const imagePreviewShow = ref(false);
const handlePreview = (cover) => {
  imagePreviewList.value = [`/resources/images/articles/${cover}`];
  imagePreviewShow.value = true;
};
const handleClose = () => {
  imagePreviewList.value = [];
  imagePreviewShow.value = false;
};
</script>

<template>
  <alert-tip :list="alertTipList" />

  <el-table :data="dataArray" border :span-method="arraySpanMethod">
    <el-table-column prop="id" label="#" align="center" width="50" />
    <el-table-column prop="semester" label="学期" align="center" width="100" />
    <el-table-column prop="course" label="课程" />
    <el-table-column
      prop="postTime"
      label="发布时间"
      align="center"
      width="180"
    />
    <el-table-column prop="cover" label="封面" align="center" width="216">
      <template #default="{ row }">
        <img
          :src="`/resources/images/articles/${row.cover}`"
          width="190px"
          height="90px"
          alt="cover"
          @click="handlePreview(row.cover)"
          class="blog-cover"
        />
      </template>
    </el-table-column>
    <el-table-column prop="title" label="博客">
      <template #default="{ row }">
        <el-link :href="row.link" type="primary" target="_blank"
          >{{ row.title }}
        </el-link>
      </template>
    </el-table-column>
  </el-table>

  <el-image-viewer
    v-if="imagePreviewShow"
    :url-list="imagePreviewList"
    @close="handleClose"
  />
</template>

<style scoped lang="scss">
.blog-cover {
  cursor: zoom-in;
}
</style>
