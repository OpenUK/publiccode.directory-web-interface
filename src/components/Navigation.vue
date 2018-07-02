<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href='/'>
          <object class='logo' data="img/logo.svg" type='image/svg+xml' alt="Logo">OSS Logo</object>
        </a>
        <span class="navbar-burger burger" data-target="navbarMenuHeroA" :class="{'is-active': showNav}" @click.prevent="toggleNav()">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" class="navbar-menu" :class="{'is-active': showNav}">
        <div class="navbar-end">
          <router-link to='/about' class='navbar-item'>
            <span @click="toggleNav()">About the Project</span>
          </router-link>
          <router-link to="/software" class='navbar-item'>
            <span @click="toggleNav()">OSS Directory</span>
          </router-link>
          <router-link to="/join" class='navbar-item'>
            <span @click="toggleNav()">How to join</span>
          </router-link>
        </div>
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
    },
    methods: {
      toggleNav() {
        !this.showNav ? (this.showNav = true) : (this.showNav = false);
      }
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
  .logo {
    height: 3.25rem;
  }
  .navbar-item {
    span {
      display: block;
    }
  }
</style>
