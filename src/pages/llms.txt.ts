import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { AUTHORS, SITE } from '../data/site';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const articles = posts
    .map(
      (post) =>
        `- [${post.data.title}](${SITE.url}/blog/${post.data.slug}/): ${post.data.description}`
    )
    .join('\n');

  const body = `# ${SITE.organizationName}

> Glasgow Research publishes practical, evidence-led UX and market research guides for B2B SaaS product teams.

- Author: ${AUTHORS.vadim.name}
- Blog: ${SITE.url}/blog/
- About: ${SITE.url}/about/

## Articles

${articles}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
