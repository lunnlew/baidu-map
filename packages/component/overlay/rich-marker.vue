<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch } from 'vue'
import { map, state } from '../../lib/map'
import { addRichMarker, initRichMarker } from '../../lib/tool'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        point: {
            lng: number
            lat: number
        }
        anchor?: [number, number]
        enableDragging?: boolean
        show?: boolean
    }>(),
    {
        point: () => ({
            lng: 0,
            lat: 0,
        }),
        anchor: () => [0, 0],
        enableDragging: true,
        show: true,
    }
)
const emit = defineEmits({})
const attrs = useAttrs()
const isShow = computed(() => props.show)
const options = computed(() => props)
const bm = ref<BaiduMapVue3.BMapGL.RichMarker | null>()
watch(
    () => state.value.map_inited,
    val => {
        let merge_props = { ...options.value }
        if (val) {
            initRichMarker().then(result => {
                bm.value = bindEvents(addRichMarker(merge_props), extractEmitEvents(attrs), emit)
                isShow.value && bm.value?.show()
            })
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => state.value.map_inited && isShow.value,
    val => {
        if (val) {
            bm.value && bm.value.show()
        } else {
            bm.value && bm.value.hide()
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    bm.value && map.value?.removeOverlay(bm.value)
    bm.value = null
})
defineExpose({
    bmobj: bm.value,
})
</script>
<script lang="ts">
export default {
    name: 'RichMarker',
}
</script>
