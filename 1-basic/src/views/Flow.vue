<template>
  <div>
    <h2>{{ title }}</h2>
    <div v-if="num === 0">Flow If</div>
    <div v-else-if="num === 1">Flow Else If</div>
    <div v-else>Flow Else</div>

    <div v-show="showEl">Flow Show</div>
  </div>
</template>

<script>
export default {
  name:'Flow',
  data () {
    return {
      title:'Flow Page',
      num: 0,
      showEl: true
    }
  }
};
</script>