<template>
  <div>
    <h2>{{ title }}</h2>

    <ul>
      <li v-for="item, index in products" :key="index">
        <span>{{ item.name }}</span>
        <span>{{ item.price }}</span>
      </li>
    </ul>
    <!-- filter set key as item key -->
    <h3>Filter</h3>
    <ul>
      <li v-for="item, index in products" :key="index" >
      <div v-if="item.price === 200">
        <span>{{ item.name }}</span>
        <span>{{ item.price }}</span>
      </div>
      </li>
    </ul>
    <!-- loop as computed -->
    <h3>Filter Computed</h3>
    <ul>
      <li v-for="item, index in expensivePrice" :key="index" >
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
    expensivePrice(){
      return this.products.filter(item => item.price > 200)
    }
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
