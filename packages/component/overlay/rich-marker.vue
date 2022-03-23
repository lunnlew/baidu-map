<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, watch } from 'vue'
import { addRichMarker, initRichMarker } from '../../lib/tool'
import { bindEvents, extractEmitEvents } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        point: {
            lng: number
            lat: number
        }
        anchor?: [number, number]
        enableDragging?: boolean
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        point: () => ({
            lng: 0,
            lat: 0,
        }),
        anchor: () => [0, 0],
        enableDragging: true,
        show: true,
        onReady: (el: any) => {},
    }
)
const emit = defineEmits({})
const attrs = useAttrs()
const isShow = computed(() => props.show)
const bm = ref<BMapGL.RichMarker | null>()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
watch(
    () => currentMap.value,
    val => {
        let merge_props = { ...props }
        if (val) {
            initRichMarker().then(result => {
                bm.value = bindEvents(addRichMarker(currentMap.value, merge_props), extractEmitEvents(attrs), emit)
                emit('ready', {
                    bmobj: bm.value,
                })
                isShow.value && bm.value?.show()
            })
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
onUnmounted(() => {
    bm.value && currentMap.value?.removeOverlay(bm.value)
    bm.value = null
})
</script>
<script lang="ts">
export default {
    name: 'RichMarker',
}
</script>
