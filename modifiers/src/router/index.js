import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/eventmodifiers",
    name:'EventModifiers',
    component: () => import('../views/EventModifiers.vue')
  },
  {
    path: "/keymodifiers",
    name:'KeyModifiers',
    component: () => import('../views/KeyModifiers.vue')
  },
  {
    path: "/mousemodifiers",
    name:'MouseModifiers',
    component: () => import('../views/MouseModifiers.vue')
  },
  {
    path: "/:catchAll(.*)",
    name:'NotFound',
    component: () => import('../views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;