<template>
  <div>
    <ul>
      <li><router-link class="links" to="/">Internal Plugin</router-link></li>
      <li><router-link class="links" to="/externalplugin">External Plugin</router-link></li>
      <li><router-link class="links" to="/componentplugin">Component Plugin</router-link></li>
      <li><router-link class="links" to="/directiveplugin">Directive Plugin</router-link></li>
      <li><router-link class="links" to="/mixinplugin">Mixin Plugin</router-link></li>
      <li><router-link class="links" to="/provideplugin">Provide Plugin</router-link></li>
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