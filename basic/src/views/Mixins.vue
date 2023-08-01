<script setup>
  import Message from './Mixins/message.js'
</script>
<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
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