<template>
  <section class="main-sections flex flex-col justify-center">
    <div class="info">
      <Icon name="infoCircle" color="blue" size="large" />
      <p>Página de reclutamiento en progreso.</p>
      <p class="text-4xl">👩🏻‍💻</p>
    </div>
    <div class="info">
      <p>Vuelve mas tarde.</p>
      <p class="text-4xl">🤓</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import Icon from "../components/Icon.vue";
</script>

<style lang="postcss" scoped>
.info {
  @apply flex items-center justify-center gap-x-1 text-base text-info-500;
}
</style>
