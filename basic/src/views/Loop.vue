<template>
  <div>
    <h2>{{ title }}</h2>

    <ul>
      <li v-for="item, index in products" :key="index">
        <span>{{ item.name }}</span>
        <span>{{ item.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Loop",
  data() {
    return {
      title: "Loop Page",
      products: [
        { name: "Laptop", price: 200 },
        { name: "Desktop", price: 120 },
        { name: "Mobile", price: 200 },
        { name: "Joystick", price: 210 }
      ],
    }
  },
  computed:{
   
  }
};
</script>
<style scoped>
  ul{
    display: flex;
    flex-direction: column;
  }
  ul > li{
    margin: 5px 0;
  }
  ul > li > span{
    margin: 0 10px;
  }
</style>
