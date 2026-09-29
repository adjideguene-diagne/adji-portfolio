# Portfolio — Adji Deguene Diagne

Portfolio personnel développé avec Next.js 15 (App Router), TypeScript,
Tailwind CSS v4 et Framer Motion.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Structure du projet

```
src/
  app/
    layout.tsx              → layout racine, polices, metadata
    page.tsx                → page d'accueil (assemble toutes les sections)
    globals.css              → design tokens (couleurs, typographie)
    projets/[slug]/page.tsx  → page détaillée générée pour chaque projet
  components/                → Navbar, Hero, About, Skills, ProjectsSection,
                               ProjectCard, Process, Timeline, Contact, Footer...
  lib/
    data.ts                  → TOUT le contenu du site (profil, compétences,
                               projets, parcours). C'est le seul fichier à
                               modifier pour mettre à jour le contenu.
public/
  images/
    profile.jpg, profile-sm.jpg  → votre photo, déjà optimisée
    projects/*.svg                → visuels de couverture abstraits (placeholders,
                                    à remplacer par de vraies captures d'écran)
```

## Ce qu'il reste à personnaliser

Tout se trouve dans `src/lib/data.ts` :

- **`profile`** : remplacez `email`, `linkedin`, `github`, `whatsapp` (laissez
  vide pour masquer un lien) et `cvUrl` (laissez vide pour masquer le bouton
  "Mon CV").
- **`projects`** : chaque projet a un champ `github` — ne l'ajoutez que si le
  dépôt est réellement public (sinon le bouton "Voir le code" est
  automatiquement remplacé par "Découvrir le projet"). Le champ `demo`
  fonctionne de la même façon.
- **Captures d'écran** : remplacez les fichiers `public/images/projects/*.svg`
  par vos vraies captures (formats `.png`/`.jpg`/`.webp` recommandés), puis
  mettez à jour le champ `cover` du projet correspondant dans `data.ts`.
- **`timeline`** : précisez les dates exactes de vos stages si vous le
  souhaitez (actuellement indiquées de façon générique).

Aucune information (diplôme, stage, technologie, fonctionnalité) n'a été
inventée : tout provient de ce que vous avez fourni. Les placeholders
(emails, liens GitHub, dates) sont clairement identifiables dans le code.

## Déployer sur Vercel

1. Poussez ce projet sur un dépôt GitHub.
2. Sur [vercel.com](https://vercel.com), importez le dépôt — Vercel détecte
   Next.js automatiquement, aucune configuration nécessaire.
3. Déployez. Le site sera disponible sur un lien `*.vercel.app`, avec la
   possibilité d'y attacher votre propre nom de domaine ensuite.

## Notes techniques

- Mode sombre par défaut, avec un mode clair activable via le bouton
  soleil/lune dans la navigation (préférence mémorisée dans le navigateur).
- Toutes les animations respectent `prefers-reduced-motion`.
- Les pages projet (`/projets/[slug]`) sont pré-générées statiquement
  (`generateStaticParams`) pour de meilleures performances et un bon
  référencement.
- Accessibilité : navigation clavier, focus visible, lien d'évitement vers
  le contenu principal, texte alternatif sur les images.
