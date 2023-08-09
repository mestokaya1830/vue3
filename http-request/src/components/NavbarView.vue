<template>
  <div>
   <nav>
    <RouterLink to="/" class="links router-link-active router-link-exact-active">Home</RouterLink>
    <RouterLink to="/axios" class="links router-link-active router-link-exact-active">Axios</RouterLink>
    <RouterLink to="/fetch" class="links router-link-active router-link-exact-active">Fetch</RouterLink>
    <RouterLink to="/local" class="links router-link-active router-link-exact-active">Local</RouterLink>
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
