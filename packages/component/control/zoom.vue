<template>
  <div></div>
</template>
<script setup lang="ts">
import { watch } from "vue";
import { state } from "@/lib/map";
import { addZoomControl } from "@/lib/control";
const props = withDefaults(defineProps<{
  anchor?: number,
  offset?: [number, number],
}>(), {
  anchor: 0,
  offset: () => [50, 80],
})
watch(
  state.value,
  (val) => {
    if (val.inited) {
      addZoomControl(props);
    }
  },
  {
    immediate: true,
  }
);
</script>
<script lang="ts">
export default {
  name: "ZoomControl",
}
</script>