<script setup>
import CardItem from "@/components/CardItem.vue";

defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="category-box" v-for="category in list">
    <h2>{{ category.title }}</h2>
    <div class="card-list-box">
      <card-item v-for="item in category.list" :cardData="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-box {
  border-radius: 4px;
  background: #ffffff;
  margin-bottom: 16px;

  h2 {
    font-size: 32px;
    margin: 0;
    padding: 16px;
  }

  .card-list-box {
    display: flex;
    flex-wrap: wrap;
  }
}

.category-box:last-child {
  margin-bottom: 0;
}
</style>
