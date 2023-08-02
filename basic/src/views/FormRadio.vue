<template>
  <div>
    <h2>{{ title }}</h2>

    <form @submit.prevent="sendForm">
      <div>
        <input type="radio" value="Male" v-model="gender" />
        <input type="radio" value="Female" v-model="gender" />
      </div>    
      <input type="submit" value="Send Form">
    </form>
    <div>
      {{ JSON.stringify(gender, null, 2) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      title: "Form Page",
      gender: "Male"
    };
  },
  methods: {
    sendForm(){
      console.log(this.gender)
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
