<template>
  <section class="responsive-table">
    <div class="table-wrapper">
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
          <tr v-for="employee in cleanData" :key="employee.id">
            <td
              v-for="(value, name) in employee"
              :key="name"
              :data-label="name"
            >
              <div>
                <p>{{ value }}</p>
                <p v-if="name === 'nombre'" class="mini-label">
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

    <div class="responsive-table__pagination">
      <div class="pagination-buttons">
        <ButtonActions
          icon="chevronLeft"
          :disabled="tablePage === 1"
          :onClick="() => changePage(tablePage - 1)"
        />

        <nav class="page-navigation">
          <ul class="button-numbers">
            <li>
              <button
                v-for="btn in totalButtons"
                :key="btn"
                :class="{
                  'btn-page--active': tablePage === btn,
                }"
                :disabled="typeof btn === 'string'"
                class="btn-page"
                @click="changePage(btn)"
              >
                {{ btn }}
              </button>
            </li>
          </ul>
        </nav>
        <ButtonActions
          icon="chevronRight"
          :disabled="tablePage === totalButtons"
          :onClick="() => changePage(tablePage + 1)"
        />
      </div>
      <div class="responsive-table__totals">
        <p class="text-greyscale-600 text-sm">
          Mostrando {{ tableTotals.from }} a {{ tableTotals.to }} de
          {{ tableTotals.total }} registros
        </p>
        <Select
          @change="selectLimit"
          :selected="globalState.tableLimit"
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
import {
  withDefaults,
  defineProps,
  ref,
  reactive,
  toRefs,
  computed,
} from "vue";
import { IEmployee } from "../store/interfaces/employee.interface";

import ButtonActions from "../components/ButtonActions.vue";
import Select from "../components/Select.vue";
import { useGlobalStore } from "../store";
import { getPaginationRange } from "../utils/paginationDots";

const props = defineProps<{ tableData: IEmployee[] }>();

const { tableData } = toRefs(props);

const cleanData = computed(() => {
  return tableData.value.map((e) => {
    return {
      id: e.id,
      nombre: e.nombre,
      correo: e.correo,
      cargo: e.cargo,
      departamento: e.departamento,
      oficina: e.oficina,
      cuenta: e.estadoCuenta,
    };
  });
});

const tableHeaders = [
  "Nombre",
  "Nombre cargo",
  "Departamento",
  "Oficina",
  "Cuenta",
  "Acciones",
];

const globalState = useGlobalStore();
const optPagination = [
  { label: "Mostrar 10", value: 10 },
  { label: "Mostrar 20", value: 20 },
  { label: "Mostrar 30", value: 30 },
  { label: "Mostrar 40", value: 40 },
  { label: "Mostrar 50", value: 50 },
];
const selectLimit = (limit: number) => {
  globalState.setLimit(limit);
};

interface ITotals {
  from: number;
  to: number;
  total: number;
}

const tableTotals = reactive<ITotals>({
  from: 0,
  to: 0,
  total: 0,
});

const { tableLimit, tablePage, tableTotal } = globalState;

tableTotals.from = tableLimit * tablePage - tableLimit + 1;
tableTotals.to = Math.min(tableLimit * tablePage, tableTotal);
tableTotals.total = tableTotal;

const totalButtons = ref<(number | string)[]>();
const totalPageCount = Math.ceil(tableTotal / tableLimit) || 0;
totalButtons.value = getPaginationRange(totalPageCount, globalState.tablePage);

const changePage = (page: number) => {
  globalState.setPage(page);
};
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

.mini-label {
  @apply text-greyscale-500 text-xs;
}

.responsive-table__pagination {
  @apply mt-6 flex flex-col gap-y-6 lg:flex-row items-center justify-between;
}

.page-navigation {
  @apply max-w-[100px] overflow-x-auto whitespace-nowrap;
  @apply md:max-w-none;

  &::-webkit-scrollbar {
    @apply hidden;
  }
}

.pagination-buttons {
  @apply flex items-center gap-6;
}

.button-numbers {
  @apply flex items-center text-xs;
}

.btn-page {
  @apply h-8 w-8 rounded-[10px] text-sm;
}

.btn-page--active {
  @apply bg-greyscale-100;
}

.responsive-table__totals {
  @apply flex flex-col gap-4 lg:flex-row lg:items-center;
}

@media screen and (max-width: 768px) {
  thead {
    @apply hidden;
  }

  .table-wrapper thead tr th {
    @apply hidden;
  }

  .table-wrapper tr {
    @apply max-w-full relative block border;
    @apply [&:not(:last-child)]:mb-4 [&:not([class*="is-"])]:bg-white;
  }

  .table-wrapper tr td {
    @apply w-auto flex gap-4 items-center justify-between;

    &:before {
      @apply font-bold text-left capitalize;
      content: attr(data-label);
    }
  }
}
</style>
