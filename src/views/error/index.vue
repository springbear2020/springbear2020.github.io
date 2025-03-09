<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleClick = () => {
  router.push("/");
};
</script>

<template>
  <el-empty
    description="页面被熊吃掉啦~"
    image="/resources/images/errors/404-desktop.png"
    :image-size="512"
  >
    <el-button round type="primary" icon="ArrowLeft" @click="handleClick"
      >返回主页
    </el-button>
  </el-empty>
</template>
