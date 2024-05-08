<template>
  <b-navbar toggleable="lg" type="dark" variant="info" :class="{'full-menu': this.showMenu, 'short-menu': !this.showMenu, 'dark': variant === 'dark'}">
    <font-awesome-icon :icon="['fa-solid', 'fa-bars']" class="hamburger-menu" @click="toggleMenu"/>
    <b-navbar-nav :class = "(this.showMenu)?'show-menu':'hide-menu'">
      <b-nav-item right href="/">HOME</b-nav-item>
      <b-nav-item right href="/on-tap">ON TAP</b-nav-item>
      <b-nav-item-dropdown text="FOOD" right>
        <b-dropdown-item class="sub-menu" href="/food#menu">MENU</b-dropdown-item>
        <b-dropdown-item class="sub-menu" href="/food#catering">CATERING</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item right href="/about">OUR BREWERY</b-nav-item>
      <div class="side-by-side-nav">
        <b-nav-item class="social-media-link" right href="https://www.facebook.com/profile.php?id=100083388390516"><img class="logo" alt="Facebook" src="@/assets/facebook-logo.png" /></b-nav-item>
        <b-nav-item class="social-media-link" right href="https://www.instagram.com/copperriverbrewing/"><img class="logo" alt="Instagram" src="@/assets/instagram-logo.png" /></b-nav-item>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu: function() {
      this.showMenu = !this.showMenu
    }
  },
  props: ['variant']
}
</script>

<style lang="scss">

.dropdown-menu {
  background-color: #f7f3ed;
}

.fa-bars {
  color: #eeb071;
}

.hamburger-menu {
  font-size: 32px;
}

.navbar-nav.hide-menu {
  display: none;
}

.nav-item > .nav-link {
  .logo {
    mix-blend-mode: normal;
    height: 30px;
  }
}

.side-by-side-nav {
  display: inline-flex;
}

li.sub-menu {
  padding-top: 0px !important;
}

</style>
