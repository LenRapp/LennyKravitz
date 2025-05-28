# Lenny Kravitz - Site Web

Un site web moderne dédié à Lenny Kravitz, présentant sa discographie, son histoire et son style unique.

## Fonctionnalités

- 🎵 Discographie complète avec aperçus audio des morceaux
- 📱 Design responsive et moderne
- 🎨 Interface utilisateur immersive avec animations fluides
- 🎸 Intégration avec l'API Deezer pour les données musicales
- 🎬 Animations et transitions élégantes
- 🌙 Thème sombre élégant

## Technologies Utilisées

- Vue.js 3 avec Composition API
- TypeScript
- Tailwind CSS
- Vite
- Express.js (Backend)
- API Deezer

## Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

## Installation

1. Clonez le repository :
```bash
git clone [URL_DU_REPO]
cd lennykravitz
```

2. Installez les dépendances du frontend :
```bash
npm install
```

3. Installez les dépendances du backend :
```bash
cd backend
npm install
cd ..
```

## Démarrage

### Option 1 : Démarrer les deux serveurs en même temps
```bash
npm run dev:all
```

### Option 2 : Démarrer les serveurs séparément
1. Démarrez le serveur backend :
```bash
cd backend
npm start
```

2. Dans un nouveau terminal, démarrez le serveur frontend :
```bash
npm run dev
```

3. Ouvrez votre navigateur et accédez à `http://localhost:5174`

## Structure du Projet

```
lennykravitz/
├── src/                    # Code source frontend
│   ├── components/        # Composants Vue
│   ├── views/            # Pages principales
│   ├── router/           # Configuration du routeur
│   └── assets/           # Ressources statiques
├── backend/              # Serveur Express
│   ├── server.ts        # Point d'entrée du serveur
│   └── package.json     # Dépendances backend
└── public/              # Fichiers publics
```

## Fonctionnalités Principales

### Discographie
- Liste complète des albums
- Détails de chaque album
- Aperçus audio des morceaux
- Informations sur les dates de sortie et le type d'album

### Histoire
- Biographie détaillée
- Timeline interactive
- Moments clés de sa carrière

### Style
- Présentation de son influence sur la mode
- Galerie d'images
- Design inspiré de son univers

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 🧭 Navigation du site

### 🏠 Accueil
- Présentation visuelle du site
- Image ou bannière inspirée de Lenny Kravitz
- Accès rapide aux autres sections

### 🎥 Toutes les vidéos
- Liste complète des vidéos YouTube de Lenny Kravitz
- Miniatures, titres et aperçu
- Chargement dynamique via l'API YouTube

### 🔍 Détail d'une vidéo
- Affichage de la vidéo sélectionnée
- Titre, description, date de publication
- Suggestions de vidéos associées

### 📖 Histoire
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
| Axios        | Requêtes HTTP vers l'API YouTube       |
| SCSS/Tailwind (optionnel) | Stylisation responsive et moderne |

---

## 📂 Structure du projet

src/
├── assets/ # Images et médias
├── components/ # Composants réutilisables
├── pages/ # Pages (Accueil, Vidéos, Détail, Histoire)
├── router/ # Configuration du routing
├── services/ # Appels à l'API YouTube
├── App.vue # Composant racine
└── main.ts # Entrée de l'application

---

## 🔑 Intégration de l'API YouTube

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
```
---

## 🎯 Objectifs du projet
Créer un site élégant et fonctionnel pour les fans

Approfondir ses compétences en Vue 3 + TypeScript

Utiliser un système de routing avancé

Consommer une API externe (YouTube)

---

## 💡 Améliorations futures

🎼 Ajout d'une section paroles de chansons

🖼️ Galerie photo interactive

🌙 Thème sombre / clair

🧑‍🎤 Timeline de la carrière de Lenny Kravitz

