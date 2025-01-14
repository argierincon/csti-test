<template>
  <svg
    :width="sizeIcon(size)"
    :height="sizeIcon(size)"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Search">
      <g id="Vector">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.7664 3.52802C7.21636 3.52802 3.52783 7.21654 3.52783 11.7666C3.52783 16.3166 7.21636 20.0051 11.7664 20.0051C16.3164 20.0051 20.0049 16.3166 20.0049 11.7666C20.0049 7.21654 16.3164 3.52802 11.7664 3.52802ZM2.02783 11.7666C2.02783 6.38812 6.38793 2.02802 11.7664 2.02802C17.1448 2.02802 21.5049 6.38812 21.5049 11.7666C21.5049 17.145 17.1448 21.5051 11.7664 21.5051C6.38793 21.5051 2.02783 17.145 2.02783 11.7666Z"
          :fill="fillIcon(color)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.4871 17.9555C17.7796 17.6622 18.2545 17.6616 18.5477 17.9541L22.0718 21.469C22.365 21.7615 22.3657 22.2363 22.0732 22.5296C21.7806 22.8229 21.3058 22.8235 21.0125 22.531L17.4885 19.0161C17.1952 18.7236 17.1946 18.2487 17.4871 17.9555Z"
          :fill="fillIcon(color)"
        />
      </g>
    </g>
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
