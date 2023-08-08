import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/computed",
    name: "Computed",
    component: () => import('../views/Computed.vue')
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import('../views/NotFound.vue'),
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;