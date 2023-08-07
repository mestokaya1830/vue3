<template>
  <div>
    <h2>{{ title }}</h2>
    <h1>{{  counter }}</h1>
    <div class="wrapper">
      <input type="button" @click="Increase()" value="+">
      <input type="button" @click="Decrease()" value="-">
    </div>
  </div>
</template>

<script>
export default {
  name:'Home',
  data () {
    return {
      title:'Counter In Home Page',
      counter: 0
    }
  },
  methods:{
    Increase(){
      this.counter++
    },
    Decrease(){
      this.counter--
    }
  }
};
</script>

<style scoped>
div > input{
  margin: 0 5px;
  font-size: 20px;
  padding: 0 20px;
}
</style>