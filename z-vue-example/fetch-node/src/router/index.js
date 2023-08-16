import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path:'/users',
      name:'UsersView',
      component: () => import('../views/UsersView.vue')
    },
    {
      path:'/users/:id',
      name:'UsersDetails',
      component: () => import('../views/UsersDetailsView.vue')
    },
    {
      path:'/:catchAll(.*)',
      name:'NotFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
