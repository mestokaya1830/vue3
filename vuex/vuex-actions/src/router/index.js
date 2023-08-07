import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vuexactions",
    name: "/VuexActions",
    component: () => import('../views/VuexActions.vue')
  },
  {
    path: "/vuexGetters",
    name: "/VuexGetters",
    component: () => import('../views/VuexGetters.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: () => import('../views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;