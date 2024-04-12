<template>
<q-layout view="hHh lpR fFf">
  <q-header class="header" reveal>

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

  <q-page-container class="page__container" :style="drawer ? 'padding: 0;' : ''">
    <q-page>
      <router-view />
    </q-page>
  </q-page-container>

</q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { Home, Tools } from './pages'

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
  background-color: #000;
  height: 65px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &__list {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 50px;
    font-size: 1.1rem;
    // color: $mario;

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
}

.mobile__drawer {
  z-index: 1;
  position: absolute;
  top: -10px;
  width: 100%;
  height: 128px;
  background: $mario;
  color: #fff;
  font-size: 1rem;
}

.q-item--active {
  border-radius: 5px;
  background-color: $mario;
  color: #fff;
}

@media only screen and (max-width: 499px) {
  .header {
    background: $mario;
  }

  .header__btn {
    display: flex;
    position: absolute;
    right: 20px;
    color: #fff;
  }

  .q-item--active {
    border-radius: initial;
    background-color: #6926e6;
  }
}
</style>
