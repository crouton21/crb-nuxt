<template>
  <b-navbar toggleable="lg" type="dark" variant="info" :class="{'full-menu': this.showMenu, 'short-menu': !this.showMenu, 'dark': variant === 'dark'}">
    <font-awesome-icon :icon="['fa-solid', 'fa-bars']" class="hamburger-menu" @click="toggleMenu"/>
    <b-navbar-nav :class="(this.showMenu)?'show-menu':'hide-menu'">
      <b-nav-item right to="/" exact @click.native="showMenu = false">HOME</b-nav-item>
      <b-nav-item right to="/on-tap" @click.native="showMenu = false">ON TAP</b-nav-item>
      <b-nav-item-dropdown text="FOOD" :class="{'router-link-exact-active': $route.path.startsWith('/food')}" right>
        <b-dropdown-item class="sub-menu" href="/food#menu" @click.native="showMenu = false">MENU</b-dropdown-item>
        <b-dropdown-item class="sub-menu" href="/food#catering" @click.native="showMenu = false">CATERING</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item right to="/events" @click.native="showMenu = false">EVENTS</b-nav-item>
      <b-nav-item right to="/about" @click.native="showMenu = false">OUR BREWERY</b-nav-item>
      <div class="side-by-side-nav">
        <b-nav-item class="social-media-link" right href="https://www.facebook.com/profile.php?id=100083388390516"><font-awesome-icon :icon="['fab', 'facebook']" /></b-nav-item>
        <b-nav-item class="social-media-link" right href="https://www.instagram.com/copperriverbrewing/"><font-awesome-icon :icon="['fab', 'instagram']" /></b-nav-item>
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

/* Dark amber on light bg (#dfe2ed) → 4.97:1. Orange when menu open on dark bg → 5.02:1 */
.fa-bars {
  color: #8c5000;
}

.full-menu .fa-bars {
  color: #eeb071;
}

.hamburger-menu {
  font-size: 32px;
}

.navbar-nav.hide-menu {
  display: none;
}

.social-media-link .nav-link {
  font-size: 1.4em;
}

.side-by-side-nav {
  display: inline-flex;
}

li.sub-menu {
  padding-top: 0px !important;
}

</style>
