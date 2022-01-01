<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useAttrs, useSlots, watch } from "vue";
import { state } from "@/lib/map";
import { addCityBoundary, bindEvents } from "@/lib/overlay";
import { mergePropsDefault, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  str: string
}>(), {
  str: "北京市",
})
const attrs = useAttrs();
const slots = useSlots()
const emit = defineEmits({});
let options = { ...props };
if (slots.default) {
  let MarkerPolygon = slots.default().find((s) => (s.type as any).name == "Polygon");
  if (MarkerPolygon) {
    let merge_polygon_props = mergePropsDefault(
      MarkerPolygon.props as any,
      (MarkerPolygon.type as any).props
    );
    (options as any).polygon = merge_polygon_props;
  }
}
watch(
  state.value,
  (val) => {
    if (val.inited) {
      bindEvents(
        addCityBoundary(options.str, options),
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
  name: "CityBoundary",
}
</script>