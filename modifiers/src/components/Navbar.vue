<template>
  <div>
    <nav>
      <router-link to="/" class="links">Home</router-link>
      <router-link to="/eventkmodifiers" class="links">Event Modifiers</router-link>
      <router-link to="/keymodifiers" class="links">Key Modifiers</router-link>
      <router-link to="/mousemodifiers" class="links">MouseModifiers</router-link>
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
