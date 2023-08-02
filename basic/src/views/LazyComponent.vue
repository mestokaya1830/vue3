<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Lazy Component mean until you don't click the Button Popup is Popup Component is not loading.Look at the imspect/network tab</p>
    <input type="button" value="Open Popup Component" @click="handle=true">
    <Popup v-if="handle" @close="handle=false" />
  </div>
</template>

<script>
//lazy load
import { defineAsyncComponent } from 'vue'; 
const Popup = defineAsyncComponent(
  () => import('../components/Popup.vue')
)

export default {
  name:'Lazy Component',
  components:{
    Popup
  },
  data () {
    return {
      title:'Lazy Component',
      handle:false
    }
  }
};
</script>
<style>
  h2{
    margin-bottom: 10px;
  }
  button{
    margin: 20px;
    padding: 10px 20px;
  }
</style>