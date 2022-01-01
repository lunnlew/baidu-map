<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useAttrs, useSlots, watch } from "vue";
import { state } from "@/lib/map";
import { addGroundOverlay, bindEvents } from "@/lib/overlay";
import { mergePropsDefault, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  startPoint: [number, number]
  endPoint: [number, number]
  type?: string
  opacity?: number
  url?: string
}>(), {
  startPoint: () => [0, 0],
  endPoint: () => [0, 0],
  type: "image",
  url: "",
  opacity: 0.8,
})
const attrs = useAttrs();
const slots = useSlots()
const emit = defineEmits({});
let options = { ...props };
if (slots.default) {
  let GroundOverlayImage = slots
    .default()
    .find((s) => (s.type as any).name == "GroundOverlayImage");
  if (GroundOverlayImage) {
    let merge_image_props = mergePropsDefault(
      GroundOverlayImage.props as any,
      (GroundOverlayImage.type as any).props
    );
    options = Object.assign(options, merge_image_props);
  }
}
watch(
  state.value,
  (val) => {
    if (val.inited) {
      bindEvents(
        addGroundOverlay(props.startPoint, props.endPoint, options),
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
  name: "GroundOverlay",
}
</script>