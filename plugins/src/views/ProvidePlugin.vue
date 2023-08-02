<script setup>
  import { inject } from 'vue'//inject ust be in setup script
  const myLogout = inject('myLogout')
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="button" @click="myLogout" value="Logout">
  </div>
</template>

<script>

export default {
  name: "Provide Plugin",
  data() {
    return {
      name:'',
      title: "Provide Plugin Page",
    }
  },
  methods: {
    
  },
};
</script>

<style scoped>
#input-con {
  display: inline;
}
form {
  display: flex;
  flex-direction: column;
}
input, select, textarea {
  margin: 10px;
  padding: 5px 10px;
}
</style>
