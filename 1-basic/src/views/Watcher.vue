<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ counter }}</h2>
    <br />

    <div>
      <input type="button" name="" value="Increase" @click="increase()" />
      <input type="button" name="" value="Decrease" @click="decrease()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Watcher",
  data() {
    return {
      title: "Watcher Page",
      counter: 0,
    };
  },
  methods: {
    increase() {
      this.counter += 1;
    },
    decrease() {
      this.counter -= 1;
    },
  },
  watch:{
    counter(newValue, oldValue){
      if(newValue > oldValue && newValue === 5){
        alert('Stop')
      }
    }
  }
};
</script>

<style>
  #input-con{
    display: inline;
  }
  input{
    margin: 0 10px;
    padding: 5px 10px;
  }
</style>