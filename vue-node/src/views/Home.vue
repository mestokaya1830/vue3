<template>
  <div>
    <h2>{{ title }}</h2>
    {{ user }}
  </div>
</template>

<script>
export default {
  name:'Home',
  data () {
    return {
      title:'Home Page',
      user: null
    }
  },
  mounted(){
    this.getUser()
  },
  methods:{
    async getUser(){
      const result = await fetch('/api')
      this.user = await result.json()
    }
  }
};
</script>