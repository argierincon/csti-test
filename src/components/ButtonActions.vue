<template>
  <button
    class="btn-actions"
    type="button"
    :class="typeBtn"
    @click="onClick"
    :disabled="disabled"
  >
    <Icon :name="icon" :color="setIconColor(typeBtn, disabled)" size="xSmall" />
  </button>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import Icon from "./Icon.vue";

interface Props {
  typeBtn?: "default" | "success" | "info" | "error";
  disabled?: boolean;
  icon: string;
  onClick?: (payload: MouseEvent) => void;
}

const props = withDefaults(defineProps<Props>(), {
  typeBtn: "default",
  icon: "plus",
});

const setIconColor = (typeBtn: string, disabled: boolean) => {
  if (disabled) {
    return "grey";
  } else if (typeBtn !== "default") {
    return "white";
  } else {
    return "black";
  }
};
</script>

<style lang="postcss" scoped>
.btn-actions {
  @apply w-[30px] h-[30px] p-[7px] flex items-center justify-center rounded-lg;
  transition: all 0.3s ease-out;

  &:hover {
    opacity: 0.75;
    transition: all 0.3s ease-out;
  }
}

.default {
  @apply border border-greyscale-200;
}

.success {
  @apply bg-primary-500;
}

.info {
  @apply bg-info-500;
}

.error {
  @apply bg-error-500;
}
</style>
