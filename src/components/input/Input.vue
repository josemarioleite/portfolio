<template>
<q-input
  :label="Label"
  outlined
/>
</template>

<script lang="ts" setup>
interface Props {
  Label: string
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
:global(.q-field--outlined .q-field__control) {
  color: $mario;
  border-radius: 15px;
  font-family: 'monospace';
  font-size: 1.2rem;
  height: 65px;
  box-shadow: 8px 10px 8px 1px rgba(0,0,0,0.75);
  -webkit-box-shadow: 8px 10px 8px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 8px 10px 8px 1px rgba(0,0,0,0.75);
}

:global(.q-field__label) {
  color: $mario;
}
</style>
