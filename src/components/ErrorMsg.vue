<template>
  <div class="error-msg">
    <Icon :name="icon" color="red" size="small" />
    <p>{{ msg }}</p>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";

import Icon from "./Icon.vue";

interface Props {
  msg: string;
  icon: string;
}

const props = withDefaults(defineProps<Props>(), {
  msg: "Correo o contraseña incorrectos",
  icon: "infoCircle",
});
</script>

<style lang="postcss" scoped>
.error-msg {
  @apply flex items-center gap-x-1 text-xs text-error-500;
}
</style>
