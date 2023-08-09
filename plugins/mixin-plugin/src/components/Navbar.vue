<template>
  <div>
    <nav>
      <router-link to="/" class="links router-link-active router-link-exact-active">Home</router-link>
      <router-link to="/about" class="links router-link-active router-link-exact-active">About</router-link>
      <router-link to="/contact" class="links router-link-active router-link-exact-active">Contact</router-link>
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
