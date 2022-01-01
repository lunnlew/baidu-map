<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { onMounted, watch, ref } from "vue";
import { state } from "@/lib/map";
import { addCityListControl } from "@/lib/control";
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
      addCityListControl(props);
    }
  },
  {
    immediate: true,
  }
);
</script>
<script lang="ts">
export default {
  name: "CityListControl",
}
</script>