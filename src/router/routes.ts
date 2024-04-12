import { RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/Index.vue') ,
  }
]

export default routes
