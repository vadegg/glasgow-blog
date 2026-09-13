export const TOPICS = [
  { slug: 'product-research', title: 'Product and market research', description: 'Understand customers, buying decisions and the market before committing to a product or position.' },
  { slug: 'ux-research-methods', title: 'UX research methods', description: 'Choose and run interviews, usability tests, surveys and other studies for a specific decision.' },
  { slug: 'research-operations', title: 'Research operations', description: 'Recruit the right people, choose tools and manage consent, quality and reusable evidence.' },
  { slug: 'insight-to-impact', title: 'Analysis and research impact', description: 'Turn observations into defensible findings, priorities and measurable decisions.' },
  { slug: 'product-discovery', title: 'Product discovery', description: 'Investigate jobs, assumptions and concepts before investing in a solution.' }
] as const;

export function getTopic(slug: string) {
  return TOPICS.find((topic) => topic.slug === slug);
}
