<template>
  <div>
    <h2>{{ title }}</h2> 
    <p>Getters used for filter and manuplation</p>

    <ul v-if="$store.state.users !== null">
      <li v-for="item in $store.getters.filterUsers" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <p v-else>No Data! Please go Actions page and Click Get Users Button</p>

  </div>
</template>

<script>
export default {
  name:'VuexFetch',
  data () {
    return {
      title:'Getters In Vuex',
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