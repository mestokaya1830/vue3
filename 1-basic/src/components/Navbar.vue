<template>
  <div>
    <ul>
      <li><router-link class="links" to="/">Home</router-link></li>
      <li><router-link class="links" to="/binding">Binding</router-link></li>
      <li><router-link class="links" to="/flow">Flow</router-link></li>
      <li><router-link class="links" to="/loop">Loop</router-link></li>
      <li><router-link class="links" to="/methods">Methods</router-link></li>
      <li><router-link class="links" to="/events">Events</router-link></li>
      <li><router-link class="links" to="/form">Form</router-link></li>
      <li><router-link class="links" to="/modifiers">Modifiers</router-link></li>
      <li><router-link class="links" to="/directive">Directive</router-link></li>
      <li><router-link class="links" to="/computed">Computed</router-link></li>
      <li><router-link class="links" to="/watcher">Watcher</router-link></li>
      <li><router-link class="links" to="/component">Component</router-link></li>
      <li><router-link class="links" to="/componentprop">ComponentProp</router-link></li>
      <li><router-link class="links" to="/componentpropdynamic">ComponentPropDynamic</router-link></li>
      <li><router-link class="links" to="/componentevent">Component-Event</router-link></li>
      <li><router-link class="links" to="/slot">Slot</router-link></li>
      <li><router-link class="links" to="/provideinject">Provide-Inject</router-link></li>
      <li><router-link class="links" to="/httprequest">Http-Request</router-link></li>
      <li><router-link class="links" to="/refs">Refs</router-link></li>
      <li><router-link class="links" to="/mixins">Mixins</router-link></li>
      <li><router-link class="links" to="/vuex">Vuex</router-link></li>
      <li><router-link class="links" to="/setup">Setup</router-link></li>
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