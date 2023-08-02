import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Todos from "../views/Todos.vue";
import Hooks from "../views/Hooks.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
  },
  // {
  //   path: "/hooks",
  //   name: "Hooks",
  //   component: Hooks,
  // },
  {
    path: "/hooks",
    name: "Hooks",
    component: () => import('../views/Hooks.vue')
  },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;