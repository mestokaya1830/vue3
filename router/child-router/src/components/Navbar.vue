<template>
  <div>
    <!-- standart way -->
    <ul>
      <li><router-link class="links" to="/">Home</router-link></li>
      <li><router-link class="links" to="/news">News</router-link></li>
      <li><router-link class="links" to="/account">Account</router-link></li>
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
</style>