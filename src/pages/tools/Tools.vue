<template>
<div class="tools">
  <Skill class="tools__skill" />
</div>
</template>

<script lang="ts" setup>
import Skill from './Skill.vue'
</script>

<style lang="scss" scoped>
.tools {
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px;

  &__skill {
    padding: 10px;
    border-radius: 10px;
  }
}
</style>
