import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GlobalComponent from './components/GlobalComponent.vue'

createApp(App)
.component('GlobalComponent', GlobalComponent)
.use(router)
.use(store)
.mount('#app')
