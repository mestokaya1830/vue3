import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Binding from "../views/Binding.vue";
import Flow from "../views/Flow.vue";
import Loop from "../views/Loop.vue";
import Methods from "../views/Methods.vue";
import Events from "../views/Events.vue";
import Form from "../views/Form.vue";
import Modifiers from "../views/Modifiers.vue";
import Directive from "../views/Directive.vue";
import Computed from "../views/Computed.vue";
import Watcher from "../views/Watcher.vue";
import Component from "../views/Component.vue";
import ComponentProp from "../views/ComponentProp.vue";
import ComponentPropDynamic from "../views/ComponentPropDynamic.vue";
import Slot from "../views/Slot.vue";
import ProvideInject from "../views/ProvideInject.vue";
import ComponentEvent from "../views/ComponentEvent.vue";
import HttpRequest from "../views/HttpRequest.vue";
import Refs from "../views/Refs.vue";
import Mixins from "../views/Mixins.vue";
import Vuex from "../views/Vuex.vue";
import Setup from "../views/Setup.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/binding",
    name: "Binding",
    component: Binding,
  },
  {
    path: "/flow",
    name: "Flow",
    component: Flow,
  },
  {
    path: "/loop",
    name: "Loop",
    component: Loop,
  },
  {
    path: "/methods",
    name: "Methods",
    component: Methods,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/modifiers",
    name: "Modifiers",
    component: Modifiers,
  },
  {
    path: "/directive",
    name: "Directive",
    component: Directive,
  },
  {
    path: "/computed",
    name: "Computed",
    component: Computed,
  },
  {
    path: "/watcher",
    name: "Watcher",
    component: Watcher,
  },
  {
    path: "/component",
    name: "Component",
    component: Component,
  },
  {
    path: "/componentprop",
    name: "ComponentProp",
    component: ComponentProp,
  },
  {
    path: "/componentpropdynamic",
    name: "ComponentPropDynamic",
    component: ComponentPropDynamic,
  },
  {
    path: "/slot",
    name: "Slot",
    component: Slot,
  },
  {
    path: "/provideinject",
    name: "ProvideInjectde",
    component: ProvideInject,
  },
  {
    path: "/componentevent",
    name: "ComponentEvent",
    component: ComponentEvent,
  },
  {
    path: "/httprequest",
    name: "HttpRequest",
    component: HttpRequest,
  },
  {
    path: "/refs",
    name: "Refs",
    component: Refs,
  },
  {
    path: "/mixins",
    name: "Mixins",
    component: Mixins,
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: Vuex,
  },
  {
    path: "/setup",
    name: "Setup",
    component: Setup,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;