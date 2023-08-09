<template>
  <div>
    <nav>
      <router-link to="/" class="links router-link-active router-link-exact-active">Home</router-link>
      <router-link to="/vuexactions" class="links router-link-active router-link-exact-active">Vuex Actions</router-link>
      <router-link to="/vuexmapactions" class="links router-link-active router-link-exact-active">Vuex mapActions</router-link>
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
