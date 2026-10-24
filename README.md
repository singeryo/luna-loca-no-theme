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
- `src/data/site.ts` — nom, contact, hero, cours, navigation
- `src/styles/global.css` — thème Tailwind (noir / blanc, rouge et bleu)
- `src/layouts/PageLayout.astro` — en-tête, contenu, pied de page

## Actualités

Les 5 dernières actualités s’affichent sur l’accueil. « Tout l’historique » mène à `/actualites/`.

Le contenu vit dans `src/content/news/*.md`. La configuration Pages CMS se trouve dans `.pages.yml` :

- Ouvrir le dépôt sur [app.pagescms.org](https://app.pagescms.org/) et autoriser l’application GitHub Pages CMS.
- Sélectionner la branche `main` pour publier directement sur la branche de production.
- Créer une actualité avec un titre, une image et son texte. Les images sont stockées dans `public/images/news/`.
- Chaque enregistrement crée ou met à jour un fichier Markdown dans `src/content/news/`. Le nom de fichier fournit la date de publication ; le site génère l’extrait des cartes depuis le texte si aucune description n’existe.

Les commits sur `main` déclenchent le déploiement Cloudflare déjà configuré pour le dépôt.

## Contact

Le formulaire ouvre le client mail pour le moment. Renseigner `formEndpoint` dans `src/data/site.ts` pour envoyer le message en POST JSON (Formspree, Worker Cloudflare, etc.) sans changer la mise en page.
