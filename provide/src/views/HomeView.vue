<template>
  <div>
    <h1>{{ title }}</h1>
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
export default {
  inject:['message'],
  name:'HomePage',
  data(){
    return {
      title:'Home Page'
    }
  }
}
</script>