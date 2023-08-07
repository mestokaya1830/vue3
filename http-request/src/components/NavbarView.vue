<template>
  <div>
   <ul>
    <li><RouterLink to="/">Home</RouterLink></li>
    <li><RouterLink to="/axios">Axios</RouterLink></li>
    <li><RouterLink to="/fetch">Fetch</RouterLink></li>
    <li><RouterLink to="/local">Local</RouterLink></li>
   </ul>
  </div>
</template>

<style scoped>
ul{
  display: flex;
  margin: 0;
  padding: 10px;
  list-style: none;
}
ul li{
  padding: 5px 15px;
}
</style>