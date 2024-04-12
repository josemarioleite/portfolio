<template>
<div class="page" style="width: 100%">
  <span class="name__skill">Skills</span>
  <div class="slider-container" ref="slider">
    <div class="skill">
      <template v-for="(image, key) in images" :key="key">
        <SkillItem :Image="image" />
      </template>
    </div>

  </div>

  <div class="col-12 row justify-center" style="margin-top: 100px;">
    <q-btn color="primary" icon="arrow_left" @click="handlePrevious" />
    <q-btn color="primary" icon="arrow_right" @click="handleNext" />
  </div>
</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SkillItem from './Skill_Item.vue'

import typescript from '../../assets/langs/typescript.png'
import csharp from '../../assets/langs/csharp.png'
import css from '../../assets/langs/css.png'
import docker from '../../assets/langs/docker.png'
import flutter from '../../assets/langs/flutter.png'
import html from '../../assets/langs/html.png'
import java from '../../assets/langs/java.png'
import javascript from '../../assets/langs/javascript.png'
import mongodb from '../../assets/langs/mongodb.png'
import mysql from '../../assets/langs/mysql.png'
import node from '../../assets/langs/node.png'
import openai from '../../assets/langs/openai.png'
import postgres from '../../assets/langs/postgres.png'
import powerbi from '../../assets/langs/powerbi.png'
import scrum from '../../assets/langs/scrum.png'
import sql from '../../assets/langs/sql.png'
import vuejs from '../../assets/langs/vuejs.png'
import xamarin from '../../assets/langs/xamarin.png'

const slider = ref<HTMLDivElement | null>(null)
const images = ref([
  typescript, csharp, css, docker, flutter,
  html, java, javascript, mongodb, mysql,
  node, openai, postgres, powerbi, scrum,
  sql, vuejs, xamarin
])

let intervalId: number | null = null
const slideWidth = 300
const slideDuration = 1000

const startSliding = () => {
  if (slider.value) {
    intervalId = window.setInterval(() => {
      slider.value!.scrollLeft += slideWidth
    }, slideDuration)
  }
}

const handleNext = () => {
  if (slider.value) {
    slider.value.scrollLeft += slideWidth;
  }
}

const handlePrevious = () => {
  if (slider.value) {
    slider.value.scrollLeft -= slideWidth;
  }
}

onMounted(() => {
  startSliding()
})

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})
</script>

<style lang="scss" scoped>
// .page {
//   border: 1px solid #ccc;
//   padding: 10px;
// }

.slider-container {
  overflow: hidden;
  width: 100%;
}

.skill {
  display: flex;
  gap: 20px;
  transition: all 0.9s linear;
}

.skill::after {
  content: '';
}

button {
  margin: 10px;
  padding: 5px 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.name__skill {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 100px;
  width: 100%;
  font-size: 3rem;
  color: #fff;
}
</style>
