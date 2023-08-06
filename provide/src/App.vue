<script setup>
  import { RouterView } from 'vue-router'
  import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <div  id="tem">
    <NavbarComponent />
    <RouterView  class="main"/>
  </div>

</template>

<script>
export default {
  name:'AppVue',
  data(){
    return{

    }
  },
  provide:{
      message:'Set Inject Provide  in App.vue and get from everywhere'
    }
}
</script>
<style scoped>
.main{
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

</style>
