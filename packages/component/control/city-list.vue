<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { onMounted, watch, ref, computed, useAttrs } from "vue";
import { state } from "@/lib/map";
import { addCityListControl } from "@/lib/control";
import { bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
  anchor?: number,
  offset?: [number, number],
  show?: boolean,
}>(), {
  anchor: 0,
  offset: () => [50, 80],
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
        addCityListControl(options.value),
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
  name: "CityListControl",
}
</script>