import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import Account from "../views/Account.vue";
import Users from "../views/Account/Users.vue";
import Profile from "../views/Account/Profile.vue";
import Balance from "../views/Account/Balance.vue";
import Bets from "../views/Account/Bets.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/:pathName(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
    children:[
      {
        path:'/account',
        name:'Bets',
        component: Bets
      },
      {
        path:'/users',
        name:'Users',
        component: Users
      },
      {
        path:'/profile',
        name:'Profile',
        component: Profile
      },
      {
        path:'/balance',
        name:'Balance',
        component: Balance
      }
    ]
  },
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;