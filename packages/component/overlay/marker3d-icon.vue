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
  src: '',
  size: () => [40, 40],
  anchor: () => [0, 0],
  imageOffset: () => [0, 0],
})
</script>
<script lang="ts">
export default {
  name: "Marker3DIcon",
}
</script>