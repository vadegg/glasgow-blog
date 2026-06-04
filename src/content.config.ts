import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import {
  META_DESCRIPTION_MAX_LENGTH,
  META_DESCRIPTION_MIN_LENGTH,
  normalizeMetaDescription
} from './lib/metadata';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z
      .string()
      .transform((value) => normalizeMetaDescription(value))
      .refine(
        (value) =>
          value.length >= META_DESCRIPTION_MIN_LENGTH && value.length <= META_DESCRIPTION_MAX_LENGTH,
        `Description must be ${META_DESCRIPTION_MIN_LENGTH}-${META_DESCRIPTION_MAX_LENGTH} characters.`
      ),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.number().int().positive().optional(),
    author: z.string(),
    authorSlug: z.string(),
    category: z.string().default('Blog'),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { blog };
