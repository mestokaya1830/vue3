<template>
  <div>
    <h2>{{ title }}</h2>

    <template v-for="item in users" : key="item_id">
      <div>
        <span>{{ item.name }}</span>
        <span>{{ item.password }}</span>
      </div>
    </template>
    <form @submit.prevent="addUser()">
      <input type="text" v-model="newUser.name">
      <input type="text" v-model="newUser.password">
      <input type="submit" value="Add User">
    </form>
    {{ user }}
  </div>
</template>

<script>
export default {
  name:'Home',
  data () {
    return {
      title:'Home Page',
      users: {},
      newUser:{
        name:'',
        password:''
      }
    }
  },
  mounted(){
    this.getUsers()
  },
  methods:{
    async getUsers(){
      const result = await fetch('/api')
      const final = await result.json()
      this.users = final
    },
    async addUser(){
      await fetch('/api/newuser', {
        method: 'POST',
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(this.newUser)
      })
      this.getUsers()
    }
  }
};
</script>

<style>
form{
  display: flex;
  flex-direction: column;
}
form input{
  margin: 10px 0;
}
</style>