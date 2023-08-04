<template>
  <div>
    <h2>{{ title }}</h2>
   <ul>
    <template v-for="item in Persons" :key="item.index">
      <li v-if="item.index < 50">
        <span>{{ item.name }}</span>
        <span>{{ item.company }}</span>
        <!-- only comapany title -->
        <!-- <span>{{ item.company.title }}</span> -->
      </li>
    </template>
   </ul>
  </div>
</template>

<script>
import Person from '../assets/persons.json';
export default {
  name:'Get Local File',
  data () {
    return {
      title:'Get Local File Page',
      Persons: {}
    }
  },

  mounted () {
    this.Persons = Person
    console.log(Person)
  },

  methods:{
   
  }
};
</script>

<style scoped>
ul{
  display: flex;
  flex-direction: column;
}
ul li span{
  width: 120px;
  margin: 0 20px;
}
</style>