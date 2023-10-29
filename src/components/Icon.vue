<template>
  <component :is="name" />
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>();
</script>
