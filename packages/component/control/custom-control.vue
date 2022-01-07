<template>
    <div style="display: none">
        <div ref="control">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { addCustomControl } from '../../lib/control'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        map?: BaiduMapVue3.BMapGL.Map | null
        dom?: HTMLElement
        anchor?: number
        offset?: [number, number]
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        dom: undefined,
        anchor: 0,
        offset: () => [50, 80],
        show: true,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const slots = useSlots()
const control = ref()
const emit = defineEmits({})
const isShow = computed(() => currentMap.value && props.show)
const options = computed(() => props)
const bm = ref<BaiduMapVue3.BMapGL.Control | null>()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
watch(
    () => isShow.value,
    val => {
        if (val) {
            let merge_props = { ...options.value }
            if (slots.default) {
                merge_props.dom = control.value
            }
            bm.value = bindEvents(addCustomControl(currentMap.value, merge_props), extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value,
            })
        } else {
            bm.value && currentMap.value?.removeControl(bm.value)
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    bm.value && currentMap.value?.removeControl(bm.value)
    bm.value = null
})
</script>
<script lang="ts">
export default {
    name: 'Marker',
}
</script>
