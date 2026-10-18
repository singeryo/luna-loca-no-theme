export const site = {
  name: 'Atelier Danse',
  tagline: 'Mouvement, communauté, création',
  description:
    'Association de danse proposant des cours tout au long de l’année et quelques événements marquants.',
  email: 'contact@atelier-danse.example',
  phone: '+33 1 23 45 67 89',
  address: '12 rue de la Danse, 75000 Paris',
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
} as const;

export const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Qui sommes-nous', href: '#a-propos' },
  { label: 'Actualités', href: '#actualites' },
  { label: 'Contact', href: '#contact' },
] as const;

export const heroSlides = [
  {
    id: 'spectacle',
    title: 'La danse au cœur de la communauté',
    subtitle: 'Cours, ateliers et spectacles pour tous les âges',
    image:
      'https://images.unsplash.com/photo-1508700118050-dcb2d55e4e5c?auto=format&fit=crop&w=1600&q=80',
    alt: 'Danseurs en mouvement sur scène',
  },
  {
    id: 'cours',
    title: 'Des cours pour chaque niveau',
    subtitle: 'Contemporain, classique, hip-hop et plus encore',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80',
    alt: 'Cours de danse en studio',
  },
  {
    id: 'evenement',
    title: 'Quelques rendez-vous chaque année',
    subtitle: 'Spectacles, portes ouvertes et rencontres artistiques',
    image:
      'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1600&q=80',
    alt: 'Public assistant à un spectacle de danse',
  },
] as const;
