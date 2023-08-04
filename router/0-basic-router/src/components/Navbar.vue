<template>
  <div>
    <ul>
      <li><router-link class="links router-link-active router-link-exact-active" to="/">Home</router-link></li>
      <li><router-link class="links router-link-active router-link-exact-active" to="/about">About</router-link></li>
      <li><router-link class="links router-link-active router-link-exact-active" to="/contact">Contact</router-link></li>
    </ul>
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

<style>
  ul{
    display: flex;
    list-style: none;
  }
  ul li{
    margin: 10px;
  }
  ul li .links{
    text-decoration: none;
  }
  .active{
    background: #ddd;
    padding: 5px 10px;
  }
</style>
