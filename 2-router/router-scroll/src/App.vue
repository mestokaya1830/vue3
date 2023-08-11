<template>
  <div>
    <Navbar class="navbar"/>
    <router-view id="master-page" />
  </div>
</template>
<script>
  import Navbar from "./components/Navbar.vue";
  export default {
    name: "App",
    components:{Navbar},
    data() {
      return {
        name:''
      };
    },
    mounted(){
      
    },
    methods: {
     
    }
  };
  </script>
<style scoped>
*, ::after, ::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .navbar{position: fixed;}
  #master-page{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 1600px;
  }
</style>
