<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
    <router-link :to="`/users/${1}`">User-1</router-link>
    <router-link :to="`/users/${2}`">User-2</router-link>
    <router-link :to="`/users/${3}`">User-3</router-link>
  </div>
</template>

<script>
export default {
  name:'Users',
  data () {
    return {
      title:'Users'
    }
  }
};
</script>
<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>