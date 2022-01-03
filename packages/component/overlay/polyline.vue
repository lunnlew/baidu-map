<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed, useAttrs, useSlots, watch } from "vue";
import { state } from "@/lib/map";
import { addPolyline } from "@/lib/overlay";
import { bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  points: {
    lng: number
    lat: number
  }[]
  strokeColor?: string
  strokeWeight?: number
  strokeOpacity?: number
  strokeStyle?: string
  enableMassClear?: boolean
  enableEditing?: boolean
  enableClicking?: boolean
  clip?: boolean,
  geodesic?: boolean,
  overallView?: boolean
  show?: boolean
}>(), {
  points: () => [],
  strokeColor: "#FF0000",
  strokeWeight: 2,
  strokeOpacity: 0.8,
  strokeStyle: "solid",
  enableMassClear: true,
  enableEditing: false,
  enableClicking: true,
  overallView: true,
  clip: true,
  geodesic: false,
  show: true,
})
const attrs = useAttrs();
const slots = useSlots()
const emit = defineEmits({});
const isShow = computed(() => state.value.inited && props.show && props.points.length > 0);
const options = computed(() => props)
watch(
  () => isShow.value,
  (val) => {
    if (val) {
      bindEvents(
        addPolyline(props.points, options.value),
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
  name: "Polyline",
}
</script>