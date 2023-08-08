import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mapgetters",
    name: "/MapGetters",
    component: () => import('../views/MapGetters.vue')
  },
  {
    path: "/mapmutations",
    name: "/MapMutations",
    component: () => import('../views/MapMutations.vue')
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