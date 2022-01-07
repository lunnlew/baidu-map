<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { BMapGLRef, map, state } from '../../lib/map'
import { addLabel } from '../../lib/overlay'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        map?: BaiduMapVue3.BMapGL.Map | null
        content: string
        position: {
            lng: number
            lat: number
        }
        offset?: [number, number]
        enableMassClear?: boolean
        styles?: Object
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        content: '',
        position: () => ({
            lng: 0,
            lat: 0,
        }),
        offset: () => [0, 0],
        enableMassClear: true,
        styles: () => ({}),
        show: true,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const bm = ref<BaiduMapVue3.BMapGL.Label | null>()
const isShow = computed(() => props.show)
const options = computed(() => props)
const currentMap = computed(() => props.map || map.value)
watch(
    () => currentMap.value,
    val => {
        if (val) {
            bm.value = bindEvents(addLabel(currentMap.value, options.value), extractEmitEvents(attrs), emit)
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
    () => props.position,
    val => {
        if (bm.value && BMapGLRef.value) {
            bm.value.setPosition(new BMapGLRef.value.Point(val.lng, val.lat))
        }
    }
)
onUnmounted(() => {
    bm.value && map.value?.removeOverlay(bm.value)
    bm.value = null
})
</script>
<script lang="ts">
export default {
    name: 'Label',
}
</script>
