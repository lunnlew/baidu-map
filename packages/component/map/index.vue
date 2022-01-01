<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  // container,
  MapInitializer,
  BMapAk,
  map_center,
  map_zoom,
} from "@/lib/map";
import BMapGL from "../../lib/BMapGL";
onMounted(() => {
  MapInitializer(container.value, {
    enableRotate: props.enableRotate,
    enableTilt: props.enableTilt,
    mapType: props.mapType,
  }).then((result) => emit("ready", result));
});
const props = withDefaults(defineProps<{
  apiKey: string
  center: [number, number],
  zoom?: number
  mapType?: BMapGL.MapTypeId
  enableRotate?: boolean
  enableTilt?: boolean
}>(), {
  apiKey: '',
  enableRotate: true,
  enableTilt: true,
  center: () => [116.403963, 39.915119],
  zoom: 13,
  mapType: BMapGL.MapTypeId.BMAP_NORMAL_MAP,
})
const emit = defineEmits(["ready"])
BMapAk.value = props.apiKey;
map_center.value = props.center;
map_zoom.value = props.zoom;
const container = ref();
</script>
<script lang="ts">
export default {
  name: "BaiduMap",
}
</script>