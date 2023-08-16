<template>
  <div>
    <h2>{{ title.title }}</h2>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name:'HomeView',
  data(){
    return{
      title:''
    }
  },
  mounted(){
    this.getTitle()
  },
  methods:{
    async getTitle(){
      // await axios.get('http://localhost:3000/').then(result => {
      //   console.log(result.data)
      //   this.title = result.data
      // })
      const result = await fetch('http://localhost:3000/')
      this.title = await result.json()
    }
  }
}
</script>
<style scoped>
  
</style>