<template>
  <div>
    <h2>{{ title }}</h2>
    <RouterLink to="/#ancher" class="links">Ancher</RouterLink>
    <div class="ancher" id="ancher">
      <h2>Scroll comes here</h2>
    </div>
  </div>
</template>

<script>
export default {
  name:'Home',
  data () {
    return {
      title:'Home'
    }
  }
};
</script>

<style scoped>
.ancher{border-radius: 5px;
  min-height: 400px;
  width: 600px;
  margin: 600px auto;
  border: 1px solid #ddd;

}
.ancher h2{
  text-align: center;
  margin-top: 20px;
}
</style>