import { getCollection, type CollectionEntry } from 'astro:content';

export function isPublished(
  issue: CollectionEntry<'issues'>,
  now: Date = new Date(),
): boolean {
  if (import.meta.env.DEV) return true;
  return issue.data.date.getTime() <= now.getTime();
}

export async function getPublishedIssues(): Promise<CollectionEntry<'issues'>[]> {
  const issues = await getCollection('issues');
  return issues.filter((issue) => isPublished(issue));
}
