import { getCollection, type CollectionEntry } from 'astro:content';

export const NEWS_PREVIEW_LIMIT = 5;

export type NewsEntry = CollectionEntry<'news'>;

export async function getPublishedNews(): Promise<NewsEntry[]> {
  const entries = await getCollection('news', ({ data }) => !data.draft);

  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getLatestNews(limit = NEWS_PREVIEW_LIMIT): Promise<NewsEntry[]> {
  const entries = await getPublishedNews();
  return entries.slice(0, limit);
}

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const dayFormatter = new Intl.DateTimeFormat('fr-FR', { day: '2-digit' });
const monthFormatter = new Intl.DateTimeFormat('fr-FR', { month: 'long' });

export function formatNewsDate(date: Date): string {
  return dateFormatter.format(date);
}

export function newsDateParts(date: Date) {
  return {
    day: dayFormatter.format(date),
    month: monthFormatter.format(date),
    year: String(date.getFullYear()),
  };
}
