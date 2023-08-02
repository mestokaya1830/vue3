<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ $sayHello('Sayhello plugin was created in main.js file and called here') }}</p>
  </div>
</template>

<script>
export default {
  name:'Internal Plugin',
  data () {
    return {
      title:'Internal Plugin'
    }
  }
}
</script>
<style>
p{
  margin: 10px 0;
}
</style>