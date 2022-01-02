<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useAttrs, useSlots, watch } from "vue";
import { state } from "@/lib/map";
import { addPolyline } from "@/lib/overlay";
import { bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  points: [number, number][]
  strokeColor?: string
  strokeWeight?: number
  strokeOpacity?: number
  strokeStyle?: string
  enableMassClear?: boolean
  enableEditing?: boolean
  enableClicking: boolean
}>(), {
  points: () => [],
  strokeColor: "#FF0000",
  strokeWeight: 2,
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  enableMassClear: true,
  enableEditing: false,
  enableClicking: true,
})
let options = { ...props };
const attrs = useAttrs();
const slots = useSlots()
const emit = defineEmits({});
watch(
  state.value,
  (val) => {
    if (val.inited) {
      bindEvents(
        addPolyline(props.points, options),
        extractEmitEvents(attrs),
        emit
      );
    }
  },
  {
    immediate: true,
  }
);
</script>
<script lang="ts">
export default {
  name: "Poliline",
}
</script>