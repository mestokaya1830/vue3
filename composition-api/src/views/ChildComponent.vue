<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

 const title = ref('Child Component')

 onMounted(() => {
  console.log(title)
})
</script>