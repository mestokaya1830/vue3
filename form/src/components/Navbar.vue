<template>
  <div>
    <nav>
      <router-link to="/" class="links router-link-active router-link-exact-active">Home</router-link>
      <router-link to="/form" class="links router-link-active router-link-exact-active">Form</router-link>
      <router-link to="/checkbox" class="links router-link-active router-link-exact-active">Checkbox</router-link>
      <router-link to="/radio" class="links router-link-active router-link-exact-active">Radio</router-link>
      <router-link to="/select" class="links router-link-active router-link-exact-active">Select</router-link>
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
