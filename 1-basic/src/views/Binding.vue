<template>
  <div>
  <h2>{{ title }}</h2>
  <br>
    <!-- binding text -->
    <h4 v-text="myText"></h4>

    <!-- binding html -->
    <div v-html="myHtml"></div>

    <!-- binding class -->
    <h4 :class="{ panel: isAdmin }">Binding Class With If</h4>
    <h4 class="{{ panel }}">Binding Class</h4>
    <h4 :class="['new', 'font']">Binding Multi Classes</h4>
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
    };
  },
};
</script>
<style>
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
</style>
