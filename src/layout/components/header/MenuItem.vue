<script setup>
defineProps({
  menu: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <el-sub-menu v-if="menu.children" :index="menu.path">
    <template #title>
      {{ menu.meta.title }}
    </template>

    <!-- 多级嵌套菜单渲染 -->
    <menu-item
      v-if="menu.children"
      v-for="subMenu in menu.children"
      :menu="subMenu"
    />
  </el-sub-menu>

  <el-menu-item v-else :index="menu.path">
    {{ menu.meta.title }}
  </el-menu-item>
</template>

<style scoped lang="scss"></style>
