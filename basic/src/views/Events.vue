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
  name: "Events",
  data() {
    return {
      title: "Events Page",
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