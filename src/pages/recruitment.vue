<template>
  <section class="main-sections">
    <div class="info">
      <Icon name="infoCircle" color="blue" size="large" />
      <p>Recruitment page in progress</p>
      <p class="text-4xl">👩🏻‍💻</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import Icon from "../components/Icon.vue";
</script>

<style lang="postcss" scoped>
.info {
  @apply flex items-center gap-x-1 text-base text-info-500;
}
</style>
