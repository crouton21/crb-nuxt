<script setup lang="ts">
import { staff } from '~/data/staff'

useSeo({
  title: 'Our Brewery',
  description: 'Meet the team behind Copper River Brewing — owners, brewers, chefs, and taproom crew serving Cordova, Alaska.',
  path: '/about',
})
</script>

<template>
  <div class="about page-body">
    <section class="about-intro">
      <div class="about-intro__text">
        <h1>Our Brewery</h1>
        <p>
          Copper River Brewing was born of the simple observation that
          there are more cool people in Cordova than there are dry spaces.
          CRB is a space for artists, skiers, knitters, fishermen, pilots,
          welders, biologists, desk jockeys, and the many other talented
          and eccentric individuals who call Cordova home.
        </p>
      </div>
      <img
        src="/images/team.jpg"
        alt="The Copper River Brewing team"
        class="about-intro__photo"
        width="800"
        height="600"
        loading="lazy"
       
      />
    </section>

    <section class="brew-crew" aria-labelledby="crew-heading">
      <h2 id="crew-heading" class="brew-crew__heading">Brew Crew</h2>
      <StaffCard
        v-for="member in staff"
        :key="member.name"
        :member="member"
      />
    </section>
  </div>
</template>

<style scoped lang="scss">
.about {
  padding-top: 40px;
}

.about-intro {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0 40px 40px;

  @include mobile {
    flex-direction: column;
    padding: 0 0 20px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 16px;
    color: $color-text;

    &::before {
      content: '';
      display: block;
      height: 1px;
      background-color: $color-text;
      width: 100%;
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 19px;
    line-height: 1.6;
    color: $color-text;
    font-style: italic;
  }

  &__text {
    flex: 1;
    min-width: 0;
  }

  &__photo {
    flex: 1;
    min-width: 0;
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    border-radius: $radius-md;

    @include mobile {
      flex: none;
      width: 100%;
      max-height: 300px;
    }
  }
}

.brew-crew {
  background-color: $color-bg-dark;
  border-radius: 20px;
  margin: 0 40px 40px;
  padding: 20px 0;
  color: $color-text-on-dark;

  @include mobile {
    margin: 0 0 20px;
    border-radius: 0;
  }

  &__heading {
    font-size: 1.5rem;
    padding: 20px 40px 10px;
    color: $color-text-on-dark;
  }
}
</style>
