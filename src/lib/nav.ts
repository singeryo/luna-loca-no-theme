/** Liens d’ancre : sur l’accueil on défile, ailleurs on revient à la bonne page. */
export function resolveSectionHref(href: string, pathname: string): string {
  const isHome = pathname === '/' || pathname === '';
  if (!href.startsWith('#') || isHome) return href;
  if (href === '#actualites') return '/actualites/';
  return `/${href}`;
}
