<template>
  <div>
    <header class="header">
      <div class="header-left">
        <span class="logo"><img src="../assets/img/logo.jpg" width="40px;" height="40px"></span>
        <h2 class="title">Okey 101 Bedava Çip</h2>
      </div>
      <nuxt-link to="/admin" class="header-right" exact-active-class="navbar-active">
        <h3>Admin</h3>
      </nuxt-link>
    </header>
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
