<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleClick = () => {
  router.push("/");
};
</script>

<template>
  <van-empty
    description="页面被熊吃掉啦~"
    image="/resources/images/errors/404-mobile.png"
    :image-size="256"
  >
    <van-button round type="primary" icon="arrow-left" @click="handleClick"
      >返回主页
    </van-button>
  </van-empty>
</template>
