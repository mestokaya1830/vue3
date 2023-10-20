<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue'
export default {
  setup(){
    const title = ref('Home')
    
    return{
      title
    }
  }
};
</script>