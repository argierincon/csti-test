<template>
  <section class="responsive-table">
    <div class="table-wrapper has-mobile-cards">
      <table class="table">
        <thead>
          <tr>
            <th
              v-for="(item, idx) in 6"
              :key="item"
              :class="{
                'rounded-l-xl': idx === 0,
                'rounded-r-xl': idx === 5,
              }"
            >
              <Skeleton class="h-5 w-24" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in 6" :key="employee">
            <td v-for="item in 6" :key="item">
              <Skeleton class="h-5 w-24" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IEmployee } from "../../store/interfaces/employee.interface";
import Skeleton from "../atoms/Skeleton.vue";
</script>

<style lang="postcss" scoped>
.table {
  @apply w-full border-spacing-0;

  & thead {
    @apply bg-greyscale-100 rounded-[10px];
  }

  & th {
    @apply py-[18.5px] px-4;
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
td[data-label="email"] {
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
    @apply [&:not(:last-child)]:mb-4 [&:not([class*="is-"])]:bg-white;
  }

  .has-mobile-cards tr td {
    @apply w-auto flex items-center justify-between;

    &:before {
      @apply font-bold text-left capitalize;
      content: attr(data-label);
    }
  }
}
</style>
