<template>
  <component :is="name" />
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{ name: string }>();
</script>
