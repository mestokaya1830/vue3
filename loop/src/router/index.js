import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/loop",
    name: "Loop",
    component:() => import("../views/Loop.vue")
  },
  {
    path: "/loopfilter",
    name: "LoopFilter",
    component:() => import("../views/LoopFilter.vue")
  },
  {
    path: "/loopif",
    name: "LoopIF",
    component:() => import("../views/LoopIF.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;