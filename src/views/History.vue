<template>
  <section class="hero-section pt-20">
    <div class="dynamic-bg"></div>
    <div class="immersive-content">
      <!-- Photo centrale -->
      <div class="flex justify-center mb-16">
        <div class="chic-element rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80">
          <img 
            src="/LennyHistoire.jpeg" 
            alt="Lenny Kravitz" 
            class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div class="max-w-4xl mx-auto">
        <h1 class="rock-text text-4xl md:text-5xl mb-8 text-center">L'Histoire de Lenny Kravitz</h1>
        
        <div class="space-y-12">
          <!-- Enfance et débuts -->
          <div class="chic-element p-6 rounded-lg">
            <h2 class="rock-text text-2xl mb-4">Les Débuts (1964-1988)</h2>
            <p class="soul-text text-lg leading-relaxed">
              Leonard Albert Kravitz naît le 26 mai 1964 à New York. Fils de l'actrice Roxie Roker et du producteur de télévision Sy Kravitz, 
              il grandit dans un environnement artistique. Dès son plus jeune âge, il est exposé à une grande variété de musique, 
              du rock au jazz en passant par le R&B.
            </p>
          </div>

          <!-- Premiers succès -->
          <div class="chic-element p-6 rounded-lg">
            <h2 class="rock-text text-2xl mb-4">L'Ascension (1989-1995)</h2>
            <p class="soul-text text-lg leading-relaxed">
              Son premier album "Let Love Rule" sort en 1989, marquant le début d'une carrière exceptionnelle. 
              Avec "Mama Said" (1991) et "Are You Gonna Go My Way" (1993), il s'impose comme une figure majeure 
              du rock alternatif, fusionnant avec brio rock, soul et funk.
            </p>
          </div>

          <!-- Consécration -->
          <div class="chic-element p-6 rounded-lg">
            <h2 class="rock-text text-2xl mb-4">La Consécration (1996-2000)</h2>
            <p class="soul-text text-lg leading-relaxed">
              La période 1996-2000 voit Kravitz atteindre son apogée avec "5" (1998), qui contient des hits comme 
              "Fly Away" et "American Woman". Il remporte quatre Grammy Awards consécutifs pour "Best Male Rock Vocal Performance".
            </p>
          </div>

          <!-- Évolution artistique -->
          <div class="chic-element p-6 rounded-lg">
            <h2 class="rock-text text-2xl mb-4">L'Évolution (2001-Présent)</h2>
            <p class="soul-text text-lg leading-relaxed">
              Au fil des années, Kravitz continue d'évoluer artistiquement, explorant de nouveaux territoires musicaux 
              tout en restant fidèle à son style unique. Il diversifie également ses activités, s'essayant au cinéma 
              et au design, tout en restant une icône de la musique rock.
            </p>
          </div>
        </div>

        <!-- Timeline visuelle -->
        <div class="mt-16">
          <h2 class="rock-text text-3xl mb-8">Timeline</h2>
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <div class="w-24 flex-shrink-0">
                <span class="rock-text text-lg">1964</span>
              </div>
              <div class="chic-element p-4 rounded-lg flex-grow">
                <p class="soul-text">Naissance à New York</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="w-24 flex-shrink-0">
                <span class="rock-text text-lg">1989</span>
              </div>
              <div class="chic-element p-4 rounded-lg flex-grow">
                <p class="soul-text">Sortie de "Let Love Rule"</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="w-24 flex-shrink-0">
                <span class="rock-text text-lg">1993</span>
              </div>
              <div class="chic-element p-4 rounded-lg flex-grow">
                <p class="soul-text">Succès mondial avec "Are You Gonna Go My Way"</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="w-24 flex-shrink-0">
                <span class="rock-text text-lg">1998</span>
              </div>
              <div class="chic-element p-4 rounded-lg flex-grow">
                <p class="soul-text">Album "5" et Grammy Awards</p>
              </div>
            </div>
          </div>
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