<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
    <div>
      <span>Clcik Modifier: </span>
      <input type="button" value="Click Event" @click="clickEvent()">
    </div>
    <div>
      <span>Once Modifier:</span>
      <input type="button" value="Once Event" @click.once="onceEvent()">
    </div>
  </div>
</template>

<script>

export default({
  name:"EventModifiers",
  data() {
    return {
      title:'Event Modifiers',
    }
  },
  methods:{
    clickEvent(){
      alert('Hello')
    },
    onceEvent(){
      alert('Once Event Execute one time')
    }
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