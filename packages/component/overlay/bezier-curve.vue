<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, watch } from 'vue'
import { addBezierCurve } from '../../lib/overlay'
import { bindEvents, extractEmitEvents } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        points: {
            lng: number
            lat: number
        }[]
        controlPoints: [
            [
                {
                    lng: number
                    lat: number
                },
                {
                    lng: number
                    lat: number
                }
            ],
            [
                {
                    lng: number
                    lat: number
                }
            ]
        ]
        overallView?: boolean
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        points: () => [],
        controlPoints: () => [
            [
                {
                    lng: 0,
                    lat: 0,
                },
                {
                    lng: 0,
                    lat: 0,
                },
            ],
            [
                {
                    lng: 0,
                    lat: 0,
                },
            ],
        ],
        overallView: false,
        show: true,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const emit = defineEmits({})
const bm = ref<{
    bc: BMapGL.BezierCurve | null
    removeOverlay: Function
    overallView: (points?: BMapGL.Point[]) => void
} | null>()
const isShow = computed(() => props.show && props.points.length > 0)
const options = computed(() => props)
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
watch(
    () => currentMap.value,
    val => {
        if (val) {
            bm.value = addBezierCurve(currentMap.value, options.value)
            bindEvents(bm.value?.bc, extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value?.bc,
            })
            isShow.value && bm.value?.bc?.show()
            isShow.value && options.value.overallView && bm.value?.overallView()
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
            bm.value && bm.value.bc?.show()
        } else {
            bm.value && bm.value.bc?.hide()
        }
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
    if (bm.value) {
        bm.value.removeOverlay(bm.value.bc)
        bm.value.bc = null
        bm.value = null
    }
})
</script>
<script lang="ts">
export default {
    name: 'BezierCurve',
}
</script>
