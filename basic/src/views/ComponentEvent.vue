<script setup>
  import Popup from '../components/Popup.vue'
</script>
<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="button" value="Open Popup Component" @click="handle=true">
    <Popup v-show="handle" @close="handle=false" />
  </div>
</template>

<script>
export default {
  name:'Component-Event',
  data () {
    return {
      title:'Component Event Page',
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