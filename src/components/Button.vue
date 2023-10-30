<template>
  <button class="btn" :type="type" :class="btnClass" @click="onClick">
    <Icon
      v-if="iconLeft"
      :name="iconLeft"
      :color="setIconColor(typeBtn)"
      size="small"
    />
    <p>
      <template v-if="loading">
        <div class="btn__spinner">
          <Spinner :color="spinnerColor" />
        </div>
      </template>
      <template v-else>
        <slot />
      </template>
    </p>
    <Icon
      v-if="iconRight"
      :name="iconRight"
      :color="setIconColor(typeBtn)"
      size="small"
    />
  </button>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, toRefs, computed } from "vue";

import Spinner from "./Spinner.vue";
import Icon from "./Icon.vue";

interface Props {
  type?: "button" | "reset" | "submit";
  typeBtn?: "primary" | "secondary";
  darkMode?: boolean;
  size?: "large" | "medium" | "small";
  loading?: boolean;
  onClick?: (payload: MouseEvent) => void;
  iconRight?: string;
  iconLeft?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  typeBtn: "primary",
  size: "large",
});

const { type, typeBtn, size } = toRefs(props);

const setIconColor = (typeBtn: string) => {
  switch (typeBtn) {
    case "secondary":
      return "black";

    default:
      return "white";
  }
};

// STYLES
const spinnerColor = computed(() =>
  typeBtn.value !== "primary" ? "black" : "white"
);

const btnClass = computed(() => ({
  primary: typeBtn.value === "primary",
  secondary: typeBtn.value !== "primary",
  large: size.value === "large",
  medium: size.value === "medium",
  small: size.value === "small",
}));
</script>

<style lang="postcss" scoped>
.btn {
  @apply w-full flex items-center justify-center gap-x-2 rounded-[10px] font-bold;
  transition: all 0.3s ease-out;

  &:hover,
  &:active {
    transform: scale(1.02);
    transition: all 0.3s ease-out;
  }

  &:focus {
    @apply outline-none;
  }
}

.btn__spinner {
  @apply flex items-center justify-center;
}

.primary {
  @apply border-0 bg-greyscale-900 text-white;
}

.secondary {
  @apply border border-greyscale-900 bg-white text-greyscale-900;
}

.large {
  @apply h-12 p-3 lg:h-14 lg:p-4 text-base;
}

.medium {
  @apply h-12 p-3 text-sm;
}

.small {
  @apply h-8 p-[6.5px] text-xs;
}
</style>
