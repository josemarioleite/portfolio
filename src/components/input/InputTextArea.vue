<template>
<q-input
  :label="Label"
  no-autogrow
  placeholder="Deixe aqui seu recado..."
  type="textarea"
  class="no-autogrow"
  input-class="c-textarea"
/>
</template>

<script lang="ts" setup>
interface Props {
  Label: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
:global(.q-field__control .c-textarea) {
  margin: 0 10px 0 10px;
  flex-wrap: wrap;
  margin-top: 10px;
  font-size: 1rem;
}

.q-field {
  border: 1px solid #ccc;
  border-radius: 15px;
  font-family: 'monospace';
  padding: 0 10px 1px 10px;
  box-shadow: 8px 10px 8px 1px rgba(0,0,0,0.75);
  -webkit-box-shadow: 8px 10px 8px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 8px 10px 8px 1px rgba(0,0,0,0.75);
}

:global(.no-autogrow .q-field__native) {
  resize: none;
}
</style>
