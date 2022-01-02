<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{
  id?: string,
  width?: number,
  text?: string,
  callback?: Function,
  show?: boolean,
}>(), {
  id: '',
  width: 300,
  text: "",
  callback: () => { },
  show: true,
})
</script>
<script lang="ts">
export default {
  name: "ContextMenuItem",
}
</script>