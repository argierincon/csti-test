<template>
  <section class="main-sections">
    <div class="home__header">
      <div>
        <h4 class="title">Empleados</h4>
        <p v-show="!isLoading" class="text-sm">Gestiona tus empleados</p>
      </div>
      <Skeleton v-if="isLoading" class="h-9 lg:!w-60" />
      <div v-else class="header__buttons">
        <Button typeBtn="secondary" iconLeft="download" :onClick="downloadData"
          >Descargar</Button
        >
        <Button iconLeft="plus">Nuevo</Button>
      </div>
    </div>

    <div v-if="isLoading" class="home__actions">
      <Skeleton v-if="isLoading" class="h-9" />
      <Skeleton v-if="isLoading" class="h-9" />
    </div>

    <div v-else class="home__actions">
      <Input
        v-model="searchBox"
        placeholder="Buscar empleado"
        icon="search"
        :onInput="onSearch"
        :isLoading="isLoadingData"
        :clearInput="clearSearch"
      />
      <Select
        @change="onSelect"
        :selected="role"
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
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { exportCSVFile } from "../utils/downloadCSV";

const data = ref<IEmployee[]>([]);

const isLoading = ref<boolean>(false);
const isLoadingData = ref<boolean>(false);
const role = ref<string>("");

const globalState = useGlobalStore();
const router = useRouter();

const logout = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
  router.push("/login");
};

const defaultOpt = [{ label: "Todos", value: ".*" }];

const options = ref([]);
const getEmployeeData = async () => {
  role.value = "";
  try {
    isLoading.value = true;

    await globalState.getEmployees();
    data.value = globalState?.employees;

    options.value = globalState?.employees
      ?.map((ele) => ({
        label: ele.cargo,
        value: ele.cargo,
      }))
      .concat(defaultOpt);
  } catch (error) {
    console.error(error);
    logout();
  } finally {
    isLoading.value = false;
  }
};

const { tablePage, tableLimit } = storeToRefs(globalState);
watch(tableLimit, () => {
  getEmployeeData();
});
watch(tablePage, () => {
  getEmployeeData();
});

onMounted(() => {
  getEmployeeData();
});

const searchBox = ref<string>("");
const onSearch = () => {
  data.value = globalState?.employees?.filter((ele) => {
    return (
      RegExp(searchBox.value.toLowerCase()).test(ele.nombre.toLowerCase()) ||
      RegExp(searchBox.value.toLowerCase()).test(ele.departamento.toLowerCase())
    );
  });
};

const onSelect = (option: string) => {
  role.value = option;
  data.value = globalState?.employees?.filter((ele) => {
    return RegExp(option.toLowerCase()).test(ele.cargo.toLowerCase());
  });
};

const clearSearch = () => {
  searchBox.value = "";
  data.value = globalState?.employees;
};

// Download data

const downloadData = () => {
  exportCSVFile(globalState?.employees)
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
