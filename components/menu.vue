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

</style>
