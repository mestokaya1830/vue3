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
        name:''
      };
    },
    mounted(){
      
    },
    methods: {
     
    },
    provide:{
      message:'Inject Provide mean that You can share some data declared in App.vue(Look at the App.vue provide Hook)'
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
