<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { BMapGLRef } from '../../lib/map'
import { addMaker } from '../../lib/overlay'
import { bindEvents, extractEmitEvents, useSlotComponentProps } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
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
        icon?: string
        rotation?: number
        zIndex?: number
        title?: string
        label?: string
        labelOptions?: {
            offset?: [number, number]
            position?: {
                lng: number
                lat: number
            }
            enableMassClear?: boolean
            styles?: object
        }
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
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
        icon: '',
        rotation: 0,
        zIndex: undefined,
        title: '',
        label: '',
        labelOptions: () => ({
            offset: [0, 0],
            position: {
                lng: 116.403963,
                lat: 39.915119,
            },
            enableMassClear: true,
            styles: {},
        }),
        show: true,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const bm = ref<BMapGL.Marker | null>()
const isShow = computed(() => props.show)
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
const MarkerIcon = useSlotComponentProps(slots, 'default', 'MarkerIcon')
watch(
    () => currentMap.value,
    val => {
        if (val) {
            let merge_props = { ...props, icon: MarkerIcon.props.value || props.icon }
            bm.value = bindEvents(addMaker(currentMap.value, props.point, merge_props), extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value,
            })
            isShow.value && bm.value?.show()
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
    }
)
watch(
    () => props.offset,
    val => {
        if (bm.value && BMapGLRef.value) {
            bm.value.setOffset(new BMapGLRef.value.Size(val[0], val[1]))
        }
    }
)
watch(
    () => props.title,
    val => {
        if (bm.value) {
            bm.value.setTitle(val)
        }
    }
)
watch(
    () => props.label,
    val => {
        if (bm.value && BMapGLRef.value) {
            if (val) {
                let labelOptions = props.labelOptions as any
                if (labelOptions?.position) {
                    let p = labelOptions?.position
                    labelOptions.position = new BMapGLRef.value.Point(p.lng, p.lat)
                }
                if (labelOptions?.offset) {
                    let o = labelOptions?.offset || [0, 0]
                    labelOptions.offset = new BMapGLRef.value.Size(o[0] || 0, o[1] || 0)
                }
                bm.value.setLabel(new BMapGLRef.value.Label(props.label, labelOptions))
            }
        }
    }
)
watch(
    () => props.labelOptions,
    val => {
        if (bm.value && BMapGLRef.value) {
            if (props.label) {
                let labelOptions = props.labelOptions as any
                if (labelOptions?.position) {
                    let p = labelOptions?.position
                    labelOptions.position = new BMapGLRef.value.Point(p.lng, p.lat)
                }
                if (labelOptions?.offset) {
                    let o = labelOptions?.offset || [0, 0]
                    labelOptions.offset = new BMapGLRef.value.Size(o[0] || 0, o[1] || 0)
                }
                bm.value.setLabel(new BMapGLRef.value.Label(props.label, labelOptions))
            }
        }
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
    }
)
watch(
    () => props.rotation,
    val => {
        if (bm.value) {
            bm.value.setRotation(val)
        }
    }
)
watch(
    () => props.zIndex,
    val => {
        if (bm.value) {
            bm.value.setZIndex(val)
        }
    }
)
onUnmounted(() => {
    bm.value && currentMap.value?.removeOverlay(bm.value)
    bm.value = null
})
</script>
<script lang="ts">
export default {
    name: 'Marker',
}
</script>
