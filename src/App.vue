<template>
  <component :is="layout">
    <transition name="fade-home" mode="out-in">
      <router-view />
    </transition>
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const defaultLayout = "default";

const layout = computed(() => (route.meta.layout || defaultLayout) + "-layout");
</script>

<style lang="postcss" scoped>
.fade-home-enter-from,
.fade-home-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.fade-home-enter-active,
.fade-home-enter-to {
  transition: all 0.3s ease-out;
}
</style>
