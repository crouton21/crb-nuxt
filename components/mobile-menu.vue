<template>
  <b-navbar toggleable="lg" type="dark" variant="info" v-bind:class = "(this.showMenu)?'full-menu':'short-menu'">
    <font-awesome-icon :icon="['fa-solid', 'fa-bars']" class="hamburger-menu" @click="toggleMenu"/>
    <b-navbar-nav v-bind:class = "(this.showMenu)?'show-menu':'hide-menu'">
      <b-nav-item right href="/">HOME</b-nav-item>
      <b-nav-item right href="/on-tap">ON TAP</b-nav-item>
      <b-nav-item right href="/food">FOOD</b-nav-item>
      <b-nav-item-dropdown text="ABOUT" right>
        <b-dropdown-item href="/about#our-brewery">OUR BREWERY</b-dropdown-item>
        <b-dropdown-item href="/about#brew-crew">BREW CREW</b-dropdown-item>
      </b-nav-item-dropdown>
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
      console.log('in toggleMenu')
      this.showMenu = !this.showMenu
      console.log(this.showMenu)
    }
  }
}
</script>

<style lang="scss">

.dropdown-menu {
  background-color: #f7f3ed;
}

.fa-bars {
  color: #f8f3ed;
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

</style>
