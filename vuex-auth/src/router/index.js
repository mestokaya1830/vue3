import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import ProductDetails from "../views/products/_id.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/products/:id",
    name: "ProductDetails",
    component: ProductDetails
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;