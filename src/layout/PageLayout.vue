<script setup>
import PageHeader from "@/layout/PageHeader.vue";
import PageBody from "@/layout/PageBody.vue";
import { useDataStore } from "@/pinia/index.js";

useDataStore();
</script>

<template>
  <page-header />
  <page-body />
</template>
