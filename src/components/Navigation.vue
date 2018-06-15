<template>
   <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Logo">
        </a>
        <!--
    Using the v-on: directive to listen for the click event and toggle the data property showNav. Also, using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!--
    Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <a class="navbar-item" href="/about">
            About
          </a>
          <a class="navbar-item" href="/path">
            Path
          </a>
          <a class="navbar-item" href="/blog">
            Blog
          </a>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    msg: String
  },
  data() {
    return {
      showNav: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
