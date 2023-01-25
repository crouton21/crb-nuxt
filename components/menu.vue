<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-nav class="ml-auto">
      <b-nav-item right href="/">HOME</b-nav-item>
      <b-nav-item right href="/on-tap">ON TAP</b-nav-item>
      <b-nav-item right href="/food">FOOD</b-nav-item>
      <b-nav-item-dropdown text="ABOUT" right ref="dropdown">
        <b-dropdown-item href="/about#our-brewery">OUR BREWERY</b-dropdown-item>
        <b-dropdown-item href="/about#brew-crew">BREW CREW</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item right class="social-media-link" href="https://www.facebook.com/profile.php?id=100083388390516"><img class="logo" alt="Facebook" src="@/assets/facebook-logo.png" /></b-nav-item>
      <b-nav-item right class="social-media-link" href="https://www.instagram.com/copperriverbrewing/"><img class="logo" alt="Instagram" src="@/assets/instagram-logo.png" /></b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
  export default {
    methods: {

    }
  }
</script>

<style lang="scss">

.dropdown-menu {
  background-color: #f7f3ed;
}

.nav-item > .nav-link {
  .logo {
    mix-blend-mode: normal;
    height: 30px;
  }
}

.nav-item.social-media-link {
  padding: 0 10px;
}

</style>
