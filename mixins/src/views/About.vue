<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import Message from '../Mixins/message.js'
export default {
  name: "AboutPage",
  mixins:[Message],
  data(){
    return {
      title:'About'
    }
  }
};
</script>
