<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { addCityBoundary, initBoundariesResult } from '../../lib/overlay'
import { bindEvents, extractEmitEvents, useSlotComponentProps } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        name: string
        overallView?: boolean
        firstLoad?: boolean
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        name: '北京市',
        overallView: false,
        firstLoad: true,
        show: true,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const isShow = computed(() => props.show)
const bm = ref<{
    boundary: BMapGL.Boundary | null
    overlay: BMapGL.Overlay | null
    removeOverlay: Function
    overallView: (points?: BMapGL.Point[]) => void
} | null>()
const boundaries_result = ref<{
    boundary: BMapGL.Boundary
    rs: {
        boundaries: string[]
    }
}>()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)

const need_init_load = computed(() => currentMap.value && props.firstLoad)
watch(
    () => need_init_load.value && currentMap.value,
    async () => {
        boundaries_result.value = await initBoundariesResult(currentMap.value, props.name)
        bindEvents(boundaries_result.value?.boundary, extractEmitEvents(attrs), emit)
    },
    {
        immediate: true,
    }
)
const Polygon = useSlotComponentProps(slots, 'default', 'Polygon')

async function loadBoundary() {
    if (bm.value?.overlay) {
        currentMap.value?.removeOverlay(bm.value?.overlay as BMapGL.Overlay)
        bm.value.overlay = null
    }
    let merge_props = { ...props, polygon: Polygon.props.value }
    bm.value = await addCityBoundary(currentMap.value, props.name, merge_props, boundaries_result.value)
    emit('ready', {
        bmobj: bm.value,
    })
    isShow.value && bm.value?.overlay?.show()
    isShow.value && merge_props.overallView && bm.value?.overallView()
}

watch(
    () => currentMap.value,
    async val => {
        if (val) {
            loadBoundary()
        }
    },
    {
        immediate: true,
    }
)

watch(
    () => isShow.value && currentMap.value,
    val => {
        if (val) {
            bm.value?.overlay?.show()
        } else {
            bm.value?.overlay?.hide()
        }
    },
    {
        immediate: true,
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

watch(
    () => props.name,
    () => {
        loadBoundary()
    }
)

onUnmounted(() => {
    if (bm.value) {
        bm.value.removeOverlay()
        bm.value.boundary = null
        bm.value.overlay = null
        bm.value = null
    }
})
</script>
<script lang="ts">
export default {
    name: 'CityBoundary',
}
</script>
