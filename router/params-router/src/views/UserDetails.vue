<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>{{ $route.params.id }}</h3>
    <h3 @click="goBack()" style="cursor: pointer;">Go Back</h3>
  </div>
</template>

<script>

export default {
  name: "User Details",
  data() {
    return {
      title: 'User Details'
    }
  },
  methods: {
    goBack() {
      return this.$router.push('/users')
    }
  }
};
</script>
<style scoped></style>
