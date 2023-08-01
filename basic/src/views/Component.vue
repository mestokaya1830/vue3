<script setup>
  import Alert from '../components/Alert.vue'
</script>
<template>
  <div>
    <h2>{{ title }}</h2>
    <Alert />
  </div>
</template>

<script>
export default {
  name:'Component',
  data () {
    return {
      title:'Component Page',
    }
  }
};
</script>