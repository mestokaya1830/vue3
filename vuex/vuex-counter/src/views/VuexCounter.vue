<template>
  <div>
    <h2>{{ title }}</h2>
    <h1>{{  $store.state.counter }}</h1>
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
      title:'Counter In Vuex',
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
