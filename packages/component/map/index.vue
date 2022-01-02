<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import {
  // container,
  MapInitializer,
  BMapAk,
  map_center,
  map_zoom,
} from "@/lib/map";
import BMapGL from "../../lib/BMapGL";
const bm = ref()
onMounted(() => {
  MapInitializer(container.value, {
    enableRotate: props.enableRotate,
    enableTilt: props.enableTilt,
    mapType: props.mapType,
  }).then((result) => {
    bm.value = result.map
    emit("ready", result)
  });
});
const props = withDefaults(defineProps<{
  apiKey: string
  center: {
    lng: number
    lat: number
  },
  zoom?: number
  mapType?: BMapGL.MapTypeId
  enableRotate?: boolean
  enableTilt?: boolean
}>(), {
  apiKey: '',
  enableRotate: true,
  enableTilt: true,
  center: () => ({
    lng: 116.403963,
    lat: 116.403963,
  }),
  zoom: 13,
  mapType: BMapGL.MapTypeId.BMAP_NORMAL_MAP,
})
const emit = defineEmits(["ready"])
BMapAk.value = props.apiKey;
map_center.value = props.center;
map_zoom.value = props.zoom;
const container = ref();
watch(
  () => props.center,
  (val) => {
    if (bm.value) {
      bm.value.panTo(val);
    }
  },
  {
    immediate: true,
  }
);
</script>
<script lang="ts">
export default {
  name: "BaiduMap",
}
</script>