<template>
    <div style="display: none">
        <div ref="info_title">
            <slot name="title"></slot>
        </div>
        <div ref="info_content">
            <slot></slot>
        </div>
        <div ref="info_max_content">
            <slot name="max_content"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, Ref, ref, useAttrs, useSlots, watch } from 'vue'
import { addInfoWindow } from '../../lib/overlay'
import { bindEvents, extractEmitEvents } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        point: {
            lng: number
            lat: number
        }
        content: string
        maxContent?: string
        width?: number
        height?: number
        maxWidth?: number
        offset?: [number, number]
        title?: string
        enableAutoPan?: boolean
        enableMaximize?: boolean
        enableCloseOnClick?: boolean
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        point: () => ({
            lng: 0,
            lat: 0,
        }),
        content: '',
        maxContent: '',
        width: 0,
        height: 0,
        maxWidth: 0,
        offset: () => [0, 0],
        title: '',
        enableAutoPan: true,
        enableMaximize: true,
        enableCloseOnClick: true,
        show: true,
        onReady: (el: any) => {},
    }
)

const info_content = ref()
const info_max_content = ref()
const info_title = ref()
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const bm = ref<BMapGL.InfoWindow | null>()
const isShow = computed(() => currentMap.value && props.show)
const inject_map = inject<Ref<BMapGL.Map>>('map')
const currentMap = computed<BMapGL.Map | undefined>(() => props.map || inject_map?.value)
watch(
    () => isShow.value,
    val => {
        if (val) {
            let merge_props = { ...props }
            if (slots.default) {
                merge_props.content = info_content.value
            }
            // title 不支持 dom 形式
            if (slots.title) {
                merge_props.title = info_title.value?.innerHTML
            }
            bm.value = bindEvents(addInfoWindow(currentMap.value, merge_props), extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value,
            })
        } else {
            currentMap.value && currentMap.value.closeInfoWindow()
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.width,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setWidth(val)
        }
    }
)
watch(
    () => props.height,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setHeight(val)
        }
    }
)
watch(
    () => info_title.value?.innerHTML,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setTitle(val)
        }
    }
)
watch(
    () => info_content.value,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setContent(val)
        }
    }
)
watch(
    () => props.content,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setContent(val)
        }
    }
)
watch(
    () => info_max_content.value,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setMaxContent(val)
        }
    }
)
watch(
    () => props.maxContent,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setMaxContent(val)
        }
    }
)
watch(
    () => props.enableMaximize,
    val => {
        if (isShow.value) {
            bm.value && (val ? bm.value?.enableMaximize() : bm.value?.disableMaximize())
        }
    }
)
watch(
    () => props.enableCloseOnClick,
    val => {
        if (isShow.value) {
            bm.value && (val ? bm.value?.enableCloseOnClick() : bm.value?.disableCloseOnClick())
        }
    }
)
onUnmounted(() => {
    currentMap.value && currentMap.value.closeInfoWindow()
    bm.value = null
})
</script>
<script lang="ts">
export default {
    name: 'InfoWindow',
}
</script>
