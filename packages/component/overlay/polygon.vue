<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useAttrs, useSlots, watch } from "vue";
import { state } from "@/lib/map";
import { addPolygon } from "@/lib/overlay";
import { bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  points?: [number, number][]
  strokeColor?: string
  strokeWeight?: number
  strokeOpacity?: number
  strokeStyle?: string
  fillColor?: string
  fillOpacity?: number
  enableMassClear?: boolean
  enableClicking?: boolean
  enableEditing?: boolean
  addToMap?: boolean
}>(), {
  points: () => [],
  strokeColor: "#FF0000",
  strokeWeight: 2,
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  enableMassClear: true,
  enableClicking: true,
  enableEditing: false,
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