import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ExternalPlugin from './plugins/external-plugin';
import ComponentPlugin from './plugins/compnent-plugin';
import DirectivePlugin from './plugins/directive-plugin';

const mainPlugin = {
  install(app){
    app.config.globalProperties.$sayHello = function(param){
      return param
    }
  }
}
createApp(App)
.use(router)
.use(store)
.use(mainPlugin)
.use(ExternalPlugin)
.use(ComponentPlugin)
.use(DirectivePlugin)
.mount('#app')
