<template>
    <div style="display: none">
        <div ref="info_title">
            <slot name="title"></slot>
        </div>
        <div ref="info_content">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { map, state } from '../../lib/map'
import { addInfoWindow } from '../../lib/overlay'
import { bindEvents, extractEmitEvents } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        point: {
            lng: number
            lat: number
        }
        content: string
        width?: number
        height?: number
        maxWidth?: number
        offset?: [number, number]
        title?: string
        enableAutoPan?: boolean
        enableMaximize?: boolean
        enableCloseOnClick?: boolean
        show?: boolean
    }>(),
    {
        point: () => ({
            lng: 0,
            lat: 0,
        }),
        content: '',
        width: 0,
        height: 0,
        maxWidth: 0,
        offset: () => [0, 0],
        title: '',
        enableAutoPan: true,
        enableMaximize: true,
        enableCloseOnClick: true,
        show: true,
    }
)

const info_content = ref()
const info_title = ref()
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const bm = ref()
const isShow = computed(() => state.value.inited && props.show)
const options = computed(() => props)
watch(
    () => isShow.value,
    val => {
        if (val) {
            let merge_props = { ...options.value }
            if (slots.default) {
                merge_props.content = info_content.value
            }
            // title 不支持 dom 形式
            if (slots.title) {
                merge_props.title = info_title.value?.innerHTML
            }
            bm.value = bindEvents(addInfoWindow(merge_props), extractEmitEvents(attrs), emit)
        } else {
            map.value && map.value.closeInfoWindow()
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
        console.log('point changed', val)
    },
    {
        deep: true,
    }
)
onUnmounted(() => {
    map.value && map.value.closeInfoWindow()
    bm.value = null
})
defineExpose({
    bmobj: bm.value,
})
</script>
<script lang="ts">
export default {
    name: 'InfoWindow',
}
</script>
