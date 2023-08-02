import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import ExternalPlugin from "../views/ExternalPlugin.vue";
import ComponentPlugin from "../views/ComponentPlugin.vue";
import DirectivePlugin from "../views/DirectivePlugin.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/externalplugin",
    name: "ExternalPlugin",
    component: ExternalPlugin,
  },
  {
    path: "/componentplugin",
    name: "ComponentPlugin",
    component: ComponentPlugin,
  },
  {
    path: "/directiveplugin",
    name: "DirectivePlugin",
    component: DirectivePlugin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;