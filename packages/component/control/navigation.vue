<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { watch } from "vue";
import { state } from "@/lib/map";
import { addNavigationControl } from "@/lib/control";
const props = withDefaults(defineProps<{
  anchor?: number,
  offset?: [number, number],
  type?: number
}>(), {
  anchor: 0,
  offset: () => [50, 80],
  type: 1
})
watch(
  state.value,
  (val) => {
    if (val.inited) {
      addNavigationControl(props);
    }
  },
  {
    immediate: true,
  }
);
</script>
<script lang="ts">
export default {
  name: "NavigationControl",
}
</script>