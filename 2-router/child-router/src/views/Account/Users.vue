<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
    <router-link :to="`/users/${1}`">Details</router-link>
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