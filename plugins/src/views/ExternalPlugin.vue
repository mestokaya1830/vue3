<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ $sayHello2('sayHello2 plugin created in plugins folder and setted in main.js file and called here') }}</p>
  </div>
</template>

<script>
export default {
  name: "External Plugin",
  data() {
    return {
      name:'',
      title: "External Plugin Page",
    }
  },
  methods: {
    
  },
};
</script>

<style scoped>
#input-con {
  display: inline;
}
form {
  display: flex;
  flex-direction: column;
}
input, select, textarea {
  margin: 10px;
  padding: 5px 10px;
}
</style>
