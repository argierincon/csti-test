<template>
  <div class="nav__user">
    <div :style="{ background: color }" class="user__avatar">
      <span>{{ initials }}</span>
    </div>
    <p>{{ userName }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

interface Props {
  userName: string;
}

const { userName } = withDefaults(defineProps<Props>(), {
  userName: "",
});

const initials = ref<string>("");
const getInitials = (fullName: string) => {
  return fullName
    .split(" ")
    .map((i) => i[0])
    .join("")
    .slice(0, 2);
};
initials.value = getInitials(userName);

const color = ref<string>("");

const getRandomColor = () => {
  const h = Math.floor(Math.random() * (360 - 0)) + 0;
  const s = Math.floor(Math.random() * (100 - 0)) + 0;
  return `hsl(${h},${s}%,50%)`;
};

color.value = getRandomColor();
</script>

<style lang="postcss" scoped>
.nav__user {
  @apply flex items-center text-xs font-bold;
}

.user__avatar {
  @apply h-8 w-8 flex items-center justify-center rounded-full text-white text-sm font-bold;
}
</style>
