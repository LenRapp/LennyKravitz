<template>
  <section class="hero-section pt-20">
    <div class="dynamic-bg"></div>
    <div class="immersive-content">
      <div v-if="loading" class="text-center">
        <p class="text-white/80">Chargement de l'album...</p>
      </div>
      
      <div v-else-if="error" class="text-center">
        <p class="text-red-500">{{ error }}</p>
      </div>
      
      <div v-else-if="album" class="max-w-4xl mx-auto">
        <!-- En-tête de l'album -->
        <div class="flex flex-col md:flex-row gap-8 mb-12">
          <div class="chic-element rounded-lg overflow-hidden w-full md:w-1/3">
            <img :src="album.cover_big" :alt="album.title" class="w-full h-full object-cover" />
          </div>
          <div class="flex-1">
            <h1 class="rock-text text-4xl md:text-5xl mb-4">{{ album.title }}</h1>
            <p class="soul-text text-xl mb-4">{{ album.artist.name }}</p>
            <p class="text-white/80 mb-4">Sorti le {{ new Date(album.release_date).toLocaleDateString() }}</p>
            <p class="text-white/80">{{ album.record_type }}</p>
          </div>
        </div>

        <!-- Liste des pistes -->
        <div class="chic-element p-6 rounded-lg">
          <h2 class="rock-text text-2xl mb-6">Pistes</h2>
          <div class="space-y-4">
            <div v-for="(track, index) in tracks" :key="track.id" 
                 class="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors">
              <div class="flex items-center gap-4">
                <span class="text-white/60 w-8">{{ index + 1 }}</span>
                <div>
                  <h3 class="rock-text text-lg">{{ track.title }}</h3>
                  <p class="text-white/60 text-sm">{{ formatDuration(track.duration) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

interface Track {
  id: number
  title: string
  duration: number
}

interface Artist {
  name: string
}

interface Album {
  title: string
  cover_big: string
  artist: Artist
  release_date: string
  record_type: string
}

const route = useRoute()
const loading = ref(true)
const error = ref('')
const album = ref<Album | null>(null)
const tracks = ref<Track[]>([])

const formatDuration = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

const fetchAlbumData = async () => {
  const albumId = route.params.id
  try {
    loading.value = true
    error.value = ''
    const res = await fetch(`http://localhost:3001/deezer/album/${albumId}`)
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    const json = await res.json()
    album.value = json
    tracks.value = json.tracks.data || []
  } catch (err) {
    console.error('Erreur:', err)
    error.value = 'Impossible de charger les détails de l\'album'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchAlbumData()
})
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