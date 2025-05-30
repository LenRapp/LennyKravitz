// server.ts
import express, { Request, Response, Router, RequestHandler } from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express()
const router = Router()
const PORT = 3001

interface DeezerAlbumResponse {
  id: number
  title: string
  cover_big: string
  artist: { name: string }
  release_date: string
  record_type: string
  tracks: { data: any[] }
  [key: string]: any
}

interface DeezerTracksResponse {
  data: Array<{
    id: number
    title: string
    duration: number
    preview: string
  }>
}

interface AwardMap {
  [key: string]: string[]
}

// Autorise les requêtes depuis le frontend
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// Base de données des récompenses par album
const awardsByAlbum: AwardMap = {
  '303524': [ // ID de l'album "5"
    'Grammy Award - Meilleure performance vocale rock masculine (Fly Away)',
    'Grammy Award - Meilleure performance vocale rock masculine (American Woman)'
  ],
  '334336': [ // ID de l'album "Greatest Hits"
    'Grammy Award - Meilleure performance vocale rock masculine (Again)'
  ],
  '299133': [ // ID de l'album "Lenny"
    'Grammy Award - Meilleure performance vocale rock masculine (Dig In)'
  ],
  '300389': [ // ID de l'album "Are You Gonna Go My Way"
    'MTV Video Music Award - Meilleur artiste masculin (1993)'
  ],
  '559450602': [ // ID de l'album "Blue Electric Light"
    'MTV Video Music Award - Meilleure vidéo rock (Human)'
  ]
};
  

const getAlbum: RequestHandler<{ id: string }> = async (req, res) => {
  const { id } = req.params

  try {
    const response = await fetch(`https://api.deezer.com/album/${id}`)
    if (!response.ok) {
      res.status(response.status).send('Erreur API Deezer')
      return
    }

    const data = await response.json() as DeezerAlbumResponse
    
    // Vérification des morceaux
    if (!data.tracks || !data.tracks.data || data.tracks.data.length === 0) {
      console.warn(`Aucun morceau trouvé pour l'album ${id} (${data.title})`)
      // Essayer de récupérer les morceaux séparément
      const tracksResponse = await fetch(`https://api.deezer.com/album/${id}/tracks`)
      if (tracksResponse.ok) {
        const tracksData = await tracksResponse.json() as DeezerTracksResponse
        data.tracks = { data: tracksData.data || [] }
      }
    }

    // Ajouter les récompenses à la réponse
    data.awards = awardsByAlbum[id] || []
    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur proxy' })
  }
}

const getArtistAlbums: RequestHandler<{ id: string }> = async (req, res) => {
  const { id } = req.params

  try {
    const response = await fetch(`https://api.deezer.com/artist/${id}/albums`)
    if (!response.ok) {
      res.status(response.status).send('Erreur API Deezer')
      return
    }

    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur proxy' })
  }
}

router.get('/deezer/album/:id', getAlbum)
router.get('/deezer/artist/:id/albums', getArtistAlbums)

app.use(router)

app.listen(PORT, () => {
  console.log(`Proxy API running at http://localhost:${PORT}`)
})
