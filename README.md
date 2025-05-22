# 🎸 Lenny Kravitz Fan Site

Un site web dédié à l’artiste **Lenny Kravitz**, développé en **Vue.js** et **TypeScript**.  
Explorez ses vidéos, découvrez son histoire et plongez dans son univers musical.

---

## 🧭 Navigation du site

### 🏠 Accueil (`/`)
- Présentation visuelle du site
- Image ou bannière inspirée de Lenny Kravitz
- Accès rapide aux autres sections

### 🎥 Toutes les vidéos (`/videos`)
- Liste complète des vidéos YouTube de Lenny Kravitz
- Miniatures, titres et aperçu
- Chargement dynamique via l’API YouTube

### 🔍 Détail d’une vidéo (`/videos/:id`)
- Affichage de la vidéo sélectionnée
- Titre, description, date de publication
- Suggestions de vidéos associées

### 📖 Histoire (`/histoire`)
- Biographie complète de Lenny Kravitz
- Moments clés de sa carrière
- Photos et anecdotes marquantes

---

## 🛠️ Technologies utilisées

| Outil        | Description                            |
|--------------|----------------------------------------|
| Vue.js 3     | Framework JavaScript front-end         |
| TypeScript   | Typage statique et sécurité du code    |
| Vue Router   | Gestion des routes / navigation        |
| Axios        | Requêtes HTTP vers l’API YouTube       |
| SCSS/Tailwind (optionnel) | Stylisation responsive et moderne |

---

## 📂 Structure du projet

src/
├── assets/ # Images et médias
├── components/ # Composants réutilisables
├── pages/ # Pages (Accueil, Vidéos, Détail, Histoire)
├── router/ # Configuration du routing
├── services/ # Appels à l’API YouTube
├── App.vue # Composant racine
└── main.ts # Entrée de l'application

yaml
Copier
Modifier

---

## 🔑 Intégration de l’API YouTube

- Utilisation de **YouTube Data API v3**
- Recherche de vidéos via nom ou ID de chaîne
- Affichage dynamique et pagination (optionnel)

---

## 🚀 Démarrer le projet

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
🎯 Objectifs du projet
Créer un site élégant et fonctionnel pour les fans

Approfondir ses compétences en Vue 3 + TypeScript

Utiliser un système de routing avancé

Consommer une API externe (YouTube)

💡 Améliorations futures
🎼 Ajout d’une section paroles de chansons

🖼️ Galerie photo interactive

🌙 Thème sombre / clair

🧑‍🎤 Timeline de la carrière de Lenny Kravitz

