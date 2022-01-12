<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, watch } from 'vue'
import { addMapTypeControl } from '../../lib/control'
import { bindEvents, extractEmitEvents } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        anchor?: number
        offset?: [number, number]
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        anchor: 0,
        offset: () => [50, 80],
        show: true,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const emit = defineEmits({})
const isShow = computed(() => currentMap.value && props.show)
const options = computed(() => props)
const bm = ref<BMapGL.MapTypeControl | null>()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
watch(
    () => isShow.value,
    val => {
        if (val) {
            bm.value = bindEvents(addMapTypeControl(currentMap.value, options.value), extractEmitEvents(attrs), emit)
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
    name: 'MapTypeControl',
}
</script>
