<template>
  <div class="home col-12" style="height: 100px; width: 100%;">
    <span class="home__welcome col-md-8 col-xs-4">{{ typedText }}</span>
    <div class="home__img col-md-6 col-xs-12">
      <img src="src/assets/eu.png" alt="eu" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

let typedText = ref('')
const text = `What's up, I'm Mário Leite. Welcome to my portfolio.`
const typingSpeed = 50
let indexPage = 0

const typeWriter = () => {
  if (indexPage < text.length) {
    typedText.value += text.charAt(indexPage)
    indexPage++
  } else {
    setTimeout(() => {
      typedText.value = ''
      indexPage = 0
      typeWriter()
    }, 2000)
    return
  }
  setTimeout(typeWriter, typingSpeed)
}

onMounted(() => {
  typeWriter()
})
</script>

<style lang="scss" scoped>
.home {
  position: absolute;
  top: 20%;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
}

.home__welcome,
.home__img {
  width: 50%;
}

.home__img img {
  position: absolute;
  right: 5%;
  width: 450px;
  max-width: 100%;
  border-radius: 50%;
  margin-left: 20px;
  -webkit-box-shadow: 0px 0px 55px -5px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 55px -5px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 55px -5px rgba(0,0,0,0.75);
}

.home__welcome {
  position: absolute;
  top: 15%;
  font-size: 4rem;
  margin-left: 10%;
}
</style>

<!-- <style scoped lang="scss">
.home {
  position: absolute;
  display: flex;
  align-items: center;
  top: 30%;
  transform: translateY(-40%);

  &__img img {
    position: relative;
    border-radius: 50%;
    width: 300px;
    height: 300px;
  }

  &__welcome {
    width: 450px;
    font-size: 3.5rem;
    padding-right: 5px;
    vertical-align: middle;
    animation: blink-caret 0.75s step-end infinite;
    text-align: start;
    color: #000;
  }
}

@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #000;
  }
}
</style> -->
