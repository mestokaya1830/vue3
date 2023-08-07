<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="item in users" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'FetchPage',
  data(){
    return{
      title: 'Fetch',
      users:null
    }
  },
  mounted(){
    this.getUsers()
  },
  methods:{
    async getUsers(){
      const result = await fetch('https://jsonplaceholder.typicode.com/users')
      this.users = await result.json()
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