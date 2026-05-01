<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <li class="food-tile">{{ name }}</li>
</template>

<style scoped>
.food-tile {
  padding: 20px 10px;
  font-weight: 700;
  break-inside: avoid;
}
</style>
