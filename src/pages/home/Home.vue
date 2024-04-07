<template>
  <div class="home" style="height: 100px; width: 100%;">
    <div class="home__welcome">
      <span> What's up, I'm <b class="b__mario">Mário Leite</b>. </span>
      <br>
      <span class="home__welcome--t2">{{ typedText }}</span>
    </div>
    <div class="home__img">
      <img src="src/assets/eu.png" alt="eu" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

let typedText = ref('')
const text = 'Welcome to my portfolio'
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

  &--t2 {
    font-size: 3rem;
  }
}

.b__mario {
  color: $mario;
}

@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #000;
  }
}

@media only screen and (max-width: 499px) {
  .home {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  .home__welcome {
    position: static;
    width: 350px;
    max-width: 95%;
    top: -45%;
    font-size: 2.5rem;
    margin: 0;
    text-align: center;
    height: 50vh;

    &--t2 {
      font-size: 1.3rem;
    }
  }

  .home__img {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
  }

  .home__img img {
    width: 100%;
    right: initial;
    max-width: 300px;
    margin-left: 0;
    position: relative;
  }

  .home__welcome::after {
    content: "|";
    animation: blink-caret 1s step-end infinite;
    font-size: 2rem;
    vertical-align: middle;
    margin-left: 5px;
  }

  @keyframes blink-caret {
    from, to {
      border-color: transparent;
    }
    50% {
      border-color: #000;
    }
  }
}
</style>
