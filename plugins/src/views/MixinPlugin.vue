<template>
  <div>
    <h2>{{ title }}</h2>
    <a :href="myLink" target="_blank">Mixin Plugin</a>
  </div>
</template>

<script>
export default {
  name: "Mixin Plugin",
  data() {
    return {
      name:'',
      title: "Mixin Plugin Page",
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
