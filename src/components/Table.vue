<template>
  <section class="responsive-table">
    <div class="table-wrapper has-mobile-cards">
      <table class="table">
        <thead>
          <tr>
            <th
              v-for="(item, idx) in tableHeaders"
              :key="item"
              :class="{
                'rounded-l-xl': idx === 0,
                'rounded-r-xl': idx === tableHeaders.length - 1,
              }"
            >
              <span> {{ item }} </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in tableData" :key="employee.id">
            <td
              v-for="(value, name) in employee"
              :key="name"
              :data-label="name"
            >
              <div>
                <p>{{ value }}</p>
                <p
                  v-if="name === 'nombre'"
                  class="mini-label text text-greyscale-500 text-xs"
                >
                  {{ employee.correo }}
                </p>
              </div>
            </td>
            <td data-label="Acciones">
              <div class="flex gap-[10px]">
                <slot />
                <ButtonActions typeBtn="success" icon="eye" />
                <ButtonActions typeBtn="info" icon="edit" />
                <ButtonActions typeBtn="error" icon="trash" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="responsive-table__pagination mt-6 flex flex-col gap-y-6 lg:flex-row items-center justify-between"
    >
      <div class="pagination-buttons flex items-center gap-6">
        <ButtonActions icon="chevronLeft" disabled />
        <div class="button-numbers flex items-center">
          <button
            class="page-active bg-greyscale-100 h-8 w-8 text-xs rounded-[10px]"
          >
            1
          </button>
          <button class="h-8 w-8 text-sm rounded-[10px]">2</button>
          <button class="h-8 w-8 text-sm rounded-[10px]">3</button>
          <button class="h-8 w-8 text-sm rounded-[10px]" disabled>...</button>
          <button class="h-8 w-8 text-sm rounded-[10px]">10</button>
        </div>
        <ButtonActions icon="chevronRight" />
      </div>
      <div
        class="responsivetable__totals flex flex-col gap-4 lg:flex-row lg:items-center"
      >
        <p class="text-greyscale-600 text-sm">
          Mostrando 1 a 8 de 50 registros
        </p>
        <Select
          iconChevronUp
          size="small"
          placeholder="Mostrar 10"
          :options="optPagination"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IEmployee } from "../store/interfaces/employee.interface";

import ButtonActions from "../components/ButtonActions.vue";
import Select from "../components/Select.vue";

const tableHeaders = [
  "Nombre",
  "Nombre cargo",
  "Departamento",
  "Oficina",
  "Cuenta",
  "Acciones",
];

const tableData: IEmployee[] = [
  {
    id: 2,
    nombre: "Pristia Candra",
    correo: "pristia@culqi.com",
    cargo: "UI UX Designer",
    departamento: "Team Product",
    oficina: "Culqi Office",
    estadoCuenta: "Activada",
  },
  {
    id: 3,
    nombre: "Hanna Baptista",
    correo: "hanna@culqi.com",
    cargo: "Graphic Designer",
    departamento: "Team Product",
    oficina: "Culqi Office",
    estadoCuenta: "Activada",
  },
  {
    id: 4,
    nombre: "Miracle Geidt",
    correo: "miracle@culqi.com",
    cargo: "Finance",
    departamento: "Team Finance",
    oficina: "Culqi Office",
    estadoCuenta: "Desactivada",
  },
  {
    id: 5,
    nombre: "Rayna Torff",
    correo: "rayna@culqi.com",
    cargo: "Project Manager",
    departamento: "Team Management",
    oficina: "Culqi Office",
    estadoCuenta: "Activada",
  },
  {
    id: 6,
    nombre: "Giana Lipshutz",
    correo: "giana@culqi.com",
    cargo: "Creative Director",
    departamento: "Team Creative",
    oficina: "Culqi Office",
    estadoCuenta: "Desactivada",
  },
  {
    id: 7,
    nombre: "James George",
    correo: "james@culqi.com",
    cargo: "Lead Designer",
    departamento: "Team Design",
    oficina: "Culqi Office",
    estadoCuenta: "Activada",
  },
  {
    id: 8,
    nombre: "Jordyn George",
    correo: "jordyn@culqi.com",
    cargo: "IT Support",
    departamento: "Team IT",
    oficina: "Culqi Office",
    estadoCuenta: "Activada",
  },
  {
    id: 9,
    nombre: "Skylar Herwitz",
    correo: "skylar@unbixel.com",
    cargo: "3D Designer",
    departamento: "Team Design",
    oficina: "Culqi Office",
    estadoCuenta: "Activada",
  },
  {
    id: 10,
    nombre: "Andres Silva",
    correo: "andres@culqi.com",
    cargo: "Web Developer",
    departamento: "Team Development",
    oficina: "Culqi Office",
    estadoCuenta: "Activada",
  },
  {
    id: 11,
    nombre: "Ana Maria",
    correo: "ana@culqi.com",
    cargo: "Data Scientist",
    departamento: "Team Data",
    oficina: "Culqi Office",
    estadoCuenta: "Desactivada",
  },
];

const optPagination = [
  { label: "Mostrar 10", value: 10 },
  { label: "Mostrar 20", value: 20 },
  { label: "Mostrar 30", value: 30 },
];
</script>

<style lang="postcss" scoped>
.table {
  @apply w-full border-spacing-0 text-sm;

  & thead {
    @apply bg-greyscale-100 rounded-[10px] text-greyscale-600;
  }

  & th {
    @apply py-[18.5px] px-4;
  }

  & th,
  & td {
    @apply text-greyscale-900;
  }

  & td {
    @apply py-2 px-3 [&:not(:last-child)]:border-b border-b-greyscale-200;
    @apply lg:py-[22px] lg:px-4 lg:border-b;
  }

  & tr {
    @apply rounded-xl;
    @apply lg:rounded-none;
  }
}

th:not([align]),
td:not([align]) {
  text-align: inherit;
}

td[data-label="id"],
td[data-label="correo"] {
  @apply !hidden;
}

.table-wrapper {
  @apply overflow-x-auto;
}

@media screen and (max-width: 768px) {
  thead {
    @apply hidden;
  }

  .has-mobile-cards thead tr th {
    @apply hidden;
  }

  .has-mobile-cards tr {
    @apply max-w-full relative block border;
  }

  .has-mobile-cards tr {
    @apply [&:not(:last-child)]:mb-4;
  }

  .has-mobile-cards tr {
    @apply [&:not([class*="is-"])]:bg-white;
  }

  .has-mobile-cards tr td {
    @apply w-auto flex items-center justify-between;
  }

  .has-mobile-cards tr td:before {
    @apply font-bold text-left capitalize;
    content: attr(data-label);
  }
}
</style>
