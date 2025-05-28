// server.ts
import express, { Request, Response, Router, RequestHandler } from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express()
const router = Router()
const PORT = 3001

// Autorise les requêtes depuis le frontend
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

const getAlbum: RequestHandler<{ id: string }> = async (req, res) => {
  const { id } = req.params

  try {
    const response = await fetch(`https://api.deezer.com/album/${id}`)
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
