<template lang="">
  <div>
    <h2 class="title">{{title}}</h2>
    <template v-for="item in users" :key="item.index">
      <li class="user-list">
        <span>{{item.index}}</span>
        <span>{{item.name}}</span>
        <span>{{item.dep}}</span>
        <router-link class="links" :to="`/users/${item.index}`">Details</router-link>
      </li>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UsersPage',
  data() {
    return {
      title: ' Users',
      users: null
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      // await axios.get('http://localhost:3000/users').then(result => {
      //   console.log(result.data.users)
      //   this.users = result.data.users
      // })
      const result = await fetch('http://localhost:3000/users')
      const final = await result.json()
      this.users = final.users
    }
  }
}
</script>
<style scoped>
.title{
  margin-bottom: 20px;
}
.user-list {
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 400px;
  margin: 5px 0;
  padding-bottom: 5px;
  border-bottom: 1px solid #ddd;
}
.user-list span{
  width: 120px;
}
.user-list span:first-child{
  max-width: 30px;
}
</style>