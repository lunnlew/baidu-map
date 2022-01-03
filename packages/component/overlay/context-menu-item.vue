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
  onClick?: Function,
  show?: boolean,
}>(), {
  id: '',
  width: 300,
  text: "",
  callback: undefined,
  onClick: undefined,
  show: true,
})
</script>
<script lang="ts">
export default {
  name: "ContextMenuItem",
}
</script>