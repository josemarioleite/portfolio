<template>
<div class="tools">
  <Skill />
</div>
</template>

<script lang="ts" setup>
import Skill from './Skill.vue'
</script>

<style lang="scss" scoped>
.tools {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
