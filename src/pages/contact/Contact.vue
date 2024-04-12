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
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { Email } from '../../utils/smtp'

const name = ref('')
const email = ref('')
const description = ref('')

const sendEmail = () => {
  alert('Infelizmente ainda não está funcionando, mas você me chamar em alguma rede social')
  // Email.send({
  //   Subject: `E-MAIL (${name.value.toLocaleUpperCase()}) - CONTATO DO SITE`,
  //   Body: email.value.toLocaleUpperCase() + '\n' + description.value
  // }).then(message => {
  //   console.log(message)
  //   alert(message)
  // })
  // .catch(err => console.log(err))
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
    box-shadow: 10px 10px 15px 2px $mario;
    -webkit-box-shadow: 10px 10px 15px 2px $mario;
    -moz-box-shadow: 10px 10px 15px 2px $mario;

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
