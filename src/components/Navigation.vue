<template>
  <div class="columns is-centered is-multiline">
    <div class="column is-8">
      <nav class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <object class='logo' data="img/logo.svg" alt="Logo" type='image/svg+xml'></object>
          </a>
          <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-end">
            <router-link to="/about" class="navbar-item" >About</router-link>
            <router-link to="/data" class="navbar-item" >Software</router-link>
            <router-link to="/join" class="navbar-item" >Join</router-link>
          </div>
        </div>
      </nav>

    </div>
  </div>
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
