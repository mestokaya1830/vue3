<script setup>
import { axios } from "../modules/axios.js";
</script>
<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="(item, index) in Users" :key="index">
        <span>{{ item.name }}</span>
        <span>{{ item.username }}</span>
        <span>{{ item.email }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Http Request",
  data() {
    return {
      Users: {},
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
        console.log(result);
        this.Users = result.data;
      });
    },
  },
};
</script>
<style scoped>
  ul{
    display: flex;
    flex-direction: column;
    list-style: none;
  }
</style>
