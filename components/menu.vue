<template>
  <b-navbar toggleable="lg" type="dark" variant="info" :class="{'dark': variant === 'dark'}">
    <b-navbar-nav class="ml-auto">
      <b-nav-item right to="/" exact>HOME</b-nav-item>
      <b-nav-item right to="/on-tap">ON TAP</b-nav-item>
      <b-nav-item-dropdown text="FOOD" :class="{'router-link-exact-active': $route.path.startsWith('/food')}" left>
        <b-dropdown-item href="/food#menu">MENU</b-dropdown-item>
        <b-dropdown-item href="/food#catering">CATERING</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item right to="/events">EVENTS</b-nav-item>
      <b-nav-item right to="/about">OUR BREWERY</b-nav-item>
      <b-nav-item right class="social-media-link" href="https://www.facebook.com/profile.php?id=100083388390516"><font-awesome-icon :icon="['fab', 'facebook']" /></b-nav-item>
      <b-nav-item right class="social-media-link" href="https://www.instagram.com/copperriverbrewing/"><font-awesome-icon :icon="['fab', 'instagram']" /></b-nav-item>
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
  font-size: 1.4em;
}
</style>
