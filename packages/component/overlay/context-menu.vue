<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useAttrs, useSlots, watch } from "vue";
import { state } from "@/lib/map";
import { addContextMenu } from "@/lib/overlay";
import { mergePropsDefault, bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps(), {})
let options = { ...props, menus: [] as any[] };
const attrs = useAttrs();
const slots = useSlots()
const emit = defineEmits({});
if (slots.default) {
  let ContextMenuItems = slots
    .default()
    .filter((s) => (s.type as any).name == "ContextMenuItem");
  for (let item of ContextMenuItems) {
    let merge_item_props = mergePropsDefault(item.props as any, (item.type as any).props);
    options.menus.push(merge_item_props as any);
  }
}
watch(
  state.value,
  (val) => {
    if (val.inited) {
      bindEvents(addContextMenu(options), extractEmitEvents(attrs), emit);
    }
  },
  {
    immediate: true,
  }
);
</script>
<script lang="ts">
export default {
  name: "ContextMenu",
}
</script>