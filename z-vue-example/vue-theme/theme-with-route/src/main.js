import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const style = () => {
  const userColor = 'light'
  return import(`./assets/${userColor}.css`)
}
style()

createApp(App).use(router).use(store).mount('#app')
