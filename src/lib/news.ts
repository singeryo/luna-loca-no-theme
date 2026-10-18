import { getCollection, type CollectionEntry } from 'astro:content';

export type NewsEntry = CollectionEntry<'news'>;

export async function getPublishedNews(): Promise<NewsEntry[]> {
  const entries = await getCollection('news', ({ data }) => !data.draft);

  return entries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export async function getLatestNews(limit = 5): Promise<NewsEntry[]> {
  const entries = await getPublishedNews();
  return entries.slice(0, limit);
}

export function formatNewsDate(date: Date, locale = 'fr-FR'): string {
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
