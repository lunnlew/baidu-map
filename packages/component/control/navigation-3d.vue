<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch } from "vue";
import { state } from "@/lib/map";
import { addNavigationControl3D } from "@/lib/control";
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
const bm = ref()
watch(
  () => isShow.value,
  (val) => {
    if (val) {
      bm.value = bindEvents(
        addNavigationControl3D(options.value),
        extractEmitEvents(attrs),
        emit
      );
    }
  },
  {
    immediate: true,
  }
);
onUnmounted(() => {
  bm.value = null
})
</script>
<script lang="ts">
export default {
  name: "Navigation3DControl",
}
</script>