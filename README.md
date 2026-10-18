# Atelier Danse

Site statique pour une association de danse, construit avec [Astro](https://astro.build) et [Tailwind CSS](https://tailwindcss.com). Déploiement prévu sur Cloudflare Workers (assets statiques).

## Démarrage

```bash
npm install
npm run dev
```

Build de production :

```bash
npm run build
npm run preview
```

Déploiement Cloudflare (compte Wrangler déjà connecté) :

```bash
npm run deploy
```

## Structure

- `src/pages/index.astro` — page d’accueil (sections)
- `src/pages/actualites/` — historique + pages individuelles
- `src/components/` — sections et UI réutilisables
- `src/content/news/` — actualités en Markdown (collection Astro)
- `src/data/site.ts` — nom, contact, hero, navigation
- `src/styles/global.css` — thème Tailwind (noir / blanc + rouge / bleu)

## Actualités

Les 5 dernières actualités s’affichent sur l’accueil. « Voir tout l’historique » mène à `/actualites/`.

Pour l’instant le contenu vit dans `src/content/news/*.md`. Plus tard, un CMS headless pourra :

1. **pousser des fichiers Markdown vers Git** (webhook → commit → rebuild Cloudflare), ou
2. **déclencher un rebuild** après publication, avec un loader Astro qui lit l’API du CMS au build.

Les deux approches restent compatibles avec un site 100 % statique.

## Contact

Le formulaire ouvre le client mail pour le moment. Il pourra être branché sur Formspree, un Worker Cloudflare, ou un autre endpoint sans changer la mise en page.
