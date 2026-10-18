/**
 * Identité du site et textes courts de la page d'accueil.
 * Les actualités sont des fichiers Markdown dans `src/content/news`.
 */

export const site = {
  name: 'Atelier Danse',
  shortName: 'Atelier',
  tagline: 'Mouvement, communauté, création',
  description:
    'Association de danse proposant des cours tout au long de l’année et quelques événements marquants.',
  email: 'contact@atelier-danse.example',
  phone: '+33 1 23 45 67 89',
  address: '12 rue de la Danse, 75000 Paris',
  /**
   * Laisser vide pour ouvrir le client mail.
   * Renseigner une URL pour envoyer le formulaire en POST JSON.
   */
  formEndpoint: '',
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
  emphasis?: boolean;
};

export const navLinks: NavLink[] = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Qui sommes-nous', href: '#a-propos' },
  { label: 'Actualités', href: '#actualites' },
  { label: 'Contact', href: '#contact', emphasis: true },
];

export type HeroMotif = 'arcs' | 'blocks' | 'orbit';

export type HeroSlide = {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  tone: 'dark' | 'light';
  motif: HeroMotif;
};

export const heroSlides: HeroSlide[] = [
  {
    id: 'association',
    kicker: 'Association',
    title: 'La danse au cœur de la communauté',
    subtitle: 'Cours réguliers, ateliers et quelques rendez-vous publics dans l’année.',
    cta: { label: 'Qui sommes-nous', href: '#a-propos' },
    tone: 'dark',
    motif: 'arcs',
  },
  {
    id: 'cours',
    kicker: 'Les cours',
    title: 'Une pratique pour chaque âge',
    subtitle: 'Contemporain, classique, hip-hop et éveil, du débutant au confirmé.',
    cta: { label: 'Voir les cours', href: '#a-propos' },
    tone: 'light',
    motif: 'blocks',
  },
  {
    id: 'saison',
    kicker: 'La saison',
    title: 'Quelques scènes, beaucoup de studio',
    subtitle: 'Spectacles, portes ouvertes et rencontres chorégraphiques.',
    cta: { label: 'Lire les actualités', href: '#actualites' },
    tone: 'dark',
    motif: 'orbit',
  },
];

export const classes = [
  { name: 'Contemporain', audience: 'Adultes, tous niveaux', schedule: 'Mardi et jeudi' },
  { name: 'Classique', audience: 'Enfants et adolescents', schedule: 'Mercredi' },
  { name: 'Hip-hop', audience: 'Adolescents et adultes', schedule: 'Vendredi' },
  { name: 'Éveil', audience: '4 à 7 ans', schedule: 'Samedi matin' },
] as const;
