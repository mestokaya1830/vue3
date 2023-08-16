<template lang="">
  <div>
    <nav class="navbar">
      <router-link to="/" class="links">Home</router-link>
      <router-link to="/users" class="links">Users</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  
}
</script>
<style scoped>
  .nabbar{
    display: flex;
  }
  .links{
    margin: 0 10px;
  }
</style>