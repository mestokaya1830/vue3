import { createStore } from 'vuex'

export default createStore({
  state: {
   counter: 0
  },
  mutations: {
    Increase(state){
      state.counter++
    },
    Decrease(state){
      state.counter--
    }
  },
   
  actions: {

  },
  getters: {

  },
  modules: {
    
  }
})