<script setup>
import PageLayout from "@/layout/PageLayout.vue";
import MobileLayout from "@/layout/MobileLayout.vue";
import { isMobile } from "@/config.js";

const currentLayout = isMobile ? MobileLayout : PageLayout;
</script>

<template>
  <component :is="currentLayout" />
</template>
