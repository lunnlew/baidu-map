<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { BMapGLRef, map, state } from '../../lib/map'
import { addMaker } from '../../lib/overlay'
import { mergePropsDefault, bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        point: {
            lng: number
            lat: number
        }
        offset?: [number, number]
        enableMassClear?: boolean
        enableDragging?: boolean
        enableClicking?: boolean
        raiseOnDrag?: boolean
        draggingCursor?: string
        rotation?: number
        zIndex?: number
        title?: string
        label?: string
        labelOptions?: BaiduMapVue3.BMapGL.LabelOptions
        show?: boolean
    }>(),
    {
        point: () => ({
            lng: 116.403963,
            lat: 39.915119,
        }),
        offset: () => [0, 0],
        enableMassClear: true,
        enableDragging: false,
        enableClicking: true,
        raiseOnDrag: false,
        draggingCursor: '',
        rotation: 0,
        zIndex: undefined,
        title: '',
        label: '',
        labelOptions: undefined,
        show: true,
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const bm = ref<BaiduMapVue3.BMapGL.Marker | null>()
const isShow = computed(() => props.show)
const options = computed(() => props)
watch(
    () => state.value.map_inited,
    val => {
        if (val) {
            let merge_props = { ...options.value }
            if (slots.default) {
                let MarkerIcon = slots.default().find(s => (s.type as any).name == 'MarkerIcon')
                if (MarkerIcon) {
                    let merge_icon_props = mergePropsDefault(MarkerIcon.props as any, (MarkerIcon.type as any).props)
                    if (merge_icon_props.src) {
                        ;(merge_props as any).icon = merge_icon_props
                    }
                }
            }
            bm.value = bindEvents(addMaker(props.point, merge_props), extractEmitEvents(attrs), emit)
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
watch(
    () => props.offset,
    val => {
        if (bm.value && BMapGLRef.value) {
            bm.value.setOffset(new BMapGLRef.value.Size(val[0], val[1]))
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.title,
    val => {
        if (bm.value) {
            bm.value.setTitle(val)
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.label,
    val => {
        if (bm.value && BMapGLRef.value) {
            bm.value.setLabel(new BMapGLRef.value.Label(val, props.labelOptions))
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.enableMassClear,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableMassClear()
            } else {
                bm.value.disableMassClear()
            }
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.enableDragging,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableDragging()
            } else {
                bm.value.disableDragging()
            }
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.rotation,
    val => {
        if (bm.value) {
            bm.value.setRotation(val)
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.zIndex,
    val => {
        if (bm.value) {
            bm.value.setZIndex(val)
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
    name: 'Marker',
}
</script>
