<template>
  <div class="item">
    <q-carousel
      v-model="style"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      height="550px"
      class="bg-primary text-white shadow-1"
    >
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn v-if="active" size="lg" icon="man" color="orange" flat round dense @click="onClick" />
        <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
      </template>

      <q-carousel-slide name="style">
        <q-img
          class="skill__img"
          src="../../assets/langs/typescript.png"
          spinner-color="primary"
          spinner-size="82px"
        />
        <!-- <div class="q-mt-md text-center">
          {{ lorem }}
        </div> -->
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

let images = ref([])
const style = ref('style')
const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'

const loadImages = () => {
  const req: any = require
  const context = req.context('../../assets/langs', false, /\.png$/)

  images = context.keys().map(context)
}

onMounted(() => {
  loadImages()
})
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
}

.skill__img {
  z-index: 1;
  height: 96px;
  width: 96px;
}
</style>
