import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/counter",
    name: "Counter",
    component: () => import('@/views/Counter.vue'),
  },
  {
    path: "/reactive",
    name: "Reactive",
    component: () => import('@/views/Reactive.vue'),
  },
  {
    path: "/computed",
    name: "Computed",
    component: () => import('@/views/Computed.vue'),
  },
  {
    path: "/watch",
    name: "Watch",
    component: () => import('@/views/Watch.vue'),
  },
  {
    path: "/:catchAll(.*)",
    name:'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;
