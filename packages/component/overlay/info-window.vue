<template>
  <div style="display: none">
    <div ref="info_title">
      <slot name="title"></slot>
    </div>
    <div ref="info_content">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, useAttrs, useSlots, watch } from "vue";
import { state } from "@/lib/map";
import { addInfoWindow } from "@/lib/overlay";
import { bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  content?: string
  width?: number
  height?: number
  maxWidth?: number
  offset?: [number, number]
  title?: string
  enableAutoPan?: boolean
  enableMaximize?: boolean
  enableCloseOnClick?: boolean
  addToMap?: boolean
}>(), {
  content: "",
  width: 0,
  height: 0,
  maxWidth: 0,
  offset: () => [0, 0],
  title: "",
  enableAutoPan: true,
  enableMaximize: true,
  enableCloseOnClick: true,
  addToMap: true
})

let options = { ...props };
const info_content = ref();
const info_title = ref();
const attrs = useAttrs();
const slots = useSlots()
const emit = defineEmits({});
watch(
  state.value,
  (val) => {
    if (val.inited && props.addToMap) {
      if (slots.default) {
        options.content = info_content.value;
      }
      // title 不支持 dom 形式
      if (slots.title) {
        options.title = info_title.value?.innerHTML;
      }
      bindEvents(addInfoWindow(options), extractEmitEvents(attrs), emit);
    }
  },
  {
    immediate: true,
  }
);
</script>
<script lang="ts">
export default {
  name: "InfoWindow",
}
</script>