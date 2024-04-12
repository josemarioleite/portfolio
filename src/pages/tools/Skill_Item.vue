<template>
<div class="skill-item">
  <span class="text-white q-pb-md">{{ text }}</span>
  <q-img
    :src="Image"
    class="skill-item__img"
    spinner-color="primary"
    spinner-size="82px"
  />
</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  Image: string
}

const props = defineProps<Props>()

const text = computed(() => {
  let name = ''
  const nameSkill = props.Image.replace('/src/assets/langs/', '').replace('.png', '')

  switch (nameSkill) {
    case 'xamarin':
      name = 'Xamarin'
      break;
    case 'vuejs':
      name = 'Vue.js'
      break;
    case 'csharp':
      name = 'C# (.NET)'
      break;
    case 'css':
      name = 'Css'
      break;
    case 'docker':
      name = 'Docker'
      break;
    case 'html':
      name = 'HTML5'
      break;
    case 'java':
      name = 'Java'
      break;
    case 'javascript':
      name = 'Javascript'
      break;
    case 'mongodb':
      name = 'MongoDB'
      break;
    case 'mysql':
      name = 'MySQL'
      break;
    case 'node':
      name = 'Node.js'
      break;
    case 'openai':
      name = 'OpenAI (gpt)'
      break;
    case 'postgres':
      name = 'Postgres'
      break;
    case 'powerbi':
      name = 'PowerBI'
      break;
    case 'scrum':
      name = 'Scrum'
      break;
    case 'sql':
      name = 'SQL'
      break;
    case 'typescript':
      name = 'Typescript'
      break;
    case 'fluter':
      name = 'Flutter'
      break;
    default:
      name = ''
      break;
  }
  return name
})
</script>

<style lang="scss" scoped>
.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  min-width: 170px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #000;

  &__img {
    width: 140px;
    height: 140px;
    animation: pulo 2s ease-in-out 0s infinite, giro 2s linear 0s infinite;
    animation: giro 2s linear infinite;
    animation-delay: 3s;
  }
}

.skill-item:hover {
  z-index: 1;
  background: $primary;
  cursor: pointer;
}
</style>
