<template>
  <section class="main-sections">
    <div class="home__header">
      <div>
        <h4 class="title">Empleados</h4>
        <p v-show="!isLoading" class="text-sm">Gestiona tus empleados</p>
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
      <Input
        v-model="search"
        placeholder="Buscar empleado"
        icon="search"
        :onClick="prueba"
        :isLoading="isLoadingData"
      />
      <Select
        @change="setRole"
        placeholder="Nombre de cargo"
        :options="options"
      />
    </div>
    <TableSkeleton v-if="isLoading" />
    <Table :tableData="data" v-else />
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

import Button from "../components/Button.vue";
import Input from "../components/Input.vue";
import Table from "../components/Table.vue";
import Select from "../components/Select.vue";
import Skeleton from "../components/Skeleton.vue";
import TableSkeleton from "../components/TableSkeleton.vue";

import { useGlobalStore } from "../store/index";
import { IEmployee } from "../store/interfaces/employee.interface";

const data = ref<IEmployee[]>([]);

const isLoading = ref<boolean>(false);
const isLoadingData = ref<boolean>(false);
const search = ref("");
const role = ref("");

const globalState = useGlobalStore();

const getEmployeeData = async () => {
  isLoading.value = true;

  await globalState.getEmployees();
  data.value = globalState?.employees;

  isLoading.value = false;
};

onMounted(() => {
  getEmployeeData();
});

// watch(data, (newVal: IEmployee) => {
//   if (!newVal) {
//     getEmployeeData();
//   }
// });

const setRole = (newRole: string) => {
  role.value = newRole;
};

// ! TODO recibir la lista de los cargos
const options = [
  { label: "Team Product", value: "Team Product" },
  { label: "Team Creative", value: "Team Creative" },
  { label: "Team Design", value: "Team Design" },
];

const prueba = () => {
  isLoadingData.value = true;
  setTimeout(function () {
    isLoadingData.value = false;
  }, 500);
  console.log("prueba");
};
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
