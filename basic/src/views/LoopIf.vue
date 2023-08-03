<template>
  <div>
    <h2>{{ title }}</h2>
      <template v-for="item, index in products" :key="index">
        <div class="list" v-if="item.price > 120">
          <span>{{ item.name }}</span>
          <span >{{ item.price }}</span>
        </div>
      </template>
  </div>
</template>

<script>
export default {
  name: "Loop If",
  data() {
    return {
      title: "Loop If Page",
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
  .list{
    display: flex;
  }
  .list span{
    padding: 5px 10px;
  }
</style>
