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
      d="M12 20.25C7.44365 20.25 3.75 16.5563 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25ZM2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12Z"
      :fill="fillIcon(color)"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V12C12.75 11.5858 12.4142 11.25 12 11.25C11.5858 11.25 11.25 11.5858 11.25 12V16C11.25 16.4142 11.5858 16.75 12 16.75Z"
      :fill="fillIcon(color)"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.25 8C11.25 8.41421 11.5858 8.75 12 8.75H12.01C12.4242 8.75 12.76 8.41421 12.76 8C12.76 7.58579 12.4242 7.25 12.01 7.25H12C11.5858 7.25 11.25 7.58579 11.25 8Z"
      :fill="fillIcon(color)"
    />
  </svg>
</template>

<script setup lang="ts">
import { IIconProps } from "./interface";
import { fillIcon, sizeIcon } from "../../utils/setIconStyles";

const props = withDefaults(defineProps<IIconProps>(), {
  color: "black",
  size: "medium",
});
</script>
