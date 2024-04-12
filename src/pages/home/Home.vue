<template>
  <div class="home row col-12">
    <div class="home__dev-site col-12">
      <span>Site em Desenvolvimento</span>
    </div>

    <div class="home__welcome col-md-6 col-xs-12">
      <div class="home__welcome__text">
        <span class="home__welcome__text--t1"> What's up, I'm</span>
        <br>
        <b class="home__welcome__text--t1-bold">Mário Leite</b>.
        <br>
        <span class="home__welcome__text--t2">{{ typedText }}</span>
      </div>
    </div>

    <div class="home__img col-md-6 col-xs-12">
      <img src="../../assets/eu.png" alt="eu" />
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
  &__welcome,
  &__img {
    z-index: 1;
    position: absolute;
    height: 100%;
  }

  &__welcome {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__text {
      align-self: flex-end;
      font-size: 4.5rem;

      &--t1 {
        line-height: 1.5;

        &-bold {
          color: $mario;
        }
      }

      &--t2 {
        font-size: 2.5rem;
      }
    }
  }

  &__img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: 0;

    img {
      height: 430px;
      width: 430px;
      max-width: 95%;
      margin-left: 100px;
      border-radius: 50%;
      box-shadow: 0px 0px 55px -5px rgba(0,0,0,0.75);
      -webkit-box-shadow: 0px 0px 55px -5px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 0px 55px -5px rgba(0,0,0,0.75);
    }
  }

  &__dev-site {
    z-index: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 100px;
    bottom: 0;

    span {
      color: #961414;
      animation: blink 1s infinite alternate;
      font-size: 4rem;

      @keyframes blink {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    }
  }
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

@media only screen and (max-width: 499px) {
  .home__dev-site {
    display: none;
  }

  .home {
    &__welcome, &__img {
      height: fit-content;
      position: fixed;
      top: 25%;
    }

    &__welcome {
      justify-content: flex-end;

      &__text {
        text-align: center;
        align-self: center;
        font-size: 2.5rem;

        &--t2 {
          font-size: 1.5rem;
        }
      }
    }

    &__img {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      img {
        position: fixed;
        top: 50%;
        height: 320px;
        width: 320px;
        margin-left: initial;
      }
    }
  }
}
</style>
