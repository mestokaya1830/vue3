<template lang="">
  <div>
    <h3>{{ title }}</h3>
    <slot />
  </div>
</template>
<script>
export default {
  name:'Slot Component',
  data () {
    return {
      title:'Slot Component'
    }
  }
}
</script>
<style lang="">
  
</style>