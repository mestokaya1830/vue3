<template>
  <div>
    <h2>{{ title }}</h2>
    <GlobalComponent />
  </div>
</template>

<script>
//global component must be declare in main.js go to main.js to look at
export default {
  name:'Component Global',
  data () {
    return {
      title:'Component Global Page',
    }
  }
};
</script>