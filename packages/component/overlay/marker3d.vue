<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useAttrs, useSlots, watch } from "vue";
import { state } from "@/lib/map";
import { addMaker3D, bindEvents } from "@/lib/overlay";
import { mergePropsDefault, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  point: [number, number]
  height?: number,
  size?: number
  shape?: number
  fillColor?: string
  fillOpacity?: number,
}>(), {
  point: () => [116.403963, 39.915119],
  height: 200,
  size: 50,
  shape: 1,
  fillColor: "#FF0000",
  fillOpacity: 0.8,
})
let options = { ...props };
const attrs = useAttrs();
const slots = useSlots()
const emit = defineEmits({});
if (slots.default) {
  let Marker3DIcon = slots
    .default()
    .find((s) => (s.type as any).name == "Marker3DIcon");
  if (Marker3DIcon) {
    let merge_icon_props = mergePropsDefault(
      Marker3DIcon.props as any,
      (Marker3DIcon.type as any).props
    );
    if (merge_icon_props.src) {
      (options as any).icon = merge_icon_props;
    }
  }
}
watch(
  state.value,
  (val) => {
    if (val.inited) {
      bindEvents(
        addMaker3D(props.point, options),
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
  name: "Marker3D",
}
</script>