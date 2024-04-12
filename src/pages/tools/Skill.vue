<template>
<div class="skill">
  <!-- <q-img
    class="skill__img"
    src="../../assets/langs/typescript.png"
    spinner-color="primary"
    spinner-size="82px"
  />

  <span> Typescript </span> -->
  <SkillItem />
</div>
</template>

<script lang="ts" setup>
import SkillItem from './Skill_Item.vue'
</script>

<style lang="scss" scoped>
.skill {
  height: max-content;
  width: 100%;
}
// .skill {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 150px;
//   width: 120px;
//   border-radius: 5px 5px 25px 25px;
//   border: 1px solid #ccc;

//   span {
//     margin-top: 5px;
//     color: #fff;
//   }

//   &__img {
//     width: 96px;
//     height: 96px;
//   }
// }
</style>
