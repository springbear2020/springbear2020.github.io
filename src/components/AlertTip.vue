<script setup>
defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="alert-tip">
    <ul>
      <li class="alert-item" v-for="line in list">{{ line }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/variables";

.alert-tip {
  background-color: #ffffff;
  border-radius: 4px;
  padding: 16px 0;
  border: 1px solid variables.$theme-color;

  .alert-item {
    color: variables.$theme-color;
    line-height: 24px;
  }
}
</style>
