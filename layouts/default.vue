<script setup lang="ts">
const route = useRoute()
const dark = computed(() => route.meta.dark === true)
</script>

<template>
  <div :class="{ 'theme-dark': dark }">
    <AppNavbar :dark="dark" />
    <main>
      <slot />
    </main>
    <AppFooter :dark="dark" />
  </div>
</template>
