<script setup lang="ts">
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { business } from '~/data/business'

defineProps<{ dark?: boolean }>()

const route = useRoute()
const menuOpen = ref(false)

const foodActive = computed(() => route.path.startsWith('/food'))

watch(
  () => route.fullPath,
  () => { menuOpen.value = false },
)
</script>

<template>
  <header>
    <!-- Desktop nav -->
    <nav
      class="navbar"
      :class="{ 'navbar--dark': dark }"
      aria-label="Main navigation"
    >
      <div class="nav-desktop">
        <NuxtLink to="/" class="nav-link" exact-active-class="nuxt-link-exact-active">HOME</NuxtLink>
        <NuxtLink to="/on-tap" class="nav-link">ON TAP</NuxtLink>

        <div class="nav-dropdown">
          <button
            class="nav-dropdown__trigger"
            :class="{ active: foodActive }"
            aria-haspopup="true"
          >
            FOOD
          </button>
          <div class="nav-dropdown__menu" role="menu">
            <NuxtLink :to="{ path: '/food', hash: '#menu' }" class="nav-dropdown__item" role="menuitem">MENU</NuxtLink>
            <NuxtLink :to="{ path: '/food', hash: '#catering' }" class="nav-dropdown__item" role="menuitem">CATERING</NuxtLink>
          </div>
        </div>

        <NuxtLink to="/events" class="nav-link">EVENTS</NuxtLink>
        <NuxtLink to="/about" class="nav-link">OUR BREWERY</NuxtLink>

        <a
          :href="business.social.facebook"
          class="nav-social"
          aria-label="Copper River Brewing on Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon :icon="faFacebook" />
        </a>
        <a
          :href="business.social.instagram"
          class="nav-social"
          aria-label="Copper River Brewing on Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon :icon="faInstagram" />
        </a>
      </div>

      <!-- Mobile trigger -->
      <div class="nav-mobile-trigger">
        <button
          class="hamburger"
          :class="{ 'navbar--dark': dark }"
          aria-label="Open navigation menu"
          aria-expanded="false"
          aria-controls="mobile-menu"
          @click="menuOpen = true"
        >
          <FontAwesomeIcon :icon="faBars" />
        </button>
      </div>
    </nav>

    <!-- Mobile overlay -->
    <div
      id="mobile-menu"
      class="mobile-menu"
      :class="{ 'mobile-menu--open': menuOpen }"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <button
        class="mobile-menu__close"
        aria-label="Close navigation menu"
        @click="menuOpen = false"
      >
        <FontAwesomeIcon :icon="faTimes" />
      </button>

      <NuxtLink to="/" class="mobile-nav-link" exact-active-class="nuxt-link-exact-active" @click="menuOpen = false">HOME</NuxtLink>
      <NuxtLink to="/on-tap" class="mobile-nav-link" @click="menuOpen = false">ON TAP</NuxtLink>
      <NuxtLink :to="{ path: '/food', hash: '#menu' }" class="mobile-dropdown-item" @click="menuOpen = false">MENU</NuxtLink>
      <NuxtLink :to="{ path: '/food', hash: '#catering' }" class="mobile-dropdown-item" @click="menuOpen = false">CATERING</NuxtLink>
      <NuxtLink to="/events" class="mobile-nav-link" @click="menuOpen = false">EVENTS</NuxtLink>
      <NuxtLink to="/about" class="mobile-nav-link" @click="menuOpen = false">OUR BREWERY</NuxtLink>

      <div style="display:flex; gap: 20px; margin-top: 20px;">
        <a
          :href="business.social.facebook"
          class="nav-social"
          aria-label="Copper River Brewing on Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon :icon="faFacebook" />
        </a>
        <a
          :href="business.social.instagram"
          class="nav-social"
          aria-label="Copper River Brewing on Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon :icon="faInstagram" />
        </a>
      </div>
    </div>
  </header>
</template>
