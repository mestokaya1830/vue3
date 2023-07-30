<script setup>
  import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
    <router-view id="master-page" />
  </div>
</template>
<script>
  export default {
    name: "App",
    data() {
      return {
        
      };
    },
    methods: {
      
    },
    provide:{
      message:'This message came via Provide in App page'
    }
  };
  </script>
<style scoped>
  #master-page{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
