<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="item in users" :key="item.index">
        <span>{{ item.index }}</span>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Persons from '../assets/persons.json'
export default {
  name:'LocalPage',
  data(){
    return{
      title: 'Local',
      users:null
    }
  },
  mounted(){
    this.getUsers()
  },
  methods:{
    async getUsers(){
      this.users = Persons
    }
  }
}
</script>

<style scoped>
ul{
  list-style: none;
}
ul li span{
  margin: 5px 10px;
}
</style>
