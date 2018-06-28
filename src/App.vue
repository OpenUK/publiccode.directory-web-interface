<template>
  <div id='app'>
    <div class="wrapper">
      <router-view/>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import Footer from "@/components/Footer.vue";
  export default {
    name: "Oss-Api",
    components: {
      "app-footer": Footer
    },
    created() {
      this.$store.dispatch("fetchLinks");
    },
    mounted() {},
    methods: {}
  };
</script>

<style lang="scss">
  @import "bulma";

  html,
  body {
    height: 100%;
  }

  body {
    display: flex;
    flex-flow: column nowrap;
  }
  .wrapper {
    flex-grow: 1;
  }
  footer {
    flex-shrink: 0;
  }
  object {
    pointer-events: none;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
</style>
