<script setup lang="ts">
import { goTos } from '~/data/food'
import { business } from '~/data/business'

useSeo({
  title: 'Food',
  description: 'Homemade food at Copper River Brewing in Cordova, AK. Our menu rotates nightly — stop in to see what Joe is cooking. Catering available.',
  path: '/food',
})

const foodPhotos = [
  { src: '/images/blt.jpg', alt: 'BLT sandwich' },
  { src: '/images/chili.jpg', alt: 'Bowl of chili' },
  { src: '/images/burgersoysters.jpg', alt: 'Burgers and oysters' },
  { src: '/images/steak.jpg', alt: 'Grilled steak' },
  { src: '/images/bread.jpg', alt: 'Fresh bread' },
  { src: '/images/tacos.jpg', alt: 'Fish tacos' },
]
</script>

<template>
  <div class="food page-body">
    <section id="menu" class="food-menu">
      <h1 class="food-intro">
        Food choices rotate nightly.
      </h1>

      <p class="menu-sub-header">Go-tos include:</p>

      <ul class="food-list">
        <FoodTile v-for="item in goTos" :key="item" :name="item" />
      </ul>

      <p class="take-out">TAKE-OUT ORDERS WELCOME!</p>

      <div class="food-photos">
        <img
          v-for="photo in foodPhotos"
          :key="photo.src"
          :src="photo.src"
          :alt="photo.alt"
          class="food-photo"
          width="600"
          height="600"
          loading="lazy"
         
        />
      </div>
    </section>

    <hr class="section-divider">

    <section id="catering" class="catering">
      <h2 class="catering__heading">Catering</h2>
      <p class="catering__text">
        Yes, we cater! Email Shae at
        <a href="mailto:crcouchpotatoes@gmail.com">crcouchpotatoes@gmail.com</a>
        for catering requests.
      </p>
    </section>
  </div>
</template>

<style scoped lang="scss">
.food {
  text-align: center;
  color: $color-text;
  padding-top: 40px;
}

.food-intro {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.menu-sub-header {
  font-family: $font-display;
  font-size: 40px;
  font-weight: normal;
  margin-bottom: 10px;
}

.food-list {
  @include desktop {
    columns: 4;
  }

  @include mobile {
    columns: 1;
  }
}

.take-out {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 20px 0;
}

.food-photos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 20px;

  @include mobile {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

.food-photo {
  aspect-ratio: 1 / 1;
  width: 100%;
  object-fit: cover;
  border-radius: $radius-lg;

  @include mobile {
    border-radius: $radius-md;
  }
}

.section-divider {
  border: none;
  border-top: 2px solid $color-text;
  margin: 40px 0;
  opacity: 0.3;
}

.catering {
  padding-bottom: 40px;

  &__heading {
    font-family: $font-display;
    font-size: 40px;
    font-weight: normal;
    margin-bottom: 16px;
  }

  &__text {
    font-size: 1rem;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;

    a {
      color: $color-link;

      &:hover {
        color: $color-link-hover;
        text-decoration: underline;
      }
    }
  }
}
</style>
