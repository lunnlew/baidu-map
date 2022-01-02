<template>
  <div></div>
</template>
<script setup lang="ts">
import { computed, watch } from "vue";
import { state } from "@/lib/map";
import { addZoomControl } from "@/lib/control";
const props = withDefaults(defineProps<{
  anchor?: number,
  offset?: [number, number],
  show?: boolean,
}>(), {
  anchor: 0,
  offset: () => [50, 80],
  show: true,
})
const isShow = computed(() => state.value.inited && props.show);
const options = computed(() => props)
watch(
  () => isShow.value,
  (val) => {
    if (val) {
      addZoomControl(options.value);
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