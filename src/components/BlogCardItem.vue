<script setup>
import { ref } from "vue";

defineProps({
  cardData: {
    type: Object,
    required: true,
  },
});

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
  <el-card
    shadow="hover"
    class="card-box"
    :class="cardData.flag ? 'card-badge' : ''"
  >
    <template #header>
      <!-- FIXME text overflow -->
      <div class="text-ellipsis" :title="cardData.title">
        <el-link :href="cardData.link" type="primary" target="_blank"
          >{{ cardData.title }}
        </el-link>
      </div>
    </template>

    <template #default>
      <div class="card-body">
        <img
          alt="cover"
          class="cover"
          width="190px"
          height="90px"
          :src="`/resources/images/articles/${cardData.cover}`"
          @click="handlePreview(cardData.cover)"
        />
      </div>
    </template>

    <template #footer>
      <div class="card-footer">{{ cardData.postTime }}</div>
    </template>
  </el-card>

  <el-image-viewer
    v-if="imagePreviewShow"
    :url-list="imagePreviewList"
    @close="handleClose"
  />
</template>

<style scoped lang="scss">
.card-box {
  width: 270px;
  box-sizing: border-box;
  position: relative;

  .card-body {
    .cover {
      cursor: zoom-in;
    }
  }

  .card-footer {
    text-align: center;
    font-size: 14px;
  }
}

:deep(.el-card__header) {
  text-align: center;
}

:deep(.el-card__body) {
  padding: 2px 0;
  font-size: 0;
  text-align: center;
}
</style>
