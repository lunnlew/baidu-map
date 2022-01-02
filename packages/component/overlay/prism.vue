<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useAttrs, useSlots, watch } from "vue";
import { state } from "@/lib/map";
import { addPrism } from "@/lib/overlay";
import { bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  points?: [number, number][]
  altitude?: number
  topFillColor?: string
  topFillOpacity?: number
  sideFillColor?: string
  sideFillOpacity?: number
  enableMassClear?: boolean
}>(), {
  points: () => [],
  altitude: 5000,
  topFillColor: "#5679ea",
  topFillOpacity: 0.5,
  sideFillColor: "#5679ea",
  sideFillOpacity: 0.9,
  enableMassClear: true,
})
let options = { ...props };
const attrs = useAttrs();
const slots = useSlots()
const emit = defineEmits([]);
watch(
  state.value,
  (val) => {
    if (val.inited) {
      bindEvents(
        addPrism(props.points, options),
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
  name: "Prisim",
}
</script>