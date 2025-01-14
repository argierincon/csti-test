<template>
  <div class="field">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.field {
  @apply [&:not(:last-child)]:mb-6;
}
</style>
