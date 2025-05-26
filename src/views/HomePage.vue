<template>
  <section class="hero-section pt-20">
    <div class="dynamic-bg"></div>
    <div class="immersive-content">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="space-y-6">
          <h1 class="rock-text text-5xl md:text-7xl">
            Lenny Kravitz
          </h1>
          <p class="soul-text text-xl md:text-2xl">
            Rock • Soul • Style
          </p>
          <div class="chic-element p-6 rounded-lg">
            <p class="text-lg">
              Artiste légendaire, musicien visionnaire, icône du style.
            </p>
          </div>
        </div>
        <div class="relative">
          <div class="chic-element rounded-lg overflow-hidden aspect-square">
            <img 
              src="/Lenny_Kravitz.webp" 
              alt="Lenny Kravitz" 
              class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="chic-element p-6 rounded-lg transform hover:scale-105 transition-transform">
          <h3 class="rock-text text-xl mb-4">Musique</h3>
          <p class="soul-text">Découvrez l'univers musical unique de Lenny Kravitz</p>
        </div>
        <router-link to="/style" class="block">
          <div class="chic-element p-6 rounded-lg transform hover:scale-105 transition-transform cursor-pointer">
            <h3 class="rock-text text-xl mb-4">Style</h3>
            <p class="soul-text">Explorez son influence sur la mode et le design</p>
          </div>
        </router-link>
        <div class="chic-element p-6 rounded-lg transform hover:scale-105 transition-transform">
          <h3 class="rock-text text-xl mb-4">Actualités</h3>
          <p class="soul-text">Restez informé des dernières nouvelles</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Le composant est réactif par défaut avec setup
</script>

<style scoped>
.hero-section {
  background-image: url('/images/background.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.immersive-content > * {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>

