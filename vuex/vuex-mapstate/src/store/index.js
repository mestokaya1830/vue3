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
    },
  },
   
  //actions used for async operation
  actions: {
    
  },

  //getters used for filter and manupilation
  getters: {
    doubble(state){
      return state.counter * 2
    },

    multiple(state){
      return state.counter * 5
    }
  },

  modules: {
    
  }
})