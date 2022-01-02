<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed, useAttrs, useSlots, watch } from "vue";
import { state } from "@/lib/map";
import { addContextMenu } from "@/lib/overlay";
import { mergePropsDefault, bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  show?: boolean,
}>(), {
  show: true,
})
const attrs = useAttrs();
const slots = useSlots()
const emit = defineEmits({});
const isShow = computed(() => state.value.inited && props.show);
const options = computed(() => props)
watch(
  () => isShow.value,
  (val) => {
    if (val) {
      let merge_props = Object.assign(options.value, {
        menus: []
      } as any)
      if (slots.default) {
        let ContextMenuItems = slots
          .default()
          .filter((s) => (s.type as any).name == "ContextMenuItem");
        for (let item of ContextMenuItems) {
          let merge_item_props = mergePropsDefault(item.props as any, (item.type as any).props);
          merge_props.menus.push(merge_item_props);
        }
      }
      bindEvents(addContextMenu(merge_props), extractEmitEvents(attrs), emit);
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