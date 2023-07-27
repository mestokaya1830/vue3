<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>{{ sum(5,40) }}</h3>
    <br />
    
    <button @click="getTotal(20)">Calc</button>
    <br />
    <h2>{{ total }}</h2>
  </div>
</template>

<script>
export default {
  name:'Methods',
  data () {
    return {
      title:'Methods Page',
      total:10
    }
  },
  methods:{
    sum(x,y){
      return x+y
    },
    getTotal(x){
      this.total *= x
    }
  }
};
</script>