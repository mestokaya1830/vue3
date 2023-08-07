<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="container">
      <nav>
        <ul>
          <li><router-link class="links" to="/account">Bets</router-link></li>
          <li><router-link class="links" to="/users">Users</router-link></li>
          <li><router-link class="links" to="/profile">Profile</router-link></li>
          <li><router-link class="links" to="/balance">Balance</router-link></li>
        </ul>
      </nav>
      <RouterView class="router"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account Page",
  data() {
    return {
      title: "Account Page"
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.container{
  display: flex;
  width: 100%;
}
.router{
  display: flex;
  justify-content: center;
  width: 100%;
}
nav ul{
  display: flex;
  flex-direction: column;
}
</style>
