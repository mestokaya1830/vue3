<template>
  <div>
    <!-- you can call router as name  -->
    <!-- <router-link class="links" :to="{name: 'About'}">About</router-link> -->
    <!-- you can call router as parh  -->
    <!-- <router-link class="links" :to="{path: '/about'}">About</router-link> -->
    
    <!-- standart way -->
    <ul>
      <li><router-link class="links router-link-active router-link-exact-active" to="/">Home</router-link></li>
      <li><router-link class="links router-link-active router-link-exact-active" to="/about">About</router-link></li>
      <li><router-link class="links router-link-active router-link-exact-active" to="/contact">Contact</router-link></li>
    </ul>

    <!-- or dynamic -->
    <!-- <ul>
      <li v-for="item, index in links" :key="item.name">
        <router-link class="links" :to="item.link">{{ item.name }}</router-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
 export default {
  name:'',
  data () {
    return {
      links: [
        {name:'Home', link: '/'},
        {name:'About', link: '/about'},
        {name:'Contact', link: '/contact'}
      ]
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