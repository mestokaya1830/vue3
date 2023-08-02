import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Binding from "../views/Binding.vue";
import Flow from "../views/Flow.vue";
import Loop from "../views/Loop.vue";
import LoopIf from "../views/LoopIf.vue";
import LoopFilter from "../views/LoopFilter.vue";
import Methods from "../views/Methods.vue";
import Events from "../views/Events.vue";
import Form from "../views/Form.vue";
import FormCheckbox from "../views/FormCheckbox.vue";
import FormRadio from "../views/FormRadio.vue";
import Modifiers from "../views/Modifiers.vue";
import Computed from "../views/Computed.vue";
import Watcher from "../views/Watcher.vue";
import Component from "../views/Component.vue";
import ComponentProp from "../views/ComponentProp.vue";
import ComponentPropDynamic from "../views/ComponentPropDynamic.vue";
import LazyComponent from "../views/LazyComponent.vue";
import Slot from "../views/Slot.vue";
import ProvideInject from "../views/ProvideInject.vue";
import ComponentEvent from "../views/ComponentEvent.vue";
import HttpRequest from "../views/HttpRequest.vue";
import Refs from "../views/Refs.vue";
import Mixins from "../views/Mixins.vue";
import Vuex from "../views/Vuex.vue";
import Hooks from "../views/Hooks.vue";
import Todos from "../views/Todos.vue";

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
    path: "/loopif",
    name: "LoopIf",
    component: LoopIf,
  },
  {
    path: "/loop",
    name: "Loop",
    component: Loop,
  },
  {
    path: "/loopfilter",
    name: "LoopFilter",
    component: LoopFilter,
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
    path: "/formcheckbox",
    name: "FormCheckbox",
    component: FormCheckbox,
  },
  {
    path: "/formradio",
    name: "FormRadio",
    component: FormRadio,
  },
  {
    path: "/modifiers",
    name: "Modifiers",
    component: Modifiers,
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
    path: "/lazycomponent",
    name: "LazyComponent",
    component: LazyComponent,
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
    path: "/hooks",
    name: "Hooks",
    component: Hooks,
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;