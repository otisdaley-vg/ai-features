import rss from '@astrojs/rss';
import { getPublishedIssues } from '../content/published';

export async function GET(context: { site?: URL }) {
  const issues = (await getPublishedIssues()).sort(
    (a, b) => b.data.issueNumber - a.data.issueNumber,
  );
  return rss({
    title: 'AI Features',
    description: 'A newsletter exploring AI features, tooling, and practice.',
    site: context.site!,
    items: issues.map((i) => ({
      title: i.data.title,
      link: `/issues/${i.data.issueNumber}/`,
      pubDate: i.data.date,
      description: i.data.summary,
    })),
  });
}
