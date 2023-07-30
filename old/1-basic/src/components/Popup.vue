<template>
  <div>
    <h1>Popup Component</h1>
    <button @click="$emit('close')">Close Popup Component</button>
  </div>
</template>
<script>
  export default {
    name: "Popup",
    emits:['close'],
    data() {
      return {
        
      };
    },
  };
  </script>
  <style scoped>
    div{
      width: 400px;
      padding: 10px;
      margin-top: 20px;
      text-align: center;
      border-radius: 4px;
      border: 1px solid #ccc;
      box-shadow: 1px 1px 10px #999;
    }
    button{
      margin: 20px;
      padding: 10px 20px;
    }
  </style>
