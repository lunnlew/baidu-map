<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from "vue";
import { state } from "@/lib/map";
import { addPolygon } from "@/lib/overlay";
import { bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  points?: {
    lng: number;
    lat: number;
  }[]
  strokeColor?: string
  strokeWeight?: number
  strokeOpacity?: number
  strokeStyle?: string
  fillColor?: string
  fillOpacity?: number
  enableMassClear?: boolean
  enableClicking?: boolean
  enableEditing?: boolean
  overallView?: boolean
  show?: boolean
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
  overallView: true,
  show: true,
})
const attrs = useAttrs();
const slots = useSlots()
const emit = defineEmits({});
const isShow = computed(() => state.value.inited && props.show && props.points.length > 0);
const options = computed(() => props)
const bm = ref()
watch(
  () => isShow.value,
  (val) => {
    if (val) {
      bm.value = bindEvents(
        addPolygon(props.points, options.value),
        extractEmitEvents(attrs),
        emit
      );
    }
  },
  {
    immediate: true,
  }
);
onUnmounted(() => {
  bm.value = null
})
</script>
<script lang="ts">
export default {
  name: "Ploygon",
}
</script>