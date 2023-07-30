<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="text" ref="nameInput">
  </div>
</template>

<script>
export default {
  name: "Refs",
  data() {
    return {
      title:'Refs Page'
    };
  },
  mounted() {
    this.getRef()
  },
  methods: {
    getRef(){
      this.$refs.nameInput.value = 'Mesto'
      this.$refs.nameInput.focus()
      console.log(this.$refs.nameInput)
    }
  },
};
</script>
