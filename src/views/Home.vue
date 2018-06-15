<template>
  <div class="home">
    <Navigation msg="Welcome to Your Vue.js App"/>
    <img src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";

export default {
  name: "home",
  components: {
    Navigation
  }
};
</script>
