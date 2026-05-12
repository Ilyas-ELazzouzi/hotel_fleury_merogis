# Hôtel Fleury Mérogis — frontend

Application React (Vite + TypeScript) pour le site vitrine.

## Déploiement sur Vercel

**Structure de ce dépôt** : le projet Vite est dans le dossier **`frontend/`**.

1. Dans Vercel, définis **Root Directory** sur **`frontend`** (comme dans l’assistant d’import).
2. Le fichier **`vercel.json` à la racine du repo** ne contient plus que des **réécritures SPA** (pas de `installCommand` / `buildCommand`). Vercel exécute alors par défaut `npm install` / `npm run build` **dans** `frontend/`, ce qui évite l’erreur `cd frontend: No such file or directory`.
3. Le fichier **`frontend/vercel.json`** duplique les mêmes réécritures si seule la config du sous-dossier est prise en compte.

**Si le build affiche encore `cd frontend && npm ci`** :

- Soit le **commit sur GitHub** n’inclut pas le dernier `vercel.json` : fais un `git pull` / pousse tes changements.
- Soit une **commande d’installation personnalisée** est enregistrée dans le projet Vercel : **Settings → General → Build & Development Settings** → remets **Install Command** sur **« Override » désactivé** (valeur par défaut), idem pour **Build Command** si tu y avais mis `cd frontend...`.

Framework **Vite** (ou détection auto), sortie **`dist`**. Node **≥ 20** (`engines` dans `frontend/package.json`). Aucune variable d’environnement requise pour le build actuel.

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
