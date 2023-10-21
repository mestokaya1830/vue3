<script setup>
//composition api
  import {ref, onMounted} from 'vue'

  const title = ref('Counter')
  const counter = ref(0)
  const increase = () => counter.value++
  const decrease = () => counter.value--

  onMounted(() => {
    console.log('Hello')
  })
</script>

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

<!-- <script>
//options api
export default{
  name:'Counter',
  data(){
    return {
      title:'Counter',
      counter:0
    }
  },
  methods:{
    increase(){
      this.counter++
    },
    decrease(){
      this.counter--
    }
  }
}
</script> -->
<style></style>