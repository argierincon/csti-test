<template>
  <div class="field">
    <label class="label"
      >{{ label }}
      <span v-show="hasRequiredLabel" class="text-error-500">*</span>
    </label>
    <div class="box-select" :class="selectClass">
      <select
        :class="{
          'is-empty': isEmpty,
        }"
        v-model="localModel"
        class="select"
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
  toRefs,
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
  hasEmptyValue?: boolean;
  required?: boolean;
  options: IOption[];
  iconChevronUp?: boolean;
  selected?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  placeholder: "Placeholder",
  size: "large",
  selected: "",
  hasEmptyValue: false,
});

const {
  modelValue,
  placeholder,
  size,
  selected,
  iconChevronUp,
  hasEmptyValue,
} = toRefs(props);

const localModel = ref<string | number>(selected.value);
const emit = defineEmits(["change"]);
watch(localModel, () => {
  emit("change", localModel.value);
});

// STYLES

const isEmpty = ref<boolean>(false);

if (hasEmptyValue.value) {
  isEmpty.value = selected.value === "";
}

const selectClass = computed(() => ({
  large: size.value === "large",
  medium: size.value === "medium",
  small: size.value === "small",
  "chevron-down": !iconChevronUp.value,
  "chevron-up": iconChevronUp.value,
}));
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
      @apply h-12 py-[14px] pl-[20px] rounded-[10px] text-sm;
      @apply lg:h-14;
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
    @apply text-[#b5b5b5];
    /* color: #b5b5b5; */
  }
}
</style>
