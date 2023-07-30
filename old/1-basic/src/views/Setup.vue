<script setup>
  const title = 'Setup Page'
  const message = 'Hello I am caming from Setup Script without export default section'
  const test = () => {
    return 'Hello'
  }
</script>
<template lang="">
  <div>
    <h2>{{ title }}</h2>
    <h4>{{ message }}</h4>
    <h4>{{ test() }}</h4>
  </div>
</template>
<script>
export default {
  name:'Setup'
  
}
</script>
<style lang="">
  
</style>