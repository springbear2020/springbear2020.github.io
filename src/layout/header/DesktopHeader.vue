<script setup>
import { useRoute, useRouter } from "vue-router";
import MenuTree from "@/layout/header/components/MenuTree.vue";
import IconLink from "@/layout/header/components/IconLink.vue";

defineProps({
  menus: {
    type: Array,
    required: true,
  },
});
const emits = defineEmits(["select"]);

const route = useRoute();
const router = useRouter();

const handleSelect = (path) => {
  emits("select", path);
};
const handleClick = () => {
  router.push("/");
};
</script>

<template>
  <div class="header-box">
    <div class="menu-box">
      <img
        src="/resources/images/logo.png"
        alt="logo"
        class="logo-image"
        @click="handleClick"
      />

      <el-menu
        mode="horizontal"
        router
        :ellipsis="false"
        :default-active="route.path"
        @select="handleSelect"
      >
        <menu-tree v-for="menu in menus" :menu="menu" />
      </el-menu>
    </div>

    <icon-link :show-search="true" />
  </div>
</template>

<style scoped lang="scss">
.header-box {
  .menu-box {
    display: flex;
    align-items: center;
  }
}
</style>
