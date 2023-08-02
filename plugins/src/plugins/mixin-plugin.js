export default {
  install(app, option){
    app.mixin({
      data(){
        return{
          myLink:'https://vueschool.io/courses'
        }
      }
    })
  }
}