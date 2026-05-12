# Hôtel Fleury Mérogis — frontend

Application React (Vite + TypeScript) pour le site vitrine.

## Déploiement sur Vercel

Le fichier `vercel.json` à la **racine du dépôt** s’adapte automatiquement à deux structures Git :

1. **Monorepo** (dossier `frontend/` à la racine, comme ce dépôt en local) : installation avec `npm ci --prefix frontend`, build idem, puis copie de `frontend/dist` vers `dist` pour que Vercel serve toujours depuis **`dist`**.
2. **Dépôt plat** (fichiers Vite/React à la racine, sans sous-dossier `frontend/`) : `npm ci` et `npm run build` à la racine, sortie **`dist`**.

Dans les deux cas : **ne pas** définir « Root Directory » sur `frontend` si vous avez bien le dossier `frontend/` à la racine Git (sinon la commande ne trouve plus `frontend/`). Si tout votre code est déjà **dans** `frontend/` sur Git et qu’il n’y a pas de dossier `frontend` au-dessus, configurez alors **Root Directory = `frontend`** dans Vercel et utilisez le fichier `frontend/vercel.json` (réécritures SPA) ; laissez vide les commandes personnalisées dans le tableau de bord pour utiliser `npm run build` par défaut.

Étapes rapides :

1. Importer le dépôt sur [Vercel](https://vercel.com).
2. **Root Directory** : laisser vide si la racine Git contient `frontend/` ; sinon mettre `frontend` si le projet Vite est uniquement dans ce sous-dossier.
3. Framework **Vite** ou **Other** ; aucune variable d’environnement requise pour le build actuel.
4. Node **≥ 20** (voir `engines` dans `frontend/package.json`).

Les réécritures SPA envoient les URL vers `index.html` pour les rafraîchissements directs.

---

## React + TypeScript + Vite (modèle d’origine)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
