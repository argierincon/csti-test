<template>
  <section class="main-sections flex flex-col justify-center">
    <div class="info">
      <div class="flex items-start gap-x-1 md:items-center">
        <Icon name="infoCircle" size="large" />
        <p>Página de reclutamiento en progreso.</p>
      </div>
      <p class="text-4xl">👩🏻‍💻</p>
    </div>
    <div class="info mt-8">
      <p>Por favor, vuelve mas tarde.</p>
      <p class="text-4xl">🤓</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import Icon from "../components/atoms/Icon.vue";
</script>

<style lang="postcss" scoped>
.info {
  @apply flex flex-col items-center justify-center gap-x-1 text-base;
  @apply md:flex-row;
}
</style>
