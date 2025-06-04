<template>
  <section class="hero-section pt-20">
    <div class="dynamic-bg"></div>
    <div class="immersive-content">
      <h1 class="rock-text text-4xl md:text-5xl mb-8 text-center">Actualités</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Carte d'actualité -->
        <div v-for="(news, index) in actualites" :key="index" 
             class="chic-element p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
          <div class="relative mb-4">
            <img :src="news.image" :alt="news.title" class="w-full h-48 object-cover rounded-lg" />
            <div class="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full text-sm text-white">
              {{ news.date }}
            </div>
          </div>
          <h2 class="rock-text text-xl mb-3">{{ news.title }}</h2>
          <p class="text-white/80 mb-4">{{ news.description }}</p>
          <a :href="news.link" target="_blank" 
             class="inline-block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
            Lire la suite
          </a>
        </div>
      </div>

      <!-- Section Réseaux Sociaux -->
      <div class="chic-element p-8 rounded-lg">
        <h2 class="rock-text text-3xl mb-8 text-center">Suivez Lenny Kravitz</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a v-for="(social, index) in reseauxSociaux" 
             :key="index"
             :href="social.link" 
             target="_blank"
             class="flex flex-col items-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
            <font-awesome-icon :icon="social.icon" class="text-4xl mb-4 text-blue-500 group-hover:text-blue-400 transition-colors" />
            <span class="text-white/80 group-hover:text-white">{{ social.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faYoutube, faFacebook, faDeezer, faSpotify, faXTwitter, faTiktok, faApple } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faInstagram, faYoutube, faFacebook, faDeezer, faSpotify, faXTwitter, faTiktok, faApple)

interface Actualite {
  title: string
  description: string
  date: string
  image: string
  link: string
}

interface ReseauSocial {
  name: string
  icon: string[] | string
  link: string
}

const actualites = ref<Actualite[]>([
  {
    title: "Nouvel album 'Blue Electric Light'",
    description: "Lenny Kravitz annonce la sortie de son nouvel album 'Blue Electric Light' prévue pour le 15 mars 2024.",
    date: "15 Février 2024",
    image: "/albums/album12.jpg",
    link: "https://www.rtl2.fr/evenements/lenny-kravitz-le-retour-tant-attendu-avec-blue-electric-light-7900387677"
  },
  {
    title: "Tournée mondiale 2024/2025",
    description: "Lenny Kravitz dévoile les dates de sa nouvelle tournée mondiale qui passera par l'Europe cet été.",
    date: "1 Février 2024",
    image: "/Concert2024.jpg",
    link: "https://www.parisladefense-arena.com/evenement/lenny-kravitz/#:~:text=Une%20soir%C3%A9e%20%C3%A9lectrisante%20%C3%A0%20ne,exceptionnelle%20le%2029%20mars%202025."
  },
  {
    title: "Lenny Kravitz clôture le Jazz Fest 2025 aux côtés de Patti LaBelle",
    description: "Lenny Kravitz a enflammé la scène du Jazz Fest 2025 aux côtés de Patti LaBelle lors d'un concert de clôture spectaculaire à La Nouvelle-Orléans.",
    date: "4 mai 2025",
    image: "/JazzFest.webp",
    link: "https://www.youtube.com/watch?v=TsF9ZbqeEow"
  }
])

const reseauxSociaux = ref<ReseauSocial[]>([
  {
    name: 'Instagram',
    icon: ['fab', 'instagram'],
    link: 'https://www.instagram.com/lennykravitz'
  },
  {
    name: 'YouTube',
    icon: ['fab', 'youtube'],
    link: 'https://www.youtube.com/@LennyKravitz'
  },
  {
    name: 'Facebook',
    icon: ['fab', 'facebook'],
    link: 'https://www.facebook.com/lennykravitz'
  },
  {
    name: 'Deezer',
    icon: ['fab', 'deezer'],
    link: 'https://www.deezer.com/fr/artist/189'
  },
  {
    name: 'Spotify',
    icon: ['fab', 'spotify'],
    link: 'https://open.spotify.com/intl-fr/artist/5gznATMVO85ZcLTkE9ULU7'
  },
  {
    name: 'X',
    icon: ['fab', 'x-twitter'],
    link: 'https://x.com/lennykravitz'
  },
  {
    name: 'TikTok',
    icon: ['fab', 'tiktok'],
    link: 'https://www.tiktok.com/@lennykravitz'
  },
  {
    name: 'Apple Music',
    icon: ['fab', 'apple'],
    link: 'https://music.apple.com/fr/artist/lenny-kravitz/189'
  }
])
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

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.immersive-content > * {
  animation: fadeIn 0.8s ease-out forwards;
}
</style> 