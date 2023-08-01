<script setup>
  import SlotComponent from '../components/SlotComponent.vue';
</script>
<template lang="">
  <div>
    <h2>{{ title }}</h2>
    <SlotComponent>
      <h4>This text is also comes from Slot Component but declared in Parent page where Slot-Component called </h4>
    </SlotComponent>
  </div>
</template>
<script>
  export default {
  name:'Slot',
  data (){
    return {
      title:'Slot Component Page'
    }
  }
}
</script>
<style lang="">
  
</style>