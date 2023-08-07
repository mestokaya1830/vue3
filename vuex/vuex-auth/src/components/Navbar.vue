<template lang="">
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/admin">Admin</router-link></li>
      <li v-if="$store.state.form.name === ''"><router-link to="/login">Login</router-link></li>
      <li v-else @click="logout()"><router-link to="">Logout</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  mounted(){
    this.$store.commit('checkAuth')
  },
  methods:{
    logout(){
      this.$store.commit('logout')
      this.$router.push('/')
    }
  }
}
</script>
<style>
  
</style>
