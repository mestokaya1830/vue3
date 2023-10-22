<template>
  <div>
    <nav>
      <router-link to="/" class="links">Home</router-link>
      <router-link to="/counter" class="links">Counter</router-link>
      <router-link to="/reactive" class="links">Reactive</router-link>
      <router-link to="/computed" class="links">Computed</router-link>
      <router-link to="/watch" class="links">Watch</router-link>
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
