# hrnet-react-modal

Une modale React réutilisable et personnalisable pour vos applications.

## Prérequis d'Utilisation

Pour utiliser ce package, vous devez avoir :

1. **Environnement de développement** :
   - Node.js (version 14 ou supérieure)
   - npm (version 6 ou supérieure)
   - Un éditeur de code (VS Code recommandé)

2. **Projet React** :
   - React 18 ou supérieur
   - TypeScript (recommandé)
   - Un gestionnaire de paquets (npm ou yarn)

3. **Dépendances requises** :
   - Tailwind CSS (version 3.0 ou supérieure)
   - Lucide React (pour les icônes)
   - Un bundler (Vite, Webpack, etc.)

4. **Configuration nécessaire** :
   - Tailwind CSS doit être correctement configuré dans votre projet
   - Les styles Tailwind doivent être importés dans votre fichier principal
   - Le fichier de configuration Tailwind doit inclure les chemins vers vos composants

## Informations du Package

- **Version** : 0.1.0
- **Dernière publication** : il y a 2 jours
- **Auteur** : anis92
- **Licence** : MIT
- **Taille décompressée** : 194 kB
- **Nombre total de fichiers** : 9
- **Téléchargements hebdomadaires** : 42

## Mots-clés

- modal
- react-modal
- dialogue
- popup
- overlay

## Installation

```bash
npm install hrnet-react-modal
```

## Utilisation

```tsx
import { useState } from 'react';
import Modal from 'hrnet-react-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Ouvrir la modale</button>
      
      <Modal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <h2>Contenu de la modale</h2>
        <p>Ceci est un exemple de contenu.</p>
      </Modal>
    </div>
  );
}
```

## Props

| Nom | Type | Description | Obligatoire |
|-----|------|-------------|-------------|
| `isOpen` | `boolean` | Contrôle l'état d'ouverture/fermeture de la modale | ✅ |
| `onClose` | `() => void` | Fonction appelée lors de la fermeture de la modale (clic sur l'overlay, touche Escape, ou bouton de fermeture) | ✅ |
| `children` | `React.ReactNode` | Contenu à afficher dans la modale | ✅ |

## Fonctionnalités

- Fermeture au clic sur l'overlay
- Fermeture avec la touche Escape
- Bouton de fermeture en haut à droite
- Animation de transition fluide
- Gestion automatique du scroll du body
- Support du mode sombre (via les classes Tailwind)
- Accessibilité (ARIA attributes, focus management)

## Styles

Le composant utilise Tailwind CSS pour le styling. Assurez-vous d'avoir Tailwind configuré dans votre projet.

## Dépendances

- React 18+
- Tailwind CSS
- Lucide React (pour l'icône de fermeture)

## Développement

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build de la librairie
npm run build
```

## Licence

MIT
