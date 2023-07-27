import { createStore } from 'vuex'

export default createStore({
  state: {
    form: {
      email:'',
      password:''
    }
  },
  mutations: {
    login(state, form){
      state.form = form
      localStorage.setItem('auth', JSON.stringify(form))
      alert('LoggedIn')
    },
    logout(state){
      state.form = ''
      localStorage.removeItem('auth')
    },
    checkAuth(state){
      if(localStorage.getItem('auth')){
        state.form = localStorage.getItem('auth')
      }
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {
    
  }
})