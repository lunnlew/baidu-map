<template>
    <div ref="container">
        <slot v-bind:points="points"></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch } from 'vue'
import { BMapGLRef, state } from '../../lib/map'
import { addDrivingRoute } from '../../lib/tool'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        location?:
            | string
            | {
                  lat: number
                  lng: number
              }
            | Object
        start?:
            | {
                  lat: number
                  lng: number
              }
            | Object
        end?:
            | {
                  lat: number
                  lng: number
              }
            | Object
        renderOptions?: {
            map?: Object
            panel?: string | HTMLElement
            selectFirstResult?: boolean
            autoViewport?: boolean
        }
        policy?: number
        onSearchComplete?: Function
        onMarkersSet?: Function
        onInfoHtmlSet?: Function
        onPolylinesSet?: Function
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        location: undefined,
        start: undefined,
        end: undefined,
        renderOptions: undefined,
        policy: 0,
        onSearchComplete: () => {},
        onMarkersSet: () => {},
        onInfoHtmlSet: () => {},
        onPolylinesSet: () => {},
        show: true,
        onReady: (el: any) => {},
    }
)
const emit = defineEmits({})
const attrs = useAttrs()
const isShow = computed(() => state.value.map_inited && props.show)
const options = computed(() => props)
const bm = ref<BaiduMapVue3.BMapGL.DrivingRoute | null>()
watch(
    () => isShow.value,
    val => {
        let merge_props = { ...options.value }
        if (val) {
            // 自定义选择路线结果
            merge_props.onSearchComplete = function (e: any) {
                if (typeof props.onSearchComplete === 'function') {
                    let result = props.onSearchComplete(bm.value, e)
                    points.value = result.points
                }
            }
            bm.value = bindEvents(addDrivingRoute(merge_props), extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value,
                search: () => {
                    if (BMapGLRef.value && bm.value) {
                        let start = props.start
                        let end = props.end
                        if ('lng' in props.start && 'lat' in props.start) {
                            start = new BMapGLRef.value.Point(props.start.lng, props.start.lat)
                        }
                        if ('lng' in props.end && 'lat' in props.end) {
                            end = new BMapGLRef.value.Point(props.end.lng, props.end.lat)
                        }
                        bm.value.search(start as any, end as any)
                    }
                },
            })
        } else {
            bm.value && bm.value.clearResults()
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
const points = ref([])
onUnmounted(() => {
    bm.value && bm.value.clearResults()
    bm.value = null
})
defineExpose({
    bmobj: bm.value,
    search: () => {
        if (BMapGLRef.value && bm.value) {
            let start = props.start
            let end = props.end
            if ('lng' in props.start && 'lat' in props.start) {
                start = new BMapGLRef.value.Point(props.start.lng, props.start.lat)
            }
            if ('lng' in props.end && 'lat' in props.end) {
                end = new BMapGLRef.value.Point(props.end.lng, props.end.lat)
            }
            bm.value.search(start as any, end as any)
        }
    },
})
</script>
<script lang="ts">
export default {
    name: 'DrivingRoute',
}
</script>
