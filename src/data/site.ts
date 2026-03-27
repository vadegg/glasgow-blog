export const SITE = {
  name: 'Glasgow Research Blog',
  shortName: 'Glasgow Research',
  url: 'https://blog.glasgow.works',
  brandName: 'Glasgow Research',
  description:
    'Notes on product research, customer interviews, JTBD, market validation, and the decisions teams make from that work.',
  organizationName: 'Glasgow Research',
  organizationUrl: 'https://glasgow.works',
  logoUrl: 'https://blog.glasgow.works/logo.svg',
  language: 'English',
  market: 'Global',
  audience: [
    'Founders',
    'Product leaders',
    'Early-stage B2B SaaS teams',
    'Growth teams',
    'Agencies'
  ],
  corePromise: 'Clear market signal for teams making product, growth, and go-to-market decisions.',
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
    'Hands-on work across product research, JTBD studies, and market validation',
    'Experience with SaaS, AI, and founder-led teams',
    'Public recommendations repeatedly mention clarity, structure, and practical research thinking'
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
    photoPath: '/images/vadim-photo.png',
    photoAlt: 'Portrait of Vadim Glazkov',
    selectedExperience: [
      'B2B SaaS customer research',
      'Founder-led validation work',
      'JTBD and market evidence for product decisions'
    ],
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
