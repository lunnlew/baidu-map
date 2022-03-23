<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { useAttrs, useSlots, watch, computed, ref, onUnmounted, inject } from 'vue'
import { addGroundOverlay } from '../../lib/overlay'
import { bindEvents, extractEmitEvents, useSlotComponentProps } from '../../utils/util'
import { BMapGLRef } from '../../lib/map'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        startPoint: {
            lng: number
            lat: number
        }
        endPoint: {
            lng: number
            lat: number
        }
        bounds?: [
            {
                lng: number
                lat: number
            },
            {
                lng: number
                lat: number
            }
        ]
        type?: string
        opacity?: number
        url?: string
        show?: boolean
        displayOnMinLevel?: number
        dispalyOnMaxLevel?: number
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        startPoint: () => ({
            lng: 0,
            lat: 0,
        }),
        endPoint: () => ({
            lng: 0,
            lat: 0,
        }),
        bounds: () => [
            {
                lng: 0,
                lat: 0,
            },
            {
                lng: 0,
                lat: 0,
            },
        ],
        type: 'image',
        opacity: 0.8,
        url: '',
        show: true,
        displayOnMinLevel: 5,
        dispalyOnMaxLevel: 13,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const isShow = computed(() => props.show)
const bm = ref<BMapGL.GroundOverlay | null>()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
const GroundOverlayImage = useSlotComponentProps(slots, 'default', 'GroundOverlayImage')
watch(
    () => currentMap.value,
    val => {
        if (val) {
            let merge_props = { ...props, ...GroundOverlayImage.props.value }
            bm.value = bindEvents(
                addGroundOverlay(currentMap.value, props.startPoint, props.endPoint, merge_props),
                extractEmitEvents(attrs),
                emit
            )
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
    () => props.url,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setImageURL(val)
        }
    }
)
watch(
    () => props.opacity,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setOpacity(val)
        }
    }
)
watch(
    () => props.displayOnMinLevel,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setDisplayOnMinLevel(val)
        }
    }
)
watch(
    () => props.dispalyOnMaxLevel,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setDispalyOnMaxLevel(val)
        }
    }
)
watch(
    () => props.startPoint,
    val => {
        if (isShow.value) {
            if (BMapGLRef.value) {
                bm.value &&
                    bm.value?.setBounds(
                        new BMapGLRef.value.Bounds(
                            new BMapGLRef.value.Point(props.startPoint.lng, props.endPoint.lat),
                            new BMapGLRef.value.Point(props.endPoint.lng, props.startPoint.lat)
                        )
                    )
            }
        }
    }
)
watch(
    () => props.endPoint,
    val => {
        if (isShow.value) {
            if (BMapGLRef.value) {
                bm.value &&
                    bm.value?.setBounds(
                        new BMapGLRef.value.Bounds(
                            new BMapGLRef.value.Point(props.startPoint.lng, props.endPoint.lat),
                            new BMapGLRef.value.Point(props.endPoint.lng, props.startPoint.lat)
                        )
                    )
            }
        }
    }
)
watch(
    () => props.bounds,
    val => {
        if (isShow.value) {
            if (BMapGLRef.value) {
                bm.value &&
                    bm.value?.setBounds(
                        new BMapGLRef.value.Bounds(
                            new BMapGLRef.value.Point(props.bounds[0].lng, props.bounds[1].lat),
                            new BMapGLRef.value.Point(props.bounds[1].lng, props.bounds[0].lat)
                        )
                    )
            }
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
    name: 'GroundOverlay',
}
</script>
