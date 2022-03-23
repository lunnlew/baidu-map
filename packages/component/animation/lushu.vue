<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { addLushu, initLushu } from '../../lib/animation'
import { bindEvents, extractEmitEvents, useSlotComponentProps } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        points?: {
            lng: number
            lat: number
        }[]
        geodesic?: boolean
        autoCenter?: boolean
        defaultContent?: string
        autoView?: boolean
        speed?: number
        icon?: string
        enableRotation?: boolean
        overallView?: boolean
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        points: () => [],
        defaultContent: '',
        geodesic: false,
        autoCenter: false,
        autoView: true,
        speed: 500,
        icon: '',
        enableRotation: true,
        overallView: false,
        show: true,
        onReady: (el: any) => {},
    }
)
const emit = defineEmits({})
const attrs = useAttrs()
const slots = useSlots()
const bm = ref<{
    animation: BMapGL.LushuAnimation | null
    overlay: BMapGL.Overlay | null
    removeOverlay: Function
    overallView: (points?: BMapGL.Point[]) => void
} | null>()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
const isShow = computed(() => currentMap.value && props.show)
function clear() {
    if (bm.value) {
        bm.value.animation?.stop()
        bm.value.animation = null
        bm.value.removeOverlay()
        bm.value = null
    }
}
const MarkerIcon = useSlotComponentProps(slots, 'default', 'MarkerIcon')
const Polyline = useSlotComponentProps(slots, 'default', 'Polyline')
watch(
    () => isShow.value,
    val => {
        if (val) {
            let merge_props = { ...props, polyline: Polyline.props.value, icon: MarkerIcon.props.value || props.icon }
            initLushu().then(result => {
                bm.value = addLushu(currentMap.value, merge_props)
                bindEvents(bm.value?.animation, extractEmitEvents(attrs), emit)
                isShow.value && merge_props.overallView && bm.value?.overallView()
                emit('ready', {
                    bmobj: bm.value?.animation,
                    start: () => bm.value && bm.value?.animation?.start(),
                    stop: () => bm.value && bm.value?.animation?.stop(),
                    pause: () => bm.value && bm.value?.animation?.pause(),
                })
            })
        } else {
            clear()
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.speed,
    val => {
        bm.value &&
            bm.value?.animation?._setOptions({
                speed: val,
            })
    }
)
watch(
    () => props.overallView && isShow.value,
    val => {
        if (val) {
            bm.value && bm.value?.overallView()
        }
    }
)
onUnmounted(() => {
    clear()
})
defineExpose({
    start: () => bm.value && bm.value?.animation?.start(),
    stop: () => bm.value && bm.value?.animation?.stop(),
    pause: () => bm.value && bm.value?.animation?.pause(),
})
</script>
<script lang="ts">
export default {
    name: 'Lushu',
}
</script>
