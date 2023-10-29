<template>
  <button :type="type" class="btn" @click="onClick">
    <slot name="icon-left"></slot>
    <template v-if="loading">
      <div class="btn__spinner">
        <Spinner />
      </div>
    </template>
    <template v-else>
      <slot />
    </template>
    <slot name="icon-right"></slot>
  </button>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";
import Spinner from "../components/Spinner.vue";

interface Props {
  type: "button" | "reset" | "submit";
  loading: boolean;
  onClick: (payload?: MouseEvent) => void;
  iconRight: string;
  iconLeft: string;
}

const props = defineProps<Props>();
</script>

<style lang="postcss" scoped>
.btn {
  @apply py-4 w-full mt-8 border-0 bg-greyscale-900;
  @apply text-white text-base;
}

.btn__spinner {
  @apply flex items-center justify-center;
}
</style>
