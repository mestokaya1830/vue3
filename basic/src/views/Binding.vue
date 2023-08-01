<template>
  <div>
  <h2>{{ title }}</h2>
  <br>
    <!-- binding text -->
    <p v-text="myText"></p>

    <!-- binding html -->
    <p v-html="myHtml"></p>
    
    <!-- binding class -->
    <p :class="{ panel: isAdmin }">Binding Class With If</p>
    <p class="{{ panel }}">Binding Class</p>
    <p :class="['new', 'font']">Binding Multi Classes</p>
    <p :class="role=='Admin' ? 'admin-class' : 'user-class'">Binding Class With Ternary</p>
    
    <!-- binding id -->
    <p :id="id">Binding ID</p>

  </div>
</template>

<script>
export default {
  name: "BindingClass",
  data() {
    return {
      title: "Binding Page",
      myText: "This is a BindingText",
      myHtml: "<h4>This is a BindingHtml</h4>",
      isAdmin: true,
      role: 'User',
      id:'p1'
    };
  },
};
</script>
<style>
p{
  margin: 5px 0;
}
.panel {
  color: red;
}
.public {
  color: blue;
}
.new {
  color: green;
}
.font {
  font-style: italic;
}
.admin-class{
  color: green;
}
.user-class{
  color: blue;
}
</style>
