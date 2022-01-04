<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useAttrs, watch } from "vue";
import BMapGL from "../../lib/BMapGL";
import { bindEvents, extractEmitEvents } from "@/utils/util";
import { initMap } from "@/lib/map";
const props = withDefaults(defineProps<{
  apiKey: string
  center: {
    lng: number
    lat: number
  },
  zoom?: number
  enableRotate?: boolean
  enableTilt?: boolean
  enableMapClick?: boolean
  mapType?: BMapGL.MapTypeId
  onReady?: (state: any) => void
}>(), {
  apiKey: '',
  center: () => ({
    lng: 116.403963,
    lat: 116.403963,
  }),
  zoom: 13,
  enableRotate: true,
  enableTilt: true,
  enableMapClick: true,
  mapType: BMapGL.MapTypeId.BMAP_NORMAL_MAP,
  onReady: () => { },
})
const emit = defineEmits({})
const bm = ref()
const container = ref();
const attrs = useAttrs();
const options = computed(() => props)
onMounted(() => {
  let merge_props = { ...options.value };
  initMap(container.value, merge_props)?.then((result) => {
    let events = extractEmitEvents(attrs) as string[]
    // 启用了enableMapClick选项时，某些地图事件本身就有默认的事件处理，不需要再次注册，否则导致多次触发
    bindEvents(result.map, events.filter((v: string) => (!merge_props.enableMapClick || ![
      'click',
      'mousedown',
    ].includes(v))), emit);
    emit("ready", result)
  });
})
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
onUnmounted(() => {
  bm.value = null
})
defineExpose({
  bmobj: bm.value,
})
</script>
<script lang="ts">
export default {
  name: "BaiduMap",
}
</script>