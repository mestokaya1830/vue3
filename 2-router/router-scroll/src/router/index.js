import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    scrollPos: {
      top: 300,
      left: 0,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/:catchAll(.*)",
    // path: "/:pathname(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"), //or use redirect
    // redirect: '/'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",

  //for all
  // scrollBehavior(to, from) {
  //   return {
  //     top: 0,
  //     behavior: 'smooth'
  //   }
  // },

  //savedposition is running with back button
  // scrollBehavior(to, from, savedPosition) {
  //   console.log(savedPosition)
  //   if(savedPosition){
  //     return savedPosition
  //   } else {
  //     return {
  //       top: 0,
  //       behavior: 'smooth'
  //     }
  //   }
  // },

  //route strict
  // scrollBehavior(to, from) {
  //   console.log(to, from);
  //   if(to.name == 'Home'){
  //     return null
  //   } else {
  //     return {
  //       top: 0,
  //       behavior: 'smooth'
  //     }
  //   }
  // },

  //to ancher
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition){
      return savedPosition
    } else if (to.hash) {
      return {
        top:document.querySelector(to.hash).offsetTop,
        behavior: 'smooth'
      }
    }
  },
});

export default router;
