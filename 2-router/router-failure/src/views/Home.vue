<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="button" @click="checkNavigationFailure" value="Check Navigation Failure">
  </div>
</template>

<script>
  import { isNavigationFailure, NavigationFailureType } from 'vue-router'
export default {
  name:'Home',
  data () {
    return {
      title:'Home'
    }
  },
  methods:{
    async checkNavigationFailure(){
      const result = await this.$router.push('/')
      if(isNavigationFailure(result, NavigationFailureType.duplicated)){
        console.log(result.to)
        console.log(result.from)
      } else {
        console.log('No errors')
      }
    }
  }
};
</script>