<script setup>
  import Navbar from "./components/Navbar.vue";
</script>
<template>
  <div>
    <Navbar />
    <router-view id="master-page" />
  </div>
</template>

<style>
ul {
  display: flex;
  list-style: none;
}
ul > li {
  margin: 0 15px;
}
#master-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
