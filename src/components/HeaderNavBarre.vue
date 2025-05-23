<template>
  <header 
    class="fixed w-full z-50 transition-all duration-300" 
    :class="{'bg-black/80 backdrop-blur-md': isScrolled, 'bg-transparent': !isScrolled}"
    role="banner"
  >
    <nav class="w-full px-4 md:px-12 flex justify-between items-center py-4" role="navigation" aria-label="Navigation principale">
      <RouterLink to="/" class="flex items-center space-x-2" aria-label="Retour à l'accueil">
        <span class="rock-text text-white text-xl md:text-2xl hidden md:block">Lenny Kravitz</span>
      </RouterLink>
      
      <div class="flex items-center space-x-6" role="menubar">
        <RouterLink to="/" class="nav-link" role="menuitem" aria-current="page">Accueil</RouterLink>
        <RouterLink to="/album" class="nav-link" role="menuitem">Album</RouterLink>
        <RouterLink to="/history" class="nav-link" role="menuitem">Histoire</RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Vérifier la position initiale
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
  @apply text-white/80 hover:text-white text-lg transition-colors duration-300 relative;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300;
}

.nav-link:hover::after {
  @apply w-full;
}

.router-link-active {
  @apply text-white;
}

.router-link-active::after {
  @apply w-full;
}
</style>