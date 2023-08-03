<template>
  <div>
    <h2>{{ title }}</h2>

    <ul>
      <li v-for="item in users" :key="item.id">
          <span>{{ item.id }}</span>
          <span>{{ item.name }}</span>
          <router-link class="links" :to="`/user/${item.id}`">Details</router-link>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      title: "Users",
      users: [
        {id: 1, name:'Mesto'},
        {id: 2, name:'Filiz'},
        {id: 3, name:'Bidik'},
        {id: 4, name:'Helin'},
        {id: 5, name:'Ilos'}
      ]
    }
  },
  methods: {
  }
};
</script>

<style scoped>
ul{
  display: flex;
  flex-direction: column;
  list-style: none;
}
ul li span{
  margin: 10px;
}
</style>
