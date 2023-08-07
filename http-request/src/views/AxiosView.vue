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
import axios from 'axios'
export default {
  name: 'AxiosPage',
  data() {
    return {
      title: 'Axios',
      users: null
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      await axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
        this.users = result.data
        console.log(result.data)
      })
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}

ul li span {
  margin: 5px 10px;
}
</style>