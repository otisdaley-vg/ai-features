import { OGImageRoute } from 'astro-og-canvas';
import { getPublishedIssues } from '../../../content/published';

const issues = await getPublishedIssues();
const pages = Object.fromEntries(
  issues.map((i) => [String(i.data.issueNumber), i.data]),
);

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'issueNumber',
  pages,
  getImageOptions: (_, page: (typeof pages)[string]) => ({
    title: page.title,
    description: `#${String(page.issueNumber).padStart(3, '0')} • ${page.date
      .toISOString()
      .slice(0, 10)} • AI Features`,
    bgGradient: [
      [10, 10, 12],
      [23, 23, 30],
    ],
    border: { color: [16, 185, 129], width: 8, side: 'inline-start' },
    padding: 80,
    font: {
      title: {
        color: [250, 250, 250],
        weight: 'SemiBold',
        size: 64,
      },
      description: {
        color: [163, 163, 163],
        weight: 'Normal',
        size: 28,
      },
    },
  }),
});
