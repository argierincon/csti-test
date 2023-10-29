<template>
  <div class="container-view">
    <nav class="nav">
      <Avatar :userName="user?.nombre" />
    </nav>
    <aside class="sidebar">
      <Sidebar />
    </aside>
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import Avatar from "../components/Avatar.vue";
import { useGlobalStore } from "../store/index";

const globalStore = useGlobalStore();
const token = globalStore.token;
let user = globalStore.user;

if (!user && !token) {
  if (localStorage.getItem("user")) {
    const localUser = JSON.parse(localStorage.getItem("user"));
    const localToken = localStorage.getItem("jwt");
    user = localUser;
    globalStore.setAuthData({
      user: localUser,
      token: localToken,
    });
  }
}
</script>

<style lang="postcss" scoped>
.container-view {
  @apply h-[100vh];
  @apply md:grid md:grid-rows-[96px_1fr] md:grid-cols-[220px_1fr];
  @apply lg:grid-cols-[280px_1fr];
  grid-template-areas:
    "sidebar nav"
    "sidebar main";
}

.nav {
  @apply h-24 p-8 flex justify-end text-right border-b border-greyscale-300;
  grid-area: nav;
}

.nav__user {
  @apply flex gap-2;
}

.sidebar {
  @apply hidden;
  @apply md:block;
  grid-area: sidebar;
}

.main {
  @apply h-full py-8 px-6 bg-greyscale-100 overflow-y-scroll;
  grid-area: main;
}
</style>
