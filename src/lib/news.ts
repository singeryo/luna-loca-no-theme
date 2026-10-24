import { getCollection, type CollectionEntry } from 'astro:content';

export const NEWS_PREVIEW_LIMIT = 5;

export type NewsEntry = CollectionEntry<'news'>;

export function getNewsDate(entry: NewsEntry): Date {
  if (entry.data.pubDate) return entry.data.pubDate;

  const filenameDate = entry.id.match(/^(\d{4})-(\d{2})-(\d{2})-/);
  if (filenameDate) {
    return new Date(Number(filenameDate[1]), Number(filenameDate[2]) - 1, Number(filenameDate[3]));
  }

  return new Date(0);
}

export function getNewsDescription(entry: NewsEntry): string {
  if (entry.data.description) return entry.data.description;

  const excerpt = (entry.body ?? '')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_>#~-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (excerpt.length > 180) return `${excerpt.slice(0, 177).trimEnd()}...`;
  return excerpt || entry.data.title;
}

export async function getPublishedNews(): Promise<NewsEntry[]> {
  const entries = await getCollection('news', ({ data }) => !data.draft);

  return entries.sort((a, b) => getNewsDate(b).valueOf() - getNewsDate(a).valueOf());
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
