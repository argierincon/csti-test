<template>
  <section class="sidebar-component">
    <CulqiLogo fill="black" class="mx-auto" />
    <ul class="options-list">
      <router-link v-for="item in sidebarItem" :key="item.label" :to="item.url">
        <li class="sidebar__item">
          <Icon :name="item.icon" :color="activePage(item)" />
          {{ item.label }}
        </li>
      </router-link>
    </ul>
    <div>
      <Button :onClick="logout" typeBtn="secondary" size="medium">
        Salir
      </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import CulqiLogo from "../components/CulqiLogo.vue";
import Button from "./Button.vue";
import Icon from "../components/Icon.vue";

const router = useRouter();

const logout = () => {
  router.push("/login");
};

interface IItem {
  icon: string;
  label: string;
  url: string;
}

const sidebarItem: IItem[] = [
  { icon: "users", label: "Empleados", url: "/employees" },
  { icon: "briefcase", label: "Reclutamiento", url: "/recruitment" },
];

const route = useRoute();
const activePage = (item: IItem) => {
  return item.url === route.path ? "green" : "grey";
};
</script>

<style lang="postcss" scoped>
.sidebar-component {
  @apply h-full py-6 px-8 grid gap-6 grid-rows-[40px_1fr_48px];
  @apply border-r border-greyscale-300;
}

.sidebar__item {
  @apply py-4 flex gap-3 cursor-pointer text-sm font-bold;
}

.router-link-active .sidebar__item {
  @apply text-primary-300;
}
</style>
