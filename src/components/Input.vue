<template>
  <div class="field">
    <label v-show="label" class="label"
      >{{ label }}
      <span v-show="required" class="text-error-500">*</span>
    </label>
    <div class="input" :class="{ 'pr-5 ': isLoading }">
      <input
        v-bind="$attrs"
        v-model="localModel"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :pattern="pattern"
        @input="$emit('update:localModel', $event.target.value)"
      />
      <button
        v-if="icon && !isLoading"
        class="py-3 px-5 cursor-default"
        :class="{ 'icon-btn': onClick }"
        @click="onClick"
      >
        <Icon :name="icon" size="small" />
      </button>
      <Spinner color="black" v-else-if="isLoading" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "../components/Icon.vue";
import Spinner from "../components/Spinner.vue";

interface Props {
  modelValue: string;
  type?: string;
  label?: string;
  icon?: string;
  onClick?: Function;
  isLoading?: boolean;
  hasRequiredLabel?: boolean;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  type: "text",
  placeholder: "Placeholder",
  // onClick: () => {
  //   console.log("holi");
  // },
  // isLoading: true,
});
</script>

<style lang="postcss" scoped>
.field {
  @apply flex flex-col;
}

.label {
  @apply mb-2.5 text-sm font-medium;
}

.input {
  @apply flex items-center gap-[10px];
  @apply rounded-[10px] border border-greyscale-300 outline-none;
  @apply text-sm text-greyscale-900;
  transition: all 0.3s ease;

  & input {
    @apply w-full py-4 px-5 outline-none bg-transparent;
  }

  &:active,
  &:hover,
  &:focus,
  &:focus-within {
    @apply !border-success-500;
  }

  &:disabled {
    @apply bg-greyscale-50 !border-greyscale-500;
  }
}

/* Chrome, Safari, Edge, Opera */
.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.input[type="number"] {
  -moz-appearance: textfield;
}

.icon-btn {
  @apply h-full flex items-center cursor-pointer rounded-[10px];
  transition: all 0.4s ease-out;

  &:hover {
    @apply bg-greyscale-100;
  }
}
</style>
