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
          <tr v-if="cleanData.length === 0">
            <td colspan="100%" class="text-center">
              <div class="td-empty">No hay registros</div>
            </td>
          </tr>
          <tr v-for="elem in cleanData" :key="elem.id">
            <td
              v-for="(value, name) in elem"
              :key="name"
              :data-label="getTranslatedLabel(name)"
            >
              <div class="data-cell">
                <p>{{ value }}</p>
                <p v-if="name === 'name'" class="mini-label">
                  {{ elem.email }}
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
          :disabled="currentPage === 1"
          :onClick="() => onChangePage(currentPage - 1)"
        />

        <nav class="page-navigation">
          <ul class="button-numbers">
            <li>
              <button
                v-for="btn in arrRangeButtons"
                :key="btn"
                :class="{
                  'btn-page--active': currentPage === btn,
                }"
                class="btn-page"
                @click="onChangePage(btn)"
                :disabled="typeof btn === 'string'"
              >
                {{ btn }}
              </button>
            </li>
          </ul>
        </nav>
        <ButtonActions
          icon="chevronRight"
          :disabled="currentPage === totalPageCount"
          :onClick="() => onChangePage(currentPage + 1)"
        />
      </div>
      <div class="responsive-table__totals">
        <p class="text-greyscale-600 text-sm">
          Mostrando {{ tableTotals.from }} a {{ tableTotals.to }} de
          {{ tableTotals.total }} registros
        </p>
        <Select
          iconChevronUp
          size="small"
          placeholder="Mostrar 10"
          :selected="limitPerPage"
          :options="optPagination"
          @change="onChangeLimit"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps, ref, reactive, toRefs, computed } from "vue";
import { IEmployee } from "../../store/interfaces/employee.interface";
import { getPaginationRange } from "../../utils/paginationDots";

import ButtonActions from "../molecules/ButtonActions.vue";
import Select from "../atoms/Select.vue";

interface IProps {
  tableData: IEmployee[];
  limitPerPage: number;
  currentPage: number;
  tableTotal: number;
  tableHeaders: string[];
}

const props = defineProps<IProps>();

const { tableData, limitPerPage, currentPage, tableTotal } = toRefs(props);

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

tableTotals.from =
  limitPerPage.value * currentPage.value - limitPerPage.value + 1;
tableTotals.to = Math.min(
  limitPerPage.value * currentPage.value,
  tableTotal.value
);
tableTotals.total = tableTotal.value;

const arrRangeButtons = ref<(number | string)[]>();
const totalPageCount = Math.ceil(tableTotal.value / limitPerPage.value) || 0;

arrRangeButtons.value = getPaginationRange(totalPageCount, currentPage.value);

// EVENTS
const emit = defineEmits(["updateLimitPerPage", "updateCurrentPage"]);

const onChangePage = (page: number | string) => {
  emit("updateCurrentPage", page);
};

const onChangeLimit = (limit: number) => {
  emit("updateLimitPerPage", limit);
  emit("updateCurrentPage", 1);
};

// CONSTS
const optPagination = [
  { label: "Mostrar 10", value: 10 },
  { label: "Mostrar 20", value: 20 },
  { label: "Mostrar 30", value: 30 },
  { label: "Mostrar 40", value: 40 },
  { label: "Mostrar 50", value: 50 },
];

const nameMapping = {
  name: "Nombre",
  id: "id",
  email: "Correo",
  role: "Cargo",
  department: "Departamento",
  office: "Oficina",
  accountStatus: "Estado",
} as const;

const getTranslatedLabel = (name: keyof typeof nameMapping): string => {
  return nameMapping[name] || name;
};

// !TODO: MAKE DYNAMIC
const cleanData = computed(() => {
  return tableData.value?.map((e: IEmployee) => {
    return {
      id: e.id,
      name: e.name,
      email: e.email,
      role: e.role,
      department: e.department,
      office: e.office,
      accountStatus: e.accountStatus,
    };
  });
});
</script>

<style lang="postcss" scoped>
.responsive-table {
  @apply lg:h-[calc(100%_-_170px)];
}

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

.td-empty {
  @apply flex justify-center text-sm;
  @apply md:text-base;
}

.table-wrapper {
  @apply overflow-x-auto;
  @apply lg:h-[calc(100%_-_55px)];
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

    .data-cell {
      @apply flex flex-col items-end text-end;
    }

    &:before {
      @apply font-bold text-left capitalize;
      content: attr(data-label);
    }
  }
}
</style>
