<template>
  <div>
    <h2>{{ title }}</h2> 
    <p style="color: red;">Getters In-Line</p>
    <p>From state</p>
    <h1>{{ $store.state.counter }}</h1>
    <p>Doubble From getters</p>
    <h1>{{ $store.getters.doubble }}</h1>

    <p>Multiple From getters</p>
    <h1>{{ $store.getters.multiple }}</h1>
    <div class="wrapper">
      <input type="button" @click="$store.commit('Increase')" value="+">
      <input type="button" @click="$store.commit('Decrease')" value="-">
    </div>
  </div>
</template>

<script>
export default {
  name:'HomePage',
  data () {
    return {
      title:'Home',
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
