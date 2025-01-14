<template>
  <component :is="name" />
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface IProps {
  name: string;
}

defineProps<IProps>();
</script>
