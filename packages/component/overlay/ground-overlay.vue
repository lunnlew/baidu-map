<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useAttrs, useSlots, watch, computed } from "vue";
import { state } from "@/lib/map";
import { addGroundOverlay } from "@/lib/overlay";
import { mergePropsDefault, bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  startPoint: {
    lng: number;
    lat: number;
  }
  endPoint: {
    lng: number;
    lat: number;
  }
  type?: string
  opacity?: number
  url?: string,
  show?: boolean,
}>(), {
  startPoint: () => ({
    lng: 0,
    lat: 0
  }),
  endPoint: () => ({
    lng: 0,
    lat: 0
  }),
  type: "image",
  opacity: 0.8,
  url: "",
  show: true,
})
const attrs = useAttrs();
const slots = useSlots()
const emit = defineEmits({});
const options = computed(() => props)
const isShow = computed(() => state.value.inited && props.show);
watch(
  () => isShow.value,
  (val) => {
    if (val) {
      let merge_props = { ...options.value };
      if (slots.default) {
        let GroundOverlayImage = slots
          .default()
          .find((s) => (s.type as any).name == "GroundOverlayImage");
        if (GroundOverlayImage) {
          let merge_image_props = mergePropsDefault(
            GroundOverlayImage.props as any,
            (GroundOverlayImage.type as any).props
          );
          merge_props = Object.assign(merge_props, merge_image_props);
        }
      }
      bindEvents(
        addGroundOverlay(props.startPoint, props.endPoint, merge_props),
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