<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Actions used for async operation</p>
    <ul v-if="$store.state.users !== null">
      <li v-for="item in $store.state.users" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <input type="button" value="Get Users With Actions" @click="$store.dispatch('getUsers')">
  </div>
</template>

<script>
export default {
  name:'VuexFetch',
  data () {
    return {
      title:'Actions In Vuex',
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