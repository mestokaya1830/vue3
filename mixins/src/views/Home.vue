<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
// import Message from '../Mixins/message.js'
import Task from '../Mixins/alert.js'
export default {
  name: "HomePage",
  mixins:[Task],
  data(){
    return {
      title:'Home'
    }
  },
  mounted(){
   console.log(this.getTask())
   console.log(this.getTask2())
  },
  // methods:{
    
  // }
};
</script>