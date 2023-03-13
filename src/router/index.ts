import { createRouter, createWebHistory } from 'vue-router'
import { RouteNames, RoutePaths } from '@/router/types'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: RoutePaths.UserCreate
    },
    {
      path: RoutePaths.UserList,
      name: RouteNames.UserList,
      component: () => import('@/views/UserList.vue')
    },
    {
      path: RoutePaths.UserCreate,
      name: RouteNames.UserCreate,
      component: () => import('@/views/UserCreate.vue')
    },
    {
      path: RoutePaths.UserEdit,
      name: RouteNames.UserEdit,
      component: () => import('@/views/UserEdit.vue')
    },
    {
      path: "/:catchAll(.*)",
      component: () => import('@/views/PageNotFound.vue')
    }
  ]
})

export default router
