<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{
  src?: string,
  size?: [number, number],
  anchor?: [number, number],
  imageOffset?: [number, number]
}>(), {
  size: () => [23, 15],
  src: "http://webmap0.bdimg.com/image/api/marker_red.png",
  anchor: undefined,
  imageOffset: () => [0, 0],
})
</script>
<script lang="ts">
export default {
  name: "MarkerIcon",
}
</script>