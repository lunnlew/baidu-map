<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch } from 'vue'
import { map, state } from '../../lib/map'
import { addBezierCurve } from '../../lib/overlay'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
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
    }>(),
    {
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
    }
)
const attrs = useAttrs()
const emit = defineEmits({})
const bm = ref<BaiduMapVue3.BMapGL.BezierCurve | null>()
const isShow = computed(() => props.show && props.points.length > 0)
const options = computed(() => props)
watch(
    () => state.value.map_inited,
    val => {
        if (val) {
            bm.value = bindEvents(addBezierCurve(options.value), extractEmitEvents(attrs), emit)
            isShow.value && bm.value?.show()
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
    name: 'BezierCurve',
}
</script>
