<template>
  <div>
    <nav>
      <router-link to="/" class="links">Home</router-link>
      <router-link to="/eventmodifiers" class="links">Event Modifiers</router-link>
      <router-link to="/keymodifiers" class="links">Key Modifiers</router-link>
      <router-link to="/mousemodifiers" class="links">Mouse Modifiers</router-link>
      <router-link to="/inputemodifiers" class="links">Inpute Modifiers</router-link>
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
