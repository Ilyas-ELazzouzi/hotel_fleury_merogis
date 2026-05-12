# Hôtel Fleury Mérogis — frontend

Application React (Vite + TypeScript) pour le site vitrine.

## Déploiement sur Vercel

1. Connecter le dépôt Git à [Vercel](https://vercel.com) (**Import Project**).
2. Laisser les réglages par défaut : le fichier `vercel.json` à la **racine du dépôt** indique déjà :
   - installation et build dans `frontend/`
   - sortie : `frontend/dist`
   - réécriture SPA vers `index.html` (routes futures ou rafraîchissement direct d’URL).
3. **Framework Preset** : « Vite » si proposé, sinon « Other ». Deux possibilités équivalentes :
   - **Racine du dépôt = racine Git** (recommandé) : ne pas toucher à « Root Directory » ; le `vercel.json` à la racine pilote `frontend/`.
   - **Root Directory = `frontend`** dans les paramètres du projet : Vercel utilise alors `frontend/package.json` et le `frontend/vercel.json` (réécritures SPA uniquement).
4. Déployer : chaque push sur la branche liée déclenche un build (`npm ci` puis `npm run build` dans `frontend`).

Variables d’environnement : aucune requise pour le build actuel. Node **≥ 20** (voir `engines` dans `package.json`).

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
