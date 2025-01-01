<script setup>
import { computed } from "vue";

const props = defineProps({
  cardData: {
    type: Object,
    required: true,
  },
});

const dynamicStyle = computed(() => {
  return props.cardData.flag
    ? {
        pointerEvents: "none",
      }
    : {};
});
const handleClick = (url) => {
  window.open(url, "_blank");
};
</script>

<template>
  <el-card
    shadow="hover"
    class="card-box"
    :style="dynamicStyle"
    :class="cardData.flag ? 'card-badge' : ''"
  >
    <template #header>
      <div class="card-header" :title="cardData.name">
        {{ cardData.title }}
      </div>
    </template>

    <template #default>
      <el-row class="card-body">
        <el-col :span="6" class="icon-box">
          <img
            alt="icon"
            height="64"
            class="icon"
            :src="cardData.icon"
            @click="handleClick(cardData.link)"
          />
        </el-col>
        <el-col :span="18">
          <div v-if="cardData.firstLine && cardData.secondLine">
            <div
              class="sub-line-text text-ellipsis"
              :title="cardData.firstLine"
            >
              {{ cardData.firstLine }}
            </div>
            <div
              class="sub-line-text text-ellipsis"
              :title="cardData.secondLine"
            >
              {{ cardData.secondLine }}
            </div>
          </div>
          <div class="line">
            {{ cardData.line }}
          </div>
        </el-col>
      </el-row>
    </template>
  </el-card>
</template>

<style scoped lang="scss">
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.card-box {
  width: 360px;
  box-sizing: border-box;
  position: relative;

  .card-header {
    font-weight: bold;
  }

  .card-body {
    height: 64px;

    .icon-box {
      height: 64px;
      line-height: 64px;

      .icon {
        cursor: pointer;
        border-radius: 4px;
      }

      .icon:hover {
        animation: rotate 1s linear;
      }
    }

    .sub-line-text {
      height: 32px;
      line-height: 32px;
    }

    .line {
      height: 64px;
      vertical-align: center;
    }
  }
}
</style>
