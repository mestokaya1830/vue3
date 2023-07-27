<template>
  <div>
    <h1>{{ proccess }}</h1>
    <h1>{{ message }}</h1>
  </div>
</template>
<script>
export default {
  name: "Alert-Prop",
  props: {
    proccess: {
      type: String,
      require: true,
      default:''
    },
    message: {
      type: String,
      require: true,
      default:''
    },
  },
  data() {
    return {};
  },
};
</script>
