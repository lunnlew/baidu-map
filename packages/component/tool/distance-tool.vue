<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, watch } from 'vue'
import { addDistanceTool, initDistanceTool } from '../../lib/tool'
import { bindEvents, extractEmitEvents } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        show: true,
        onReady: (el: any) => {},
    }
)
/**
 * 使用时建议禁用 Map enableMapClick
 */
const emit = defineEmits({})
const attrs = useAttrs()
const isShow = computed(() => currentMap.value && props.show)
const options = computed(() => props)
const bm = ref<BMapGL.DistanceTool | null>()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
watch(
    () => isShow.value,
    val => {
        let merge_props = { ...options.value }
        if (val) {
            initDistanceTool().then(result => {
                bm.value = bindEvents(addDistanceTool(currentMap.value, merge_props), extractEmitEvents(attrs), emit)
                emit('ready', {
                    bmobj: bm.value,
                    open: () => bm.value && bm.value.open(),
                    close: () => bm.value && bm.value.close(),
                })
            })
        } else {
            bm.value && bm.value.close()
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    bm.value && bm.value.close()
    bm.value = null
})
defineExpose({
    open: () => bm.value && bm.value.open(),
    close: () => bm.value && bm.value.close(),
})
</script>
<script lang="ts">
export default {
    name: 'DistanceTool',
}
</script>
