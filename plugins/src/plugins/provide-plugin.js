export default {

  install(app, option){
    const logout = () => {
      console.log('Logout Plugin')
    }
    app.provide('myLogout', logout)
  }
}