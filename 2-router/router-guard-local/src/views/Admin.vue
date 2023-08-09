<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name:'Admin',
  data () {
    return {
      title:'Admin Page'
    }
  },
  beforeRouteEnter (to, from, next) {
    alert('You have no permission for this page')
    if(to.name == '/Home'){
      next()
    }
  }
};
</script>