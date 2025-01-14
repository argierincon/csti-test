<template>
  <svg
    :width="sizeIcon(size)"
    :height="sizeIcon(size)"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z"
      :fill="fillIcon(color)"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
      :fill="fillIcon(color)"
    />
  </svg>
</template>

<script setup lang="ts">
import { IIconProps } from "./interface";
import { fillIcon, sizeIcon } from "../../../utils/setIconStyles";

const props = withDefaults(defineProps<IIconProps>(), {
  color: "black",
  size: "medium",
});
</script>
