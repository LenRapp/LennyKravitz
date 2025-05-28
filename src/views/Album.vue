<template>
  <section class="hero-section pt-20">
    <div class="dynamic-bg"></div>
    <div class="immersive-content">
      <h1 class="rock-text text-4xl md:text-5xl mb-12 text-center">Discographie</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="album in albums" :key="album.id" 
             class="chic-element p-6 rounded-lg transform hover:scale-105 transition-transform cursor-pointer"
             @click="goToAlbumDetail(album.id)">
          <div class="aspect-square mb-4 overflow-hidden rounded-lg">
            <img :src="`/albums/album${albums.indexOf(album) + 1}.jpg`" :alt="album.title" class="w-full h-full object-cover" />
          </div>
          <h2 class="rock-text text-2xl mb-2">{{ album.title }}</h2>
          <p class="soul-text text-lg mb-4">{{ album.year }}</p>
          <p class="text-white/80">{{ album.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// Map des albums avec leurs IDs Deezer
const albums = [
  { id: 301521, title: "Let Love Rule", year: "1989", description: "Premier album studio, fusion de rock, soul et funk." },
  { id: 303021, title: "Mama Said", year: "1991", description: "Influences soul et rock des années 60-70." },
  { id: 300389, title: "Are You Gonna Go My Way", year: "1993", description: "Album rock emblématique avec le titre éponyme." },
  { id: 301979, title: "Circus", year: "1995", description: "Exploration de sonorités plus expérimentales." },
  { id: 303524, title: "5", year: "1998", description: "Succès mondial avec 'Fly Away' et 'American Woman'." },
  { id: 299133, title: "Lenny", year: "2001", description: "Retour aux racines avec des sonorités plus organiques." },
  { id: 334336, title: "Baptism", year: "2004", description: "Album plus direct et énergique." },
  { id: 319745, title: "It Is Time for a Love Revolution", year: "2008", description: "Message d'amour et de paix à travers le rock." },
  { id: 1196861, title: "Black and White America", year: "2011", description: "Exploration des thèmes sociaux et politiques." },
  { id: 352418707, title: "Strut", year: "2014", description: "Retour aux sonorités rock classiques." },
  { id: 72279422, title: "Raise Vibration", year: "2018", description: "Message spirituel et énergie positive." },
  { id: 559450602, title: "Blue Electric Light", year: "2024", description: "Son dernier album, toujours aussi énergique." }
]

const goToAlbumDetail = (albumId: number) => {
  router.push(`/album/${albumId}`)
}
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