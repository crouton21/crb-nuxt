<script setup lang="ts">
import type { StaffMember } from '~/data/staff'

defineProps<{ member: StaffMember }>()
</script>

<template>
  <article class="staff-card">
    <img
      :src="`/images/${member.photo}`"
      :alt="`Photo of ${member.name}`"
      class="staff-card__photo"
      width="400"
      height="400"
      loading="lazy"
    />
    <div class="staff-card__info">
      <h3 class="staff-card__name">{{ member.name }}</h3>
      <p class="staff-card__title">{{ member.title }}</p>
      <p v-if="member.text" class="staff-card__bio">{{ member.text }}</p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.staff-card {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 30px 40px;

  @media only screen and (max-width: 1140px) {
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
    text-align: center;
  }

  &__photo {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 50px;
    flex-shrink: 0;

    @media only screen and (max-width: 1140px) {
      width: 300px;
      height: 300px;
    }
  }

  &__name {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  &__bio {
    font-size: 20px;
    line-height: 1.5;

    @media only screen and (max-width: 1140px) {
      font-size: 21px;
    }
  }
}
</style>
