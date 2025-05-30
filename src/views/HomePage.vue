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
          <p class="text-lg">
            Artiste légendaire, musicien visionnaire, icône du style.
          </p>
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
        <router-link to="/album" class="block">
        <div class="chic-element p-6 rounded-lg transform hover:scale-105 transition-transform">
          <h3 class="rock-text text-xl mb-4">Musique</h3>
          <p class="soul-text">Découvrez l'univers musical unique de Lenny Kravitz</p>
        </div>
        </router-link>
        <router-link to="/style" class="block">
          <div class="chic-element p-6 rounded-lg transform hover:scale-105 transition-transform cursor-pointer">
            <h3 class="rock-text text-xl mb-4">Style</h3>
            <p class="soul-text">Explorez son influence sur la mode et le design</p>
          </div>
        </router-link>
        <router-link to="/actualities" class="block">
          <div class="chic-element p-6 rounded-lg transform hover:scale-105 transition-transform">
            <h3 class="rock-text text-xl mb-4">Actualités</h3>
            <p class="soul-text">Restez informé des dernières nouvelles</p>
          </div>
        </router-link>
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

/* Style pour les boutons de navigation */
.immersive-content .mt-16 .chic-element {
  background-color: rgba(0, 0, 0, 0.7);
  color: #00BFFF;
  border: 1px solid #00BFFF;
  transition: all 0.3s ease;
}

.immersive-content .mt-16 .chic-element:hover {
  background-color: rgba(0, 0, 0, 0.9);
  color: #1E90FF;
  border-color: #1E90FF;
}

/* Style pour le bouton de présentation */
.immersive-content .space-y-6 .chic-element {
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  border: 1px solid #ffffff;
  transition: all 0.3s ease;
}

.immersive-content .space-y-6 .chic-element:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

/* Style pour le texte de présentation */
.presentation-text {
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  font-style: italic;
  letter-spacing: 0.5px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
</style>

