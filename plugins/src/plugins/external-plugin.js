export default {
  install(app){
    app.config.globalProperties.$sayHello2 = function(param){
      return param
    }
  }
}