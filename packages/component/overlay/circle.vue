<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useAttrs, watch } from "vue";
import { state } from "@/lib/map";
import { addCircle, bindEvents } from "@/lib/overlay";
import { extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  center: [number, number],
  radius?: number,
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
  center: () => [116.403963, 39.915119],
  radius: 200,
  strokeColor: "black",
  strokeWeight: 1,
  strokeOpacity: 0.8,
  strokeStyle: 'solid',
  fillColor: '',
  fillOpacity: 0.5,
  enableMassClear: true,
  enableEditing: false,
  enableClicking: true,
  addToMap: true
})
const attrs = useAttrs();
const emit = defineEmits({});
let options = { ...props };
watch(
  state.value,
  (val) => {
    if (val.inited && props.addToMap) {
      bindEvents(
        addCircle(props.center, props.radius, options),
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
  name: "Circle",
}
</script>