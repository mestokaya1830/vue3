import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import UserDetails from "../views/UserDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/user/:id",
    name: "UserDetails",
    component: UserDetails,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;