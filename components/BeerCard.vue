<script setup lang="ts">
import type { Beer } from '~/data/beers'

defineProps<{ beer: Beer }>()
</script>

<template>
  <article class="beer-card">
    <div class="beer-card__header">
      <h3 class="beer-card__name">{{ beer.name }}</h3>
      <div class="beer-card__stats">
        <span v-if="beer.ibu">IBU: {{ beer.ibu }}</span>
        <span v-if="beer.abv">ABV: {{ beer.abv }}%</span>
      </div>
    </div>
    <p class="beer-card__description">{{ beer.description }}</p>
  </article>
</template>

<style scoped lang="scss">
.beer-card {
  padding: 30px;

  @media only screen and (max-width: 1140px) {
    padding: 20px 10px;
  }

  &__header {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 6px;
  }

  &__name {
    font-size: 1.1rem;
    font-weight: 700;
  }

  &__stats {
    margin-left: auto;
    display: flex;
    gap: 10px;
    white-space: nowrap;
    font-size: 0.9rem;
    opacity: 0.85;
  }

  &__description {
    text-transform: lowercase;
    font-size: 1rem;
  }
}
</style>
