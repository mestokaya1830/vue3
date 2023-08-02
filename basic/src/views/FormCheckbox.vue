<template>
  <div>
    <h2>{{ title }}</h2>

    <form @submit.prevent="sendForm">
      <span>Single value</span>
      <select name="" id="" v-model="formValues.city">
        <option value="Antep">Antep</option>
        <option value="Urfa">Urfa</option>
        <option value="Amed">Amed</option>
      </select>

      <span>Multiple value</span>
      <select name="" id="" v-model="formValues.language" multiple>
        <option value="Html">Html</option>
        <option value="Css">Css</option>
        <option value="Javascript">Javascript</option>
      </select>
      <input type="submit" value="Send Form">
    </form>
    <div>
      {{ JSON.stringify(formValues, null, 2) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      title: "Form Page Checkbox",
      formValues: {
        language: [],
        city: ""
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
