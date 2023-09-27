<template>
  <div class="">
    <div class="w-full md:w-11/12 lg:w-3/4 mx-auto">
      <NavBar></NavBar>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/navbar/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
@font-face {
  font-family: Nunito ;
  src:url('~@/assets/font/NunitoSans_10pt-Regular.ttf')
}


body {
  font-family: "Nunito", sans-serif;
}
</style>
