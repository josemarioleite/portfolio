<template>
<div class="contact">

  <div class="contact__content">
    <div class="contact__content__box">
      <span class="contact__content__box--txt1">Entre em contato</span>

      <div class="contact__content__box__inputs">
        <c-input v-model="name" Label="Nome" />
        <c-input v-model="email" Label="E-mail" />
        <c-input-area v-model="description" Label="Mensagem" />

      </div>
    </div>
    <div class="contact__btn">
      <c-button @click="sendEmail" Label="Enviar" Icon="email" />
    </div>
  </div>

  <div class="contact__stars">
    <div v-for="index in 100" :key="index" class="star"></div>
  </div>

</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Email } from '../../utils/smtp'

const name = ref('E-mail de Teste')
const email = ref('emaildeteste@gmail.com')
const description = ref('exemplo de email a ser enviado')

const sendEmail = () => {
  Email.send({
    Subject: `E-MAIL (${name.value.toLocaleUpperCase()}) - CONTATO DO SITE`,
    Body: email.value.toLocaleUpperCase() + '\n' + description.value
  }).then(message => {
    console.log(message)
    alert(message)
  })
  .catch(err => console.log(err))
}
</script>

<style lang="scss" scoped>
.contact {
  position: relative;

  &__content {
    z-index: 2;
    position: absolute;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 530px;
    width: 500px;
    border-radius: 20px;
    box-shadow: 10px 10px 15px 2px rgba(52,44,124,1);
    -webkit-box-shadow: 10px 10px 15px 2px rgba(52,44,124,1);
    -moz-box-shadow: 10px 10px 15px 2px rgba(52,44,124,1);

    &__box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      &--txt1 {
        color: $mario;
        font-weight: bold;
        font-size: 2.2rem;
        margin-top: 10px;
      }

      &__inputs {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 30px;
        padding: 10px;
        width: 95%;
      }
    }
  }

  &__stars {
    z-index: 1;
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
      animation: blink 1s infinite alternate;

      @for $i from 1 through 100 {
        $random: random() * 1s;
        &:nth-child(#{$i}) {
          top: random(100) + vh;
          left: random(100) + vw;
          animation-delay: $random;
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
  }
}

.contact__btn {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 499px) {
  .contact {
    &__content {
      max-width: 95%;
      box-shadow: none;
    }
  }
}
</style>
