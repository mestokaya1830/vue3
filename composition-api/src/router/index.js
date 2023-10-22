import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hooks",
    name: "Hooks",
    component: () => import('@/views/Hooks.vue'),
  },
  {
    path: "/refs",
    name: "Refs",
    component: () => import('@/views/Refs.vue'),
  },
  {
    path: "/fetch",
    name: "Fetch",
    component: () => import('@/views/Fetch.vue'),
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
    path: "/directive",
    name: "Directive",
    component: () => import('@/views/Directive.vue'),
  },
  {
    path: "/routeparam",
    name: "RouteParam",
    component: () => import('@/views/RouteParam.vue'),
  },
  {
    path: "/teleport",
    name: "Teleport",
    component: () => import('@/views/Teleport.vue'),
  },
  {
    path: "/childcomponent",
    name: "ChildComponent",
    component: () => import('@/views/ChildComponent.vue'),
  },
  {
    path: "/nexttick",
    name: "NextTick",
    component: () => import('@/views/NextTick.vue'),
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
