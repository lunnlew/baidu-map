<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: string
  opacity?: number
  url?: string
}>(), {
  type: "image",
  opacity: 0.8,
  url: "",
})
</script>
<script lang="ts">
export default {
  name: "GroundOverlayImage",
}
</script>