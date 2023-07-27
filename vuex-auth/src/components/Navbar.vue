<template lang="">
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link :to="'/products/' + 1 ">Product Details</router-link></li>
      <li v-if="$store.state.form.email === ''"><router-link to="/login">Login</router-link></li>
      <li v-else @click="logout()"><router-link to="">Logout</router-link></li>
      <!-- or call with name -->
      <!-- <li> <router-link :to="{ name: 'Home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'Products' }">Products</router-link></li> -->
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
    }
  }
}
</script>
<style>
  
</style>
