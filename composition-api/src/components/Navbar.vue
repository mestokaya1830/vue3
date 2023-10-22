<template>
  <div>
    <nav>
      <router-link to="/" class="links">Home</router-link>
      <router-link to="/hooks" class="links">Hooks</router-link>
      <router-link to="/refs" class="links">Refs</router-link>
      <router-link to="/fetch" class="links">Fetch</router-link>
      <router-link to="/reactive" class="links">Reactive</router-link>
      <router-link to="/computed" class="links">Computed</router-link>
      <router-link to="/watch" class="links">Watch</router-link>
      <router-link to="/directive" class="links">Directive</router-link>
      <router-link to="/routeparam" class="links">Route Param</router-link>
      <router-link to="/teleport" class="links">Teleport</router-link>
      <router-link to="/childcomponent" class="links">Child Component</router-link>
      <router-link to="/counter" class="links">Counter</router-link>
      <router-link to="/nexttick" class="links">NextTick</router-link>
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
