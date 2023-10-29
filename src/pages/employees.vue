<template>
  <section class="main-sections">
    <div class="home__header">
      <div>
        <h4 class="title">Empleados</h4>
        <p v-show="!isLoading">Gestiona tus empleados</p>
      </div>
      <Skeleton v-if="isLoading" class="h-9 lg:!w-60" />
      <div v-else class="header__buttons">
        <Button typeBtn="secondary" iconLeft="download">Descargar</Button>
        <Button iconLeft="plus">Nuevo</Button>
      </div>
    </div>

    <div v-if="isLoading" class="home__actions">
      <Skeleton v-if="isLoading" class="h-9" />
      <Skeleton v-if="isLoading" class="h-9" />
    </div>

    <div v-else class="home__actions">
      <Input placeholder="Buscar empleado" icon="search" />
      <Select placeholder="Nombre de cargo" :options="options" />
    </div>
    <TableSkeleton v-if="isLoading" />
    <Table v-else />
  </section>
</template>

<script setup lang="ts">
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";
import Table from "../components/Table.vue";
import Select from "../components/Select.vue";
import Skeleton from "../components/Skeleton.vue";
import TableSkeleton from "../components/TableSkeleton.vue";
import { ref } from "vue";

const isLoading = ref<boolean>(false);

// ! TODO recibir la lista de los cargos
const options = [
  { label: "Team Product", value: 1 },
  { label: "Team Creative", value: 2 },
  { label: "Team Design", value: 3 },
];
</script>

<style lang="postcss" scoped>
.home__header {
  @apply flex flex-col gap-5;
  @apply lg:flex-row lg:items-center lg:justify-between;
}

.header__buttons {
  @apply flex flex-col gap-5 lg:flex-row lg:items-center;
}

.home__actions {
  @apply my-6 flex flex-col gap-4 lg:grid lg:grid-cols-[0.7fr_0.3fr];
}
</style>
