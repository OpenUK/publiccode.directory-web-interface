<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
  import Navigation from "./components/Navigation.vue";
  import Footer from "./components/Footer.vue";
  export default {
    components: {
      Navigation,
      Footer,
    },
    mounted() {
      this.$store.dispatch("fetchProducts");
      this.$store.commit("getCategories");
      this.$store.commit("getLicences");
      this.$store.commit("getSector");
      this.$store.commit("getCountries");
    },
  };
</script>

<style lang="scss">
  @import "bulma";

  html,
  body {
    height: 100%;
  }
  object {
    pointer-events: none;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-flow: column nowrap;
    height: 100%;

    div:first-child {
      flex-shrink: 0;
    }
  }
  section {
    flex: 1 0 auto;
  }
  footer {
    flex-shrink: 0;
  }
  .logo {
    height: 100px;
  }
</style>
