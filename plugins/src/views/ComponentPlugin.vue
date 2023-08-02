<template>
  <div>
    <h2>{{ title }}</h2>
    <component-plugin>
      <template #name>Mesto</template>
      <template #password>9090</template>
    </component-plugin>
  </div>
</template>

<script>
export default {
  name: "Component Plugin",
  data() {
    return {
      name:'',
      title: "Component Plugin Page",
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
