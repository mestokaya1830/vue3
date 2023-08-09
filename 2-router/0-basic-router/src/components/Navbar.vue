<template>
  <div>
    <nav>
      <RouterLink to="/" class="links router-link-active router-link-exact-active">Home</RouterLink>
      <RouterLink to="/about" class="links router-link-active router-link-exact-active">About</RouterLink>
      <RouterLink to="/contact" class="links router-link-active router-link-exact-active">Contact</RouterLink>
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
