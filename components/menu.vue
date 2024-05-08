<template>
  <b-navbar toggleable="lg" type="dark" variant="info" :class="{'dark': variant === 'dark'}">
    <b-navbar-nav class="ml-auto">
      <b-nav-item right href="/">HOME</b-nav-item>
      <b-nav-item right href="/on-tap">ON TAP</b-nav-item>
      <b-nav-item-dropdown text="FOOD" right>
        <b-dropdown-item href="/food#menu">MENU</b-dropdown-item>
        <b-dropdown-item href="/food#catering">CATERING</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item right href="/about">OUR BREWERY</b-nav-item>
      <b-nav-item right class="social-media-link" href="https://www.facebook.com/profile.php?id=100083388390516"><img class="logo" alt="Facebook" src="@/assets/facebook-logo.png" /></b-nav-item>
      <b-nav-item right class="social-media-link" href="https://www.instagram.com/copperriverbrewing/"><img class="logo" alt="Instagram" src="@/assets/instagram-logo.png" /></b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
  export default {
    props: ['variant']
  }
</script>

<style lang="scss">

.nav-item > .nav-link {
  padding-top: 50px;
  .logo {
    mix-blend-mode: normal;
    height: 30px;
  }
}

.nav-item.social-media-link {
  padding: 0 10px;
  filter: saturate(14%) contrast(37%) brightness(32%) invert(75%) sepia(97%) hue-rotate(353deg);
}
</style>
