<template>
  <div>
    <h2>{{ title }}</h2> 
    <p style="color: red;">Getters with mapGetters</p>
    <p>From state</p>
    <h1>{{ $store.state.counter }}</h1>
    <p>Doubble From MapGetters in Computed</p>
    <h1>{{ doubble }}</h1>
    <p>Multuple From MapGetters in Computed</p>
    <h1>{{ multiple }}</h1>

    <p>Buttons Trigger Functions via mapMutations</p>
    <div class="wrapper">
      <input type="button" @click="Increase" value="+">
      <input type="button" @click="Decrease" value="-">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
export default {
  name:'MapMutations',
  data () {
    return {
      title:'Map Mutations',
    }
  },
  computed:{
    ...mapGetters([
      'doubble',
      'multiple'
    ])
  },

  methods:{
    ...mapMutations([
      'Increase',
      'Decrease'
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
