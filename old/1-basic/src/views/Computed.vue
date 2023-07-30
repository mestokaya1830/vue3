<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="text" v-model="price" placeholder="Price">
    <input type="text" v-model="quantity" placeholder="Quantity">
    <h2>Total Computed</h2>
    <h3>{{ getTotal }}</h3>
    <!-- or use inline mode -->
    <h2>Total Inline</h2>
    {{ price * quantity }}

    <h2>Sum Computed From Json</h2>
    <input type="button" value="Add New Product And See Total" @click="(addProduct())">
    <h3>{{ getSum }}</h3>
  </div>
</template>

<script>
export default {
  name: "Computed",
  data() {
    return {
      title: "Computed Page",
      price: null,
      quantity: null,
      products: [
        {name:'Laptop', price:4000},
        {name:'Desktop', price:3000},
        {name:'Mouse', price:2000},
        {name:'Keyboard', price:50},
        {name:'Camare', price:120}
      ]
    };
  },
  methods: {
    addProduct(){
      this.products.push({name:'Joystick',price:50})
    }
  },
  computed: {
    getTotal() {
      return this.price * this.quantity;
    },
    getSum(){
      return this.products.reduce((index, obj) => (index += obj.price),0)
    }
  },
};
</script>

<style>
#input-con {
  display: inline;
}
form {
  display: flex;
  flex-direction: column;
}
input,
select,
textarea {
  margin: 10px;
  padding: 5px 10px;
}
</style>
