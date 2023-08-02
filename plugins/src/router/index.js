import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import ExternalPlugin from "../views/ExternalPlugin.vue";
import ComponentPlugin from "../views/ComponentPlugin.vue";
import DirectivePlugin from "../views/DirectivePlugin.vue";
import MixinPlugin from "../views/MixinPlugin.vue";
import ProvidePlugin from "../views/ProvidePlugin.vue";

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
  {
    path: "/mixinplugin",
    name: "MixinPlugin",
    component: MixinPlugin,
  },
  {
    path: "/provideplugin",
    name: "ProvidePlugin",
    component: ProvidePlugin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;