<template>
  <div class="skeleton"></div>
</template>

<style lang="postcss" scoped>
.skeleton {
  @apply w-full rounded-[100px];
  background: linear-gradient(
    90deg,
    #f1f2f4 25%,
    hsla(0, 0%, 100%, 0.5) 50%,
    #f1f2f4 75%
  );
  background-size: 400% 100%;
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}
</style>
