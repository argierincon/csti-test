<template>
  <button
    class="btn"
    :type="type"
    :class="{
      primary: typeBtn === 'primary',
      secondary: typeBtn !== 'primary',
      large: size === 'large',
      medium: size === 'medium',
      small: size === 'small',
    }"
    @click="onClick"
  >
    <Icon
      v-if="iconLeft"
      :name="iconLeft"
      :color="setIconColor(typeBtn)"
      size="xSmall"
    />
    <template v-if="loading">
      <div class="btn__spinner">
        <Spinner :color="typeBtn !== 'primary' ? 'black' : 'white'" />
      </div>
    </template>
    <template v-else>
      <slot />
    </template>
    <Icon
      v-if="iconRight"
      :name="iconRight"
      :color="setIconColor(typeBtn)"
      size="xSmall"
    />
  </button>
</template>

<script setup lang="ts">
import Spinner from "./Spinner.vue";
import Icon from "./Icon.vue";

interface Props {
  type?: string;
  typeBtn?: "primary" | "secondary";
  darkMode?: boolean;
  size?: "large" | "medium" | "small";
  loading?: boolean;
  onClick: Function;
  iconRight?: string;
  iconLeft?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  typeBtn: "primary",
  size: "large",
});

const setIconColor = (typeBtn: string) => {
  switch (typeBtn) {
    case "secondary":
      return "black";

    default:
      return "white";
  }
};
</script>

<style lang="postcss" scoped>
.btn {
  @apply w-full flex items-center justify-center gap-x-2 rounded-[10px] font-bold;
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
  @apply p-4 text-base;
}

.medium {
  @apply h-12 p-3 text-sm;
}

.small {
  @apply h-8 p-[6.5px] text-xs;
}
</style>
