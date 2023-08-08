<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Here comes from State</p>
    <h1>{{  $store.state.counter }}</h1>

    <p>Here comes from mapGetters</p>
    <h1>{{ doubble }}</h1>
    <h1>{{ multiple }}</h1>
    <div class="wrapper">
      <input type="button" @click="$store.commit('Increase')" value="+">
      <input type="button" @click="$store.commit('Decrease')" value="-">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name:'VuexCounter',
  data () {
    return {
      title:'Counter With Vuex And mapGetters',
    }
  },
  computed:{
    ...mapGetters([
      'doubble',
      'multiple'
    ])
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
