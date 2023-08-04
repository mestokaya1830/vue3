<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>{{ userDetails }}</h3>
    <h3 @click="goBack()" style="cursor: pointer;">Go Back</h3>
  </div>
</template>

<script>
import Persons from '../assets/persons.json'

export default {
  name: "User Details",
  data() {
    return {
      title: 'User Details',
      userDetails: null
    }
  },
  mounted() {
    this.getDetails()
    //if dosn'twork  without watch or if when you type userID on url address use belov
    // if(this.$route.params) this.getDetails
    // this.$watch(() => this.$route.params, this.getDetails)
  },
  methods: {
    async getDetails(){
      this.userDetails =  Persons.filter(item => item.index == this.$route.params.id)
    },
    goBack() {
      return this.$router.push('/users')
    }
  }
};
</script>
<style scoped></style>
