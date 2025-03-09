<script setup>
import BookCardItem from "@/views/weread/components/BookCardItem.vue";

defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="category-box" v-for="category in list">
    <h3>{{ category.title }}</h3>
    <div class="card-list-box">
      <book-card-item v-for="item in category.list" :cardData="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-box {
  border-radius: 4px;

  .card-list-box {
    display: flex;
    flex-wrap: wrap;
  }
}

.category-box:last-child {
  margin-bottom: 0;
}
</style>
