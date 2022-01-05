<template>
    <div></div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch } from 'vue'
import { map, state } from '../../lib/map'
import { addZoomControl } from '../../lib/control'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../types'
const props = withDefaults(
    defineProps<{
        anchor?: number
        offset?: [number, number]
        show?: boolean
    }>(),
    {
        anchor: 0,
        offset: () => [50, 80],
        show: true,
    }
)
const attrs = useAttrs()
const emit = defineEmits({})
const isShow = computed(() => state.value.map_inited && props.show)
const options = computed(() => props)
const bm = ref<BaiduMapVue3.BMapGL.ZoomControl | null>()
watch(
    () => isShow.value,
    val => {
        if (val) {
            bm.value = bindEvents(addZoomControl(options.value), extractEmitEvents(attrs), emit)
        } else {
            bm.value && map.value?.removeControl(bm.value)
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    bm.value && map.value?.removeControl(bm.value)
    bm.value = null
})
defineExpose({
    bmobj: bm.value,
})
</script>
<script lang="ts">
export default {
    name: 'ZoomControl',
}
</script>
