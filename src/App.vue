<template>
  <div class="w-full md:w-11/12 mx-auto">
    <NavBar></NavBar>

    <router-view></router-view>
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
body{
  font-family: 'Nunito Sans', sans-serif;
}
</style>
