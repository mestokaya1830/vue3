import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import('../views/About.vue'),
    meta:{role:'user'}
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import('../views/Contact.vue'),
    meta:{role:'admin'}
  },
  {
    path: "/:catchAll(.*)",
    // path: "/:pathname(.*)*",
    name: "NotFound",
    component: () => import('../views/NotFound.vue'),//or use redirect
    // redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});


export default router;
