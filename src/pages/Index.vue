<template>
<div class="index">
  <Home class="index__home size--page" />
  <!-- <Tools class="index__tools size--page" /> -->
  <Contact class="index__contact size--page" />
</div>
</template>

<script setup lang="ts">
import { Home, Tools, Contact } from './index'
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
}

.size--page {
  height: 100vh;
  position: relative;
}
</style>
