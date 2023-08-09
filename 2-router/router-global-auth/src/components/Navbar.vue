<template>
  <div>
    <nav>
      <router-link to="/" class="links router-link-active router-link-exact-active">Home</router-link>
      <router-link to="/users" class="links router-link-active router-link-exact-active">Users</router-link>
      <router-link to="/login" class="links router-link-active router-link-exact-active">Login</router-link>
      <router-link to="/admin" class="links router-link-active router-link-exact-active">Admin</router-link>
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
