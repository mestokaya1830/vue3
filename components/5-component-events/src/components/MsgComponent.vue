<template>
  <div>
    <h2>This is Component Click Event</h2>
    <button @click="$emit('close')">Close Message Component</button>
  </div>
</template>
<script>
  export default {
    name: "MsgComopnent",
    data() {
      return {
        
      };
    }
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
