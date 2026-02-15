import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);

  return rss({
    title: 'Agent Management Forum',
    description:
      'Community-driven insights on AI agent orchestration, governance, and management.',
    site: context.site!,
    items: articles
      .sort(
        (a, b) =>
          new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
      )
      .map((article) => ({
        title: article.data.title,
        pubDate: new Date(article.data.date),
        description: article.data.description,
        link: `/articles/${article.id}`,
      })),
  });
}
