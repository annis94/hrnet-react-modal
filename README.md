# hrnet-react-modal

Une modale React réutilisable et personnalisable pour vos applications.

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
