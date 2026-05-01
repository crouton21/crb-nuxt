<script setup lang="ts">
useSeo({
  title: 'Copper River Brewing | Craft Beer in Cordova, AK',
  description: 'Copper River Brewing — craft beer, homemade food, and good vibes in Cordova, Alaska.',
  path: '/',
})
</script>

<template>
  <div class="home page-body">
    <h1 class="home__tagline">
      Servin' up good beer, good food and good vibes in Cordova,&nbsp;AK
    </h1>
    <img
      src="/images/growler-download.jpg"
      alt="The Copper River Brewing taproom"
      class="home__hero"
      width="1600"
      height="533"
      fetchpriority="high"
     
    />
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - $navbar-height);
  gap: 40px;
  padding-top: 20px;
  padding-bottom: 20px;

  @include mobile {
    min-height: auto;
    gap: 20px;
    margin-top: 30px;
  }

  &__tagline {
    font-family: $font-display;
    letter-spacing: 9px;
    color: $color-text;
    font-size: 65px;
    font-weight: normal;
    text-align: center;
    width: 80%;

    @include mobile {
      font-size: 45px;
      width: 100%;
    }
  }

  &__hero {
    width: 85%;
    aspect-ratio: 3 / 1;
    border-radius: $radius-lg;
    object-fit: cover;

    @include mobile {
      width: 100%;
      aspect-ratio: 2 / 1;
      border-radius: $radius-md;
      object-position: 30% center;
    }
  }
}
</style>
