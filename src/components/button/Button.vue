<template>
<q-btn
  class="btn"
  :icon="Icon"
  :label="Label"
/>
</template>

<script lang="ts" setup>
interface Props {
  Label: string
  Icon: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.btn {
  width: 120px;
  height: 40px;
  background: $mario;
  color: #fff;
  border-radius: 5px;
}
</style>
