<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
export default {
  name: "Inject",
  inject:['message'],
  data() {
    return {
      title: "Inject Page"
    };
  },
  methods: {
    
  }
};
</script>