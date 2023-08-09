<template>
  <div>
    <nav>
      <router-link to="/" class="links router-link-active router-link-exact-active">Home</router-link>
      <router-link to="/vuexgetters" class="links router-link-active router-link-exact-active">Vuex Getters</router-link>
      <router-link to="/vuexmapgetters" class="links router-link-active router-link-exact-active">Vuex mapGetters</router-link>
    </nav>
  </div>
</template>

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
