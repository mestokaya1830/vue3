<template lang="">
  <div>
    <h2>Login Page</h2>
    <form @submit.prevent="login()">
      <input type="text" v-model="form.email" placeholder="Email">
      <input type="text" v-model="form.password" placeholder="Paassword">
      <input type="submit" value="Login">
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form:{
        email:'',
        password:''
      }
    }
  },
  methods:{
    login() {
      this.$store.commit('login', this.form)
      this.$router.push('/')
    }
  }
}
</script>
<style lang="">
  
</style>