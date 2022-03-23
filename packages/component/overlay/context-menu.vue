<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { addContextMenu } from '../../lib/overlay'
import { bindEvents, extractEmitEvents, useSlotComponentPropsArray } from '../../utils/util'
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
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const isShow = computed(() => currentMap.value && props.show)
const bm = ref<BMapGL.ContextMenu | null>()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
const ContextMenuItemList = useSlotComponentPropsArray(slots, 'default', 'ContextMenuItem')
watch(
    () => isShow.value,
    val => {
        if (val) {
            let merge_props = {
                ...props,
                menus: ContextMenuItemList.items.value.map((m: { callback: any; onClick: any }) => ({
                    ...m,
                    callback: m.callback || m.onClick || function () {},
                })),
            }
            bm.value = bindEvents(addContextMenu(currentMap.value, merge_props), extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value,
            })
        } else {
            bm.value && currentMap.value?.removeContextMenu(bm.value)
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    bm.value && currentMap.value?.removeContextMenu(bm.value)
    bm.value = null
})
</script>
<script lang="ts">
export default {
    name: 'ContextMenu',
}
</script>
