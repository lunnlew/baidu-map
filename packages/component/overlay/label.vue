<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useAttrs, useSlots, watch } from "vue";
import { state } from "@/lib/map";
import { addLabel } from "@/lib/overlay";
import { bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  content: string
  position: [number, number]
  offset?: [number, number]
  enableMassClear?: boolean
  styles?: Object
}>(), {
  content: "",
  position: () => [0, 0],
  offset: () => [0, 0],
  enableMassClear: true,
  styles: () => ({}),
})
let options = { ...props };
const attrs = useAttrs();
const slots = useSlots()
const emit = defineEmits({});
watch(
  state.value,
  (val) => {
    if (val.inited) {
      bindEvents(addLabel(options), extractEmitEvents(attrs), emit);
    }
  },
  {
    immediate: true,
  }
);
</script>
<script lang="ts">
export default {
  name: "Label",
}
</script>