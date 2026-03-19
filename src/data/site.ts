export const SITE = {
  name: 'Glasgow Research Blog',
  url: 'https://blog.glasgow.works',
  brandName: 'Glasgow Research',
  description:
    'Research-driven writing for founders and B2B SaaS teams who need reliable market evidence for product, growth, and go-to-market decisions.',
  organizationName: 'Glasgow Research',
  organizationUrl: 'https://glasgow.works',
  logoUrl: 'https://blog.glasgow.works/favicon.svg',
  language: 'English',
  market: 'US and EU',
  audience: [
    'Founders',
    'Product leaders',
    'Early-stage B2B SaaS teams',
    'Growth teams',
    'Agencies'
  ],
  corePromise:
    'Reliable market evidence for founders and product teams making high-stakes product and growth decisions.',
  primaryTopics: [
    'Product research',
    'Customer interviews',
    'JTBD interviews',
    'Market validation',
    'Go-to-market research',
    'Growth research in B2B SaaS',
    'Research systems for founders'
  ],
  secondaryTopics: ['Research operations', 'Decision-making frameworks', 'Adjacent go-to-market validation'],
  excludedTopics: ['General management', 'Life philosophy', 'Politics', 'Esoterica', 'Lifestyle', 'Broad AI hot takes'],
  proofPoints: [
    '30+ projects delivered',
    'Work across 13 countries',
    'Experience from Glasgow Research, Gologin, and Dashly'
  ],
  positioning:
    'Agency-backed personal expertise focused on product research, customer insight, and market evidence.'
} as const;

export const AUTHORS = {
  vadim: {
    slug: 'vadim',
    name: 'Vadim Glazkov',
    role: 'Founder, Glasgow Research',
    expertTitle: 'Product Research Expert',
    bio:
      'Vadim Glazkov is the founder of Glasgow Research and a product research expert working with founders and B2B SaaS teams on customer interviews, JTBD, market validation, and decision-ready research.',
    summary:
      'He writes from hands-on work with founders, product teams, and growth teams that need reliable market evidence before making product and go-to-market bets.',
    selectedExperience: ['Glasgow Research', 'Gologin', 'Dashly'],
    publicSignals: [
      'Public recommendations mention clear structure, practical guidance, and strong JTBD and market research thinking.',
      'Client work spans B2B SaaS, AI, growth, and founder-led teams.'
    ],
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
