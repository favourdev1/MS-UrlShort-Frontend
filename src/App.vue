<template>
  <div class="">
    <div class="w-full fixed z-[999] top-0 backdrop-blur-md bg-white">
      <!-- <NavBar ></NavBar> -->
    </div>
    <div class="pt-32">
      <router-view></router-view>
    </div>
    <div class="w-full md:w-11/12 lg:w-3/4 mx-auto">
      <FooterSection class="relative bg-white h-full"></FooterSection>

    </div>
  
  </div>
</template>

<script>

// import NavBar from "./components/navbar/NavBar.vue";
import FooterSection from "./components/props/Footer/FooterView.vue";
import 'boxicons/css/boxicons.min.css';

export default {
  name: "App",
  components: {
    // NavBar,
    FooterSection,
  },
};
</script>

<style>
@font-face {
  font-family: Nunito;
  src: url("~@/assets/font/NunitoSans_10pt-Regular.ttf");
}

body {
  font-family: "Nunito", sans-serif;
}
</style>
