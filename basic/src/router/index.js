import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/binding",
    name: "Binding",
    component: () => import("../views/Binding.vue")
  },
  {
    path: "/flow",
    name: "Flow",
    component: () => import("../views/Flow.vue")
  },
  {
    path: "/loopif",
    name: "LoopIf",
    component: () => import("../views/LoopIf.vue")
  },
  {
    path: "/loop",
    name: "Loop",
    component: () => import("../views/Loop.vue")
  },
  {
    path: "/loopfilter",
    name: "LoopFilter",
    component: () => import("../views/LoopFilter.vue")
  },
  {
    path: "/methods",
    name: "Methods",
    component: () => import("../views/Methods.vue")
  },
  {
    path: "/events",
    name: "Events",
    component: () => import("../views/Events.vue")
  },
  {
    path: "/form",
    name: "Form",
    component: () => import("../views/Form.vue")
  },
  {
    path: "/formcheckbox",
    name: "FormCheckbox",
    component: () => import("../views/FormCheckbox.vue")
  },
  {
    path: "/formradio",
    name: "FormRadio",
    component: () => import("../views/FormRadio.vue")
  },
  {
    path: "/modifiers",
    name: "Modifiers",
    component: () => import("../views/Modifiers.vue")
  },
  {
    path: "/computed",
    name: "Computed",
    component: () => import("../views/Computed.vue")
  },
  {
    path: "/watcher",
    name: "Watcher",
    component: () => import("../views/Watcher.vue")
  },
  {
    path: "/component",
    name: "Component",
    component: () => import("../views/Component.vue")
  },
  {
    path: "/componentprop",
    name: "ComponentProp",
    component:() => import("../views/ComponentProp.vue")
  },
  {
    path: "/componentpropdynamic",
    name: "ComponentPropDynamic",
    component: () => import("../views/ComponentPropDynamic.vue")
  },
  {
    path: "/slot",
    name: "Slot",
    component: () => import("../views/Slot.vue")
  },
  {
    path: "/provideinject",
    name: "ProvideInjectde",
    component: () => import("../views/ProvideInject.vue")
  },
  {
    path: "/componentevent",
    name: "ComponentEvent",
    component: () => import("../views/ComponentEvent.vue")
  },
  {
    path: "/lazycomponent",
    name: "LazyComponent",
    component: () => import("../views/LazyComponent.vue")
  },
  {
    path: "/httprequest",
    name: "HttpRequest",
    component: () => import("../views/HttpRequest.vue")
  },
  {
    path: "/getlocalfile",
    name: "GetLocalFile",
    component: () => import("../views/GetLocalFile.vue")
  },
  {
    path: "/refs",
    name: "Refs",
    component: () => import("../views/Refs.vue")
  },
  {
    path: "/mixins",
    name: "Mixins",
    component: () => import("../views/Mixins.vue")
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: () => import("../views/Vuex.vue")
  },
  {
    path: "/hooks",
    name: "Hooks",
    component: () => import("../views/Hooks.vue")
  },
  {
    path: "/todos",
    name: "Todos",
    component:() => import("../views/Todos.vue")
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;