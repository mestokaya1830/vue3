<template lang="">
  <div>
    <p>{{ title }}</p>
    <slot />
  </div>
</template>
<script>
export default {
  name:'Slot Component',
  data () {
    return {
      title:'This side is comes from Slot-Component'
    }
  }
}
</script>
<style lang="">
  
</style>