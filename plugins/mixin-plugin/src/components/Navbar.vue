<template>
  <div>
    <ul>
      <li><router-link class="links" to="/">Home</router-link></li>
      <li><router-link class="links" to="/about">About</router-link></li>
      <li><router-link class="links" to="/contact">Contact</router-link></li>
    </ul>
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    margin: 10px;
  }
  ul > li{
    margin: 5px;
  }
  .links{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
    color: black;
    padding: 5px 10px;
    text-decoration: none;
    border-radius: 3px;
  }
</style>