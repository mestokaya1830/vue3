<template>
  <div>
    <h2>{{ title }}</h2>

    <template v-for="item in users" :key="item.id">
      <div>
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.age }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

 const title = ref('Fetch')
const users = ref([
  {id:1, name:'Mesto', age: 50},
  {id:2, name:'Ali', age: 40},
  {id:3, name:'Deniz', age: 30}
])

 onMounted(() => {
  console.log(title)
})
</script>