<script setup lang="ts">
import { business } from '~/data/business'

defineProps<{ dark?: boolean }>()
</script>

<template>
  <footer class="footer-wrap" :class="{ 'footer-wrap--dark': dark }">
    <hr>
    <div class="footer-inner">
      <img
        src="/images/CopperRiverSIMPLE-transformed.jpg"
        alt="Copper River Brewing logo"
        class="footer-logo"
        width="200"
        height="200"
        loading="lazy"
      />
      <div class="footer-grid">
        <div>
          <h2>Address</h2>
          <p>{{ business.address.street }}</p>
          <p>{{ business.address.city }},&nbsp;{{ business.address.state }} {{ business.address.zip }}</p>
        </div>
        <div>
          <h2>Phone</h2>
          <p><a :href="`tel:${business.phoneTel}`">{{ business.phone }}</a></p>
        </div>
        <div>
          <h2>Hours</h2>
          <p>{{ business.hours.display }}</p>
          <p>{{ business.hours.lastCall }}</p>
        </div>
        <div>
          <h2>Email</h2>
          <p><a :href="`mailto:${business.email.manager}`">{{ business.email.manager }} (Audrey)</a></p>
          <p><a :href="`mailto:${business.email.general}`">{{ business.email.general }} (Christiana)</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>
