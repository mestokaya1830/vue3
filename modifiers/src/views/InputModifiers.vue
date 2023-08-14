<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
   
  </div>
</template>

<script>

export default({
  name:"InputModifiers",
  data() {
    return {
      title:'Input Modifiers',
    }
  },
  methods:{
   
  }
});

</script>

<style scoped>
.wrapper div{
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: 10px auto;
}

span{
  min-width: 200px;
}
</style>