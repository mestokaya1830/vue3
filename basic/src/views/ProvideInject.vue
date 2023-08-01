<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <p>{{ user }}</p>
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