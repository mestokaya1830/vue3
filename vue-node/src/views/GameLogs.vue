<template>
  <div>
    <h2>{{ title }}</h2>
    <form @click.prevent="setGameLogs()">
      <input type="text" v-model="gameLogs.name">
      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'GameLogs',
  data () {
    return {
      title:'GameLogs Page',
      gameLogs: {
        name:''
      }
    }
  },
  methods:{
    async setGameLogs(){
      await axios.post('/gamelogs', {gamelogs: this.gameLogs}).then(result => {
        if(result.data){
          console.log('Saved')
        }
      })
    }
  }
};
</script>