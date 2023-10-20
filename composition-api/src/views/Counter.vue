<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ counter }}</h1>
    <div>
      <input type="button" value="Increase" @click="increase()">
      <input type="button" value="Decrease" @click="decrease()">
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue'
export default {
  setup(){
    const title = ref('Counter')
    const counter = ref(0)
    const increase = () => counter.value++
    const decrease = () => counter.value--
    
    return {
      title,
      counter,
      increase,
      decrease
    }
  }
}
</script>
<style>
  
</style>