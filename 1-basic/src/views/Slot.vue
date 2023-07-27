<script setup>
  import SlotComponent from '../components/SlotComponent.vue';
</script>
<template lang="">
  <div>
    <h2>{{ title }}</h2>
    <SlotComponent>
      <h4>Hello I am From Parent Page</h4>
    </SlotComponent>
  </div>
</template>
<script>
  export default {
  name:'Slot',
  data (){
    return {
      title:'Slot Page'
    }
  }
}
</script>
<style lang="">
  
</style>