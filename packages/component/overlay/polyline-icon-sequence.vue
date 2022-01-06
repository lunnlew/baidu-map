<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        symbol?: string
        offset?: string
        repeat?: string
        fixedRotation?: boolean
        anchor?: [number, number]
        fillColor?: string
        fillOpacity?: number
        scale?: number
        rotation?: number
        strokeColor?: string
        strokeOpacity?: number
        strokeWeight?: number
    }>(),
    {
        symbol: '',
        offset: '100%',
        repeat: '',
        fixedRotation: true,
        anchor: () => [0, 0],
        fillColor: '',
        fillOpacity: 0.8,
        scale: 1,
        rotation: 0,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
    }
)
</script>
<script lang="ts">
export default {
    name: 'PolylineIconSequence',
}
</script>
