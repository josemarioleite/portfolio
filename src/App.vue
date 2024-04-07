<template>
<q-layout view="hHh lpR fFf">
  <q-header elevated class="header">

    <template v-if="!isMobile">
      <q-list dense class="header__list">
        <q-item v-for="(item, key) in menuList" :key="key" :active="activePage === item.page" class="header__list--item">
          <q-item-section @click="setPage(item.page)">
            <span> {{ item.name }} </span>
          </q-item-section>
        </q-item>
      </q-list>
    </template>

    <template v-else>
      <q-btn
        @click="drawer = !drawer"
        class="header__btn"
        icon="menu"
        color="black"
        dense
        flat
      />
    </template>
  </q-header>

  <transition appear enter-active-class="animated fadeInDown">
    <div v-if="isMobile && drawer" class="mobile__drawer" style="margin-top: 75px;">
      <q-list dense class="menu-list text-center">
        <q-item v-for="(item, key) in menuList" :key="key" :active="activePage === item.page" class="header__list--item">
          <q-item-section @click="setPage(item.page)">
            <span> {{ item.name }} </span>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </transition>

  <q-page-container :style="drawer ? 'padding: 0;' : ''">
    <router-view />
  </q-page-container>

</q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'

interface Menu {
  icon: string;
  name: string;
  page: string
}

const menuList: Array<Menu> = [
  {
    icon: '',
    name: 'Início',
    page: 'home'
  },
  {
    icon: '',
    name: 'Sobre',
    page: 'about'
  },
  {
    icon: '',
    name: 'Ferramentas',
    page: 'tools'
  },
  {
    icon: '',
    name: 'Contato',
    page: 'contact'
  }
]

const $q = useQuasar()
const drawer = ref(false)
const activePage = ref('home')
const isMobile: boolean | undefined = $q.platform.is.mobile

const setPage = (page: string) => {
  activePage.value = page
}

defineOptions({
  name: 'App'
});
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  height: 65px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &__dev {
    height: 35px;
    width: 100px;
    border-radius: 10px;
    background-color: #5b19d6;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
  }

  &__list {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 50px;
    font-size: 1.1rem;
    color: #000;

    &--item:hover {
      cursor: pointer;
    }
  }

  &--btn {
    position: absolute;
    right: 10px;
    height: min-content;
    width: min-content;
  }

  .mobile__drawer {
    width: 100%;
    height: 194px;
  }

  .q-item--active {
    border-radius: 5px;
    color: #ffffff;
    background-color:$mario;
    -webkit-box-shadow: 3px 3px 2px 0px rgba(87,87,87,1);
    -moz-box-shadow: 3px 3px 2px 0px rgba(87,87,87,1);
    box-shadow: 3px 3px 2px 0px rgba(87,87,87,1);
  }
}

@media only screen and (max-width: 499px) {
  .header__btn {
    display: flex;
    position: absolute;
    right: 20px;
  }
}
</style>
