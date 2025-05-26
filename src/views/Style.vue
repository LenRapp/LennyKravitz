<template>
  <section class="hero-section pt-20">
    <div class="dynamic-bg"></div>
    <div class="immersive-content">
      <h1 class="rock-text text-4xl md:text-5xl mb-12 text-center">Le Style de Lenny Kravitz</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="chic-element p-6 rounded-lg">
          <h2 class="rock-text text-2xl mb-4">L'Icone de la Mode</h2>
          <p class="soul-text text-lg leading-relaxed">
            Lenny Kravitz est reconnu pour son style unique qui mélange rock, bohème et élégance. 
            Ses choix vestimentaires ont influencé toute une génération de créateurs et de fans.
          </p>
        </div>

        <div class="chic-element p-6 rounded-lg">
          <h2 class="rock-text text-2xl mb-4">Design & Architecture</h2>
          <p class="soul-text text-lg leading-relaxed">
            Au-delà de la musique, Lenny Kravitz s'est fait un nom dans le monde du design et de l'architecture, 
            créant des espaces qui reflètent sa vision artistique unique.
          </p>
        </div>
      </div>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="chic-element p-6 rounded-lg">
          <h3 class="rock-text text-xl mb-4">Rock & Bohème</h3>
          <p class="soul-text">Son style signature mêlant cuir, accessoires et élégance décontractée. Une fusion parfaite entre le rock des années 70 et l'esthétique bohème contemporaine.</p>
        </div>

        <div class="chic-element p-6 rounded-lg">
          <h3 class="rock-text text-xl mb-4">Design Intérieur</h3>
          <p class="soul-text">Ses créations d'intérieur alliant luxe et confort. Une approche unique qui combine des éléments vintage avec des touches modernes.</p>
        </div>

        <div class="chic-element p-6 rounded-lg">
          <h3 class="rock-text text-xl mb-4">Influence Mode</h3>
          <p class="soul-text">Son impact sur les tendances de la mode contemporaine. Un style qui continue d'inspirer les créateurs et les amateurs de mode du monde entier.</p>
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

.dynamic-bg {
  @apply absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90;
}

.immersive-content {
  @apply relative z-10 container mx-auto px-4 py-16;
}

.chic-element {
  @apply border border-white/20 backdrop-blur-sm bg-black/40;
  transition: transform 0.3s ease;
}

.chic-element:hover {
  transform: translateY(-5px);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.immersive-content > * {
  animation: fadeIn 0.8s ease-out forwards;
}
</style> 