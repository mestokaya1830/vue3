import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: () => import('../views/Products.vue')
  },
  {
    path: "/products/:id",
    name: "Products",
    component: () => import('../views/products/_id.vue')
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue')
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