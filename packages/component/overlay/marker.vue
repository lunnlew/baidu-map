<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useAttrs, useSlots, watch } from "vue";
import { state } from "@/lib/map";
import { addMaker, bindEvents } from "@/lib/overlay";
import { mergePropsDefault, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  point: [number, number]
  offset?: [number, number]
  enableMassClear?: boolean
  enableDragging?: boolean
  enableClicking?: boolean
  raiseOnDrag?: boolean
  draggingCursor?: string
  rotation?: number
  title?: string
}>(), {
  point: () => [116.403963, 39.915119],
  offset: () => [0, 0],
  enableClicking: true,
  enableDragging: false,
  enableMassClear: true,
  raiseOnDrag: false,
  draggingCursor: '',
  rotation: 0,
  title: '',
})
let options = { ...props };
const attrs = useAttrs();
const slots = useSlots()
const emit = defineEmits({});
if (slots.default) {
  console.log('slots.default', slots.default())
  let MarkerIcon = slots.default().find((s) => (s.type as any).name == "MarkerIcon");
  if (MarkerIcon) {
    let merge_icon_props = mergePropsDefault(
      MarkerIcon.props as any,
      (MarkerIcon.type as any).props
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
        addMaker(props.point, options),
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
  name: "Marker",
}
</script>