<template>
  <div>
    <nav>
      <router-link  to="/" class="links">Home</router-link>
      <router-link  to="/about" class="links">About</router-link>
      <router-link  to="/contact" class="links">Contact</router-link>
      <router-link  to="/account" class="links">Account</router-link>
    </nav>
  </div>
</template>

<script>
 export default {
  name:'',
  data () {
    return {
     
    }
  }
 }
</script>

<style scoped>
  nav{
    display: flex;
  }
  .links{
    margin: 10px;
  }
  .links{
    text-decoration: none;
  }
  .active{
    color: green;
  }
</style>
