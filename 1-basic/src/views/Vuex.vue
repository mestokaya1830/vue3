<template>
  <div>
    <h2>{{ title }}</h2>
    {{ $store.state.test }}
  </div>
</template>

<script>
export default {
  name: "Vuex",
  data() {
    return {
      title:'Vuex Page'
    };
  },
  mounted() {
    
  },
  methods: {
    
  },
};
</script>