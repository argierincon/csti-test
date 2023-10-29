<template>
  <div class="field">
    <label class="label"
      >{{ label }}
      <span v-show="hasRequiredLabel" class="text-error-500">*</span>
    </label>
    <div
      class="box-select"
      :class="{
        large: size === 'large',
        medium: size === 'medium',
        small: size === 'small',
        'chevron-down': !iconChevronUp,
        'chevron-up': iconChevronUp,
      }"
    >
      <select
        v-model="localModel"
        class="select"
        :class="{
          'is-empty': isEmpty,
        }"
        :placeholder="placeholder"
        :required="required"
      >
        <option v-if="localModel === ''" value="" disabled hidden>
          {{ placeholder }}
        </option>
        <option v-for="opt in options" :key="opt.label" :value="opt.value">
          {{ opt.label }}
        </option>
        <slot />
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  defineEmits,
  defineProps,
  computed,
  ref,
  watch,
  withDefaults,
} from "vue";
import Icon from "../components/Icon.vue";

interface IOption {
  label: string;
  value: string | number;
}

interface Props {
  modelValue: string;
  label?: string;
  size?: "large" | "medium" | "small";
  hasRequiredLabel?: boolean;
  placeholder?: string;
  required?: boolean;
  options: IOption[];
  iconChevronUp?: boolean;
}

const { modelValue, placeholder } = withDefaults(defineProps<Props>(), {
  modelValue: "",
  placeholder: "Placeholder",
  size: "large",
  options: () => [
    {
      label: "label1",
      value: "value1",
    },
    {
      label: "label2",
      value: "value2",
    },
    {
      label: "label3",
      value: "value3",
    },
    {
      label: "label4",
      value: "value4",
    },
  ],
});

const localModel = ref<string>("");
const emit = defineEmits(["change"]);
watch(localModel, () => {
  emit("change", localModel);
});

const isEmpty = computed(() => modelValue === "");
</script>

<style lang="postcss" scoped>
.label {
  @apply mb-2.5 text-sm font-medium;
}

.chevron-down {
  &::after {
    content: url("/static/chevron-down.svg");
  }
}

.chevron-up {
  &::after {
    content: url("/static/chevron-up.svg");
  }
}

.box-select {
  @apply w-full relative;

  &::after {
    @apply absolute w-5 h-5 block;
    @apply z-10 origin-center pointer-events-none;
  }

  &.large,
  &.medium {
    &::after {
      @apply top-4 right-5;
    }
  }

  &.small {
    &::after {
      @apply top-[5px] right-3;
    }
  }

  &.large {
    .select {
      @apply py-[14px] pl-[20px] rounded-[10px] text-base;
    }
  }

  &.medium {
    .select {
      @apply h-12 py-3 pl-[20px] rounded-[10px] text-sm;
    }
  }

  &.small {
    .select {
      @apply h-8 py-[6.5px] pl-[10px]  rounded-lg text-xs;
    }
  }
}

.select {
  @apply w-full pr-10 relative bg-transparent;
  @apply border border-greyscale-300 cursor-pointer outline-none appearance-none;
  @apply text-sm text-greyscale-900;
  transition: all 0.3s ease-out;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */

  &:active,
  &:hover,
  &:focus,
  &:focus-within {
    @apply !border-success-500;
    transition: all 0.3s ease-out;
  }

  &::-ms-expand {
    @apply hidden;
  }

  &.is-empty {
    color: #b5b5b5;
  }
}
</style>
