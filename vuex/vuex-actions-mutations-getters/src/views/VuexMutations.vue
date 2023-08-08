<template>
  <div>
    <h2>{{ title }}</h2>
    <p>
      Mutations used for sync operation <br>
      So don't use for http-request or external api <br>
      Go to the Actions link and test it
    </p>
    <ul v-if="$store.state.users !== null">
      <li v-for="item in $store.state.users" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <input type="button" value="Get Users With Muatations" @click="$store.commit('getUsers')">
  </div>
</template>

<script>
export default {
  name:'VuexFetch',
  data () {
    return {
      title:'Mutations In Vuex',
    }
  },
  mounted(){
    
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