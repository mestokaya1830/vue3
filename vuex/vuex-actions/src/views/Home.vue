<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Fetch data in Home Page</p>
    <ul>
      <li v-for="item in users" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <input type="button" value="Get Users" @click="getUsers()">
  </div>
</template>

<script>
export default {
  name:'HomePage',
  data () {
    return {
      title:'Home',
      users: null
    }
  },
  methods:{
    async getUsers(){
      const result = await fetch('https://jsonplaceholder.typicode.com/users')
      this.users = await result.json()
    }
  }
};
</script>

<style scoped>
ul{
  display: flex;
  flex-direction: column;
  list-style: none;
}
ul li{
  margin: 5px 0;
}
 ul li span{
  margin: 0 10px;
 }
input{
  margin: 0 5px;
  padding: 0 20px;
}
</style>
