<template>
  <div>
    <nav>
      <router-link to="/" class="links router-link-active router-link-exact-active">Home</router-link>
      <router-link to="/loop" class="links router-link-active router-link-exact-active">Loop</router-link>
      <router-link to="/loopFilter" class="links router-link-active router-link-exact-active">Loop Filter</router-link>
      <router-link to="/loopIF" class="links router-link-active router-link-exact-active">Loop IF</router-link>
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
