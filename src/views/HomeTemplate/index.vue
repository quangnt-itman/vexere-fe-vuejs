<template>
  <div class="home-template">
    <Header />
    <!-- <h1>Home-template</h1> -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
