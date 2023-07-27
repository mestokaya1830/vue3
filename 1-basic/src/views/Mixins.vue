<script setup>
  import Message from './Mixins/message.js'
</script>
<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
export default {
  name: "Mixins",
  mixins:[Message],
  data(){
    return {
      title:'Mixins Page'
    }
  }
};
</script>