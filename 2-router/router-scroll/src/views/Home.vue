<template>
    <div class="wrapper">
      <h2>{{ title }}</h2>
      <nav>
        <RouterLink to="/#img1" class="links">Image 1</RouterLink>
        <RouterLink to="/#img2" class="links">Image 2</RouterLink>
        <RouterLink to="/#img3" class="links">Image 3</RouterLink>
        <RouterLink to="/#img4" class="links">Image 4</RouterLink>
        <RouterLink to="/#img5" class="links">Image 5</RouterLink>
      </nav>
      <div class="ancher" id="img1">
        <img src="../assets/images/1.png" alt="">
      </div>
      <div class="ancher" id="img2">
        <img src="../assets/images/2.png" alt="">
      </div>
      <div class="ancher" id="img3">
        <img src="../assets/images/3.png" alt="">
      </div>
      <div class="ancher" id="img4">
        <img src="../assets/images/4.png" alt="">
      </div>
      <div class="ancher" id="img5">
        <img src="../assets/images/5.png" alt="">
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
.wrapper{
  width: 100%;
  padding-bottom: 250px;
}
nav{
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 20px;
  margin-top: 100px;
  padding: 10px;
  width: 200px;
}
.ancher{
  border-radius: 5px;
  height: 300px;
  width: 500px;
  border: 1px solid #ddd;
  margin: 20px 0;
  padding: 10px;

}
.ancher img{
 width: 500px;
 height: 300px;
}
.links{
  text-decoration: none;
  margin: 0 10px;
}
</style>