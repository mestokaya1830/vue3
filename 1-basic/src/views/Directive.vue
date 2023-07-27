<template>
  <div>
    <h2>{{ title }}</h2>
    <p>once</p>
    <input type="button" value="Click Once"  @click="getMessage()">
    <h2 v-once>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "Directive",
  data() {
    return {
      title: "Directive Page",
      message:'Original Message'
    };
  },
  methods: {
   getMessage(){
    this.message = 'Hello'
   }
  },
};
</script>

<style>
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
