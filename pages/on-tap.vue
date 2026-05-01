<script setup lang="ts">
import { beers } from '~/data/beers'
import { naOptions } from '~/data/na-options'

definePageMeta({ dark: true })

useSeo({
  title: 'On Tap',
  description: "Check what's on tap at Copper River Brewing in Cordova, AK. Rotating craft beers brewed in-house — list may change often.",
  path: '/on-tap',
})
</script>

<template>
  <div class="on-tap page-body">
    <div class="on-tap__hero-wrap">
      <img
        src="/images/flight.jpg"
        alt="A flight of Copper River Brewing beers"
        class="on-tap__hero"
        width="1200"
        height="533"
        fetchpriority="high"
       
      />
    </div>

    <section class="beer-section" aria-labelledby="beers-heading">
      <h1 id="beers-heading" class="section-heading">Beers On Tap</h1>
      <p class="rotating-note">Our tap list rotates frequently — this may not reflect what's currently pouring.</p>
      <ul class="beer-list">
        <BeerCard v-for="beer in beers" :key="beer.name" :beer="beer" />
      </ul>
    </section>

    <section class="beer-section" aria-labelledby="na-heading">
      <h2 id="na-heading" class="section-heading">Non-Alcoholic Options</h2>
      <ul class="beer-list">
        <BeerCard v-for="option in naOptions" :key="option.name" :beer="{ name: option.name, description: option.description ?? '' }" />
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss">
.on-tap {
  padding-top: 40px;

  &__hero-wrap {
    display: flex;
    justify-content: center;
    padding: 0;
    margin-bottom: 40px;
  }

  &__hero {
    max-width: 100%;
    height: auto;
    border-radius: 225px;

    @include mobile {
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      border-radius: $radius-md;
    }
  }
}

.beer-section {
  margin-top: 20px;

  &:last-child {
    padding-bottom: 60px;
  }
}

.section-heading {
  font-weight: 700;
  padding-top: 40px;
  color: $color-text-on-dark;

  &::before {
    content: '';
    display: block;
    height: 1px;
    background-color: $color-text-on-dark;
    width: 100%;
    margin-bottom: 10px;
  }
}

.rotating-note {
  color: $color-text-on-dark;
  font-size: 0.9em;
  opacity: 0.8;
  font-style: italic;
  margin-top: 8px;
  margin-bottom: 20px;
}

.beer-list {
  @include desktop {
    columns: 2;
  }
}
</style>
