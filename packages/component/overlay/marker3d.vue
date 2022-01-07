<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { BMapGLRef, map, state } from '../../lib/map'
import { addMaker3D } from '../../lib/overlay'
import { mergePropsDefault, bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        map?: BaiduMapVue3.BMapGL.Map | null
        point: {
            lng: number
            lat: number
        }
        height?: number
        size?: number
        shape?: number
        fillColor?: string
        fillOpacity?: number
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        point: () => ({
            lng: 116.403963,
            lat: 39.915119,
        }),
        height: 200,
        size: 50,
        shape: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.8,
        show: true,
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const bm = ref<BaiduMapVue3.BMapGL.Marker3D | null>()
const isShow = computed(() => props.show)
const options = computed(() => props)
const currentMap = computed(() => props.map || map.value)
/**
 * 3D点标记 对于bm.show(), bm.hide()支持不良好，目前通过创建方法和删除方法来实现
 */
watch(
    () => isShow.value && currentMap.value,
    val => {
        if (val) {
            let merge_props = { ...options.value }
            if (slots.default) {
                let Marker3DIcon = slots.default().find(s => (s.type as any).name == 'Marker3DIcon')
                if (Marker3DIcon) {
                    let merge_icon_props = mergePropsDefault(
                        Marker3DIcon.props as any,
                        (Marker3DIcon.type as any).props
                    )
                    if (merge_icon_props.src) {
                        ;(merge_props as any).icon = merge_icon_props
                    }
                }
            }
            bm.value = bindEvents(
                addMaker3D(currentMap.value, props.point, merge_props),
                extractEmitEvents(attrs),
                emit
            )
            emit('ready', {
                bmobj: bm.value,
            })
        } else {
            bm.value && map.value?.removeOverlay(bm.value)
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.point,
    val => {
        if (bm.value && BMapGLRef.value) {
            bm.value.setPosition(new BMapGLRef.value.Point(val.lng, val.lat))
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
</script>
<script lang="ts">
export default {
    name: 'Marker3D',
}
</script>
