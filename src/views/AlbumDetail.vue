<template>
  <section class="hero-section">
    <div class="dynamic-bg"></div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style scoped>
.hero-section {
  background-image: url('/images/background.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
}

.dynamic-bg {
  @apply absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90;
}
</style> 