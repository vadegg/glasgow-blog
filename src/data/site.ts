export const SITE = {
  name: 'Glasgow Blog',
  url: 'https://blog.glasgow.works',
  description: 'A focused blog about product research, editorial systems, and practical SEO.',
  organizationName: 'Glasgow Works',
  organizationUrl: 'https://glasgow.works',
  logoUrl: 'https://blog.glasgow.works/favicon.svg'
} as const;

export const AUTHORS = {
  vadim: {
    slug: 'vadim',
    name: 'Vadim',
    role: 'Founder and editor',
    bio: 'Vadim writes about product research, editorial systems, and practical SEO on Glasgow Blog.',
    path: '/authors/vadim/',
    url: 'https://blog.glasgow.works/authors/vadim/'
  }
} as const;

export const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.organizationName,
  url: SITE.organizationUrl,
  logo: SITE.logoUrl
} as const;

export function getAuthor(slug: string) {
  return AUTHORS[slug as keyof typeof AUTHORS];
}
