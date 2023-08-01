<script setup>
  import AlertProp from '../components/AlertProp.vue'
</script>
<template>
  <div>
    <h2>{{ title }}</h2>
    <AlertProp :proccess=proccess />
    <AlertProp :message=message />
  </div>
</template>

<script>
export default {
  name:'Component-Prop-Dynamic',
  data () {
    return {
      title:'Component-Prop-Dynamic Page',
      proccess:'Proccess is Continue',
      message:'Proccess is Complated'
    }
  }
};
</script>