<template lang="">
  <div>
    <h2 class="title">{{title}}</h2>
    <p>{{ user}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UserDetailsView',
  data() {
    return {
      title: ' User Details',
      user: null
    }
  },
  mounted() {
    this.userDetails()
  },
  methods: {
    async userDetails(id) {
      // await axios.get('http://localhost:3000/users/' + this.$route.params.id).then(result => {
      //   this.user = result.data.user
      // })
      
      const result = await fetch('http://localhost:3000/users/' + this.$route.params.id)
      const final = await result.json()
      this.user = final.user
    }
  }
}
</script>
<style scoped>
.title{
  margin-bottom: 20px;
}
.user-list {
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 400px;
  margin: 5px 0;
  padding-bottom: 5px;
  border-bottom: 1px solid #ddd;
}
.user-list span{
  width: 120px;
}
.user-list span:first-child{
  max-width: 30px;
}
</style>