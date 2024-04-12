<template>
<div class="index">
  <Home class="index__home size--page" />
  <Tools class="index__tools size--page" />
  <Contact class="index__contact size--page" />

  <div class="stars">
    <div v-for="index in 100" :key="index" class="star"></div>
  </div>
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

.stars {
  z-index: 0;
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: #000;
  overflow: hidden;

  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #fff;
    animation: move 10s infinite linear, blink 1s infinite alternate;

    @for $i from 1 through 100 {
      $randomTime: random() * 10s;
      &:nth-child(#{$i}) {
        top: random(100) + vh;
        left: random(100) + vw;
        animation-delay: $randomTime;
      }
    }
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes move {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(100vw, 100vh);
    }
  }
}
</style>
