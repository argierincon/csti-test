<template>
  <div class="field">
    <label class="label text-sm font-medium"
      >{{ label }}
      <span v-show="hasRequiredLabel" class="text-danger-500">*</span>
    </label>
    <input
      class="input"
      v-bind="$attrs"
      v-model="localModel"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :pattern="pattern"
      @input="$emit('update:localModel', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  modelValue:        string;
  type:              string;
  label:             string;
  hasRequiredLabel:  boolean;
  placeholder:       string;
  required:          boolean;
  pattern:           string;
  disabled:          boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  type: "text",
  label: "Label",
  hasRequiredLabel: false,
  placeholder: "Placeholder",
  required: false,
  pattern: "",
  disabled: false,
});
</script>

<style lang="postcss" scoped>
.field {
  @apply flex flex-col [&:not(:first-child)]:mt-6;
}

.input {
  @apply mt-2.5 py-4 px-5;
  @apply rounded-[10px] border border-greyscale-300 outline-none;
  @apply text-sm text-greyscale-900;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    @apply !border-success-500;
  }

  &:disabled {
    @apply bg-greyscale-50 !border-greyscale-500;
  }
}
</style>
