<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useAttrs, useSlots, watch } from "vue";
import { state } from "@/lib/map";
import { addPolygon, bindEvents } from "@/lib/overlay";
import { extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  points?: [number, number][]
  strokeColor?: string
  fillColor?: string
  strokeWeight?: number
  strokeOpacity?: number
  fillOpacity?: number
  strokeStyle?: string
  enableMassClear?: boolean
  enableEditing?: boolean
  enableClicking?: boolean
  addToMap?: boolean
}>(), {
  points: () => [],
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  strokeStyle: "solid",
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  enableClicking: true,
  enableEditing: false,
  enableMassClear: true,
  addToMap: true,
})
let options = { ...props };
const attrs = useAttrs();
const slots = useSlots()
const emit = defineEmits({});
watch(
  state.value,
  (val) => {
    if (val.inited && props.addToMap) {
      bindEvents(
        addPolygon(props.points, options),
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
  name: "Ploygon",
}
</script>