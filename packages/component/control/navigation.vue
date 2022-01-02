<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed, useAttrs, watch } from "vue";
import { state } from "@/lib/map";
import { addNavigationControl } from "@/lib/control";
import { bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  anchor?: number,
  offset?: [number, number],
  type?: number
  show?: boolean,
}>(), {
  anchor: 0,
  offset: () => [50, 80],
  type: 1,
  show: true,
})
const attrs = useAttrs();
const emit = defineEmits({});
const isShow = computed(() => state.value.inited && props.show);
const options = computed(() => props)
watch(
  () => isShow.value,
  (val) => {
    if (val) {
      bindEvents(
        addNavigationControl(options.value),
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
  name: "NavigationControl",
}
</script>