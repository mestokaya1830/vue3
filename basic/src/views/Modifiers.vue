<template>
  <div>
    <h2>{{ title }}</h2>

    <p>trim,number,prevent,lazy</p>
    <form @submit.prevent="sendForm">
      <input type="text" v-model.lazy.trim="formValues.name" />
      <input type="submit" value="Send Form">
    </form>
    <div>
      {{ JSON.stringify(formValues, null, 2) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Modifiers",
  data() {
    return {
      title: "Modifiers Page",
      formValues: {
        name: ""
      },
    };
  },
  methods: {
    sendForm(){
      console.log(this.formValues)
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
