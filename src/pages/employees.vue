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
    <Table
      :tableData="data"
      :limitPerPage="limitPerPage"
      :currentPage="currentPage"
      :tableTotal="globalState.dataEmployees.total"
      :tableHeaders="tableHeaders"
      @updateLimitPerPage="handleUpdateLimit"
      @updateCurrentPage="handleUpdatePage"
      v-else
    />
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

import Button from "../components/molecules/Button.vue";
import Input from "../components/molecules/Input.vue";
import Table from "../components/organisms/Table.vue";
import Select from "../components/atoms/Select.vue";
import Skeleton from "../components/atoms/Skeleton.vue";
import TableSkeleton from "../components/molecules/TableSkeleton.vue";

import { useGlobalStore } from "../store/index";
import { IEmployee } from "../store/interfaces/employee.interface";
import { useRouter } from "vue-router";
import { exportCSVFile } from "../utils/downloadCSV";

const globalState = useGlobalStore();
const router = useRouter();

const data = ref<IEmployee[]>([]);

const role = ref<string>("");
const options = ref([]);
const isLoading = ref<boolean>(true);
const isLoadingData = ref<boolean>(false);

const defaultOpt = [{ label: "Todos", value: ".*" }];

const limitPerPage = ref<number>(10);
const currentPage = ref<number>(1);

const getEmployeeData = async () => {
  role.value = "";
  try {
    isLoading.value = true;
    await globalState.getEmployees(limitPerPage.value, currentPage.value);
    data.value = globalState.dataEmployees.data;
    options.value = data.value
      ?.map((ele: IEmployee) => ({
        label: ele.role,
        value: ele.role,
      }))
      .concat(defaultOpt);
  } catch (error) {
    console.error(error);
    logout();
  } finally {
    isLoading.value = false;
  }
};

const tableHeaders = [
  "Nombre",
  "Correo",
  "Cargo",
  "Departamento",
  "Oficina",
  "Cuenta",
  "Acciones",
];

const handleUpdateLimit = (limit: number) => {
  limitPerPage.value = limit;
};

const handleUpdatePage = (page: number) => {
  currentPage.value = page;
};

watch(limitPerPage, () => {
  getEmployeeData();
});

watch(currentPage, () => {
  getEmployeeData();
});

const searchBox = ref<string>("");
const onSearch = () => {
  data.value = globalState.dataEmployees.data.filter((ele: IEmployee) => {
    return (
      RegExp(searchBox.value.toLowerCase()).test(ele.name.toLowerCase()) ||
      RegExp(searchBox.value.toLowerCase()).test(ele.department.toLowerCase())
    );
  });
};

const onSelect = (option: string) => {
  role.value = option;
  data.value = globalState.dataEmployees.data.filter((ele: IEmployee) => {
    return RegExp(option.toLowerCase()).test(ele.role.toLowerCase());
  });
};

const clearSearch = () => {
  searchBox.value = "";
  data.value = globalState.dataEmployees.data;
};

// Download data
const downloadData = () => {
  exportCSVFile(data.value);
};

const logout = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
  router.push("/login");
};

onMounted(() => {
  getEmployeeData();
});
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
