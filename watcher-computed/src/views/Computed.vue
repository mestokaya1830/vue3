<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ checkCounter }}</h2>
    <br />

    <div>
      <input type="button" :disabled="inc" value="Increase" @click="increase()" />
      <input type="button" :disabled="dec"  value="Decrease" @click="decrease()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ComputedPAge",
  data() {
    return {
      title: "Computed Page",
      counter: 0,
      inc:false,
      dec:true
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter -= 1;
    },
  },
  computed:{
    //computed run as sync and can return some data like filters
    //check loop filters in vue exircise about computed filters
    checkCounter(){
      if(this.counter > 0 && this.counter < 5){
        this.inc = false
        this.dec = false
      } else if(this.counter > 4) {
        this.inc = true
      } else {
        this.dec = true
      }
      return this.counter
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