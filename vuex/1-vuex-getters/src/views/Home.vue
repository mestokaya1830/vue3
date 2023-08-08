<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Here comes from State</p>
    <h1>{{  $store.state.counter }}</h1>

    <p>Here comes from Getters</p>
    <h1>{{  $store.getters.doubble }}</h1>
    <h1>{{  $store.getters.multiple }}</h1>
    <div class="wrapper">
      <input type="button" @click="$store.commit('Increase')" value="+">
      <input type="button" @click="$store.commit('Decrease')" value="-">
    </div>
  </div>
</template>

<script>
export default {
  name:'VuexCounter',
  data () {
    return {
      title:'Counter With Vuex And Getters',
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
