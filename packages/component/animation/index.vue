<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch } from 'vue'
import { map, state } from '../../lib/map'
import { addViewAnimation } from '../../lib/animation'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        map?: BaiduMapVue3.BMapGL.Map | null
        keyFrames: {
            center: {
                lng: number
                lat: number
            }
            zoom: number
            tilt: number
            heading: number
            percentage: number
        }[]
        duration?: number
        delay?: number
        interation?: number | string
        anchor?: number
        overallView?: boolean
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        keyFrames: () => [],
        duration: 10000,
        delay: 3000,
        interation: 2,
        overallView: false,
        show: true,
        onReady: (el: any) => {},
    }
)
const emit = defineEmits({})
const attrs = useAttrs()
const isShow = computed(() => currentMap.value && props.show)
const options = computed(() => props)
const bm = ref<BaiduMapVue3.BMapGL.ViewAnimation | null>()
const currentMap = computed(() => props.map || map.value)
watch(
    () => isShow.value,
    val => {
        if (val) {
            bm.value = bindEvents(addViewAnimation(currentMap.value, options.value), extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value,
                start: () => currentMap.value && bm.value && currentMap.value.startViewAnimation(bm.value),
                cancel: () => currentMap.value && bm.value && currentMap.value.cancelViewAnimation(bm.value),
            })
        } else {
            bm.value && currentMap.value?.cancelViewAnimation(bm.value)
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    bm.value && currentMap.value?.cancelViewAnimation(bm.value)
    bm.value = null
})
defineExpose({
    start: () => currentMap.value && bm.value && currentMap.value.startViewAnimation(bm.value),
    cancel: () => currentMap.value && bm.value && currentMap.value.cancelViewAnimation(bm.value),
})
</script>
<script lang="ts">
export default {
    name: 'ViewAnimation',
}
</script>
