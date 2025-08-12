# Lenny Kravitz - Site Web

Un site web moderne dédié à Lenny Kravitz, présentant sa discographie, son histoire et son style unique.

## Fonctionnalités

- 🎵 Discographie complète avec aperçus audio des morceaux via l'API Deezer
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
- Liste complète des albums via l'API Deezer
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

### 🎵 Discographie
- Liste complète des albums de Lenny Kravitz
- Aperçus audio via l'API Deezer
- Informations détaillées sur chaque album

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
| Axios        | Requêtes HTTP vers l'API Deezer        |
| Tailwind CSS | Stylisation responsive et moderne      |

---

## 📂 Structure du projet

src/
├── assets/ # Images et médias
├── components/ # Composants réutilisables
├── views/ # Pages principales
├── router/ # Configuration du routing
├── services/ # Appels à l'API Deezer
├── App.vue # Composant racine
└── main.ts # Entrée de l'application

---

## 🔑 Intégration de l'API Deezer

- Utilisation de l'API Deezer
- Recherche d'albums et de morceaux
- Affichage dynamique des aperçus audio

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
- Créer un site élégant et fonctionnel pour les fans
- Approfondir ses compétences en Vue 3 + TypeScript
- Utiliser un système de routing avancé
- Consommer l'API Deezer pour les données musicales

---

## 💡 Améliorations futures

🎼 Ajout d'une section paroles de chansons
🖼️ Galerie photo interactive
🎧 Intégration de playlists personnalisées

## 📸 Captures d’écran

![Acceuil](public/capture/acceuil.png)

![Actualités](public/capture/actus.png)

![Style](public/capture/style.png)

![Histoire](public/capture/histoire.png)

![Musique](public/capture/musique.png)

![Albums](public/capture/album.png)
