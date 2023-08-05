<template>
  <div>
    <h2>{{ title }}</h2>
    <AlertProp proccess='Proccess is Continue'/>
    <AlertProp message='Proccess is Complated'/>
  </div>
</template>

<script>
import AlertProp from '../components/AlertProp.vue'
export default {
  name:'Component-Prop',
  data () {
    return {
      title:'Component-Prop Page',
    }
  }
};
</script>