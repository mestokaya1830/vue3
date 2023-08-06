<template>
  <div>
    <ul class="navbar">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  padding: 20px;
  list-style: none;
}
.navbar li{
  padding: 0 20px;
}
</style>