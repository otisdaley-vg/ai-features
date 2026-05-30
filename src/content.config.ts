import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const issues = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/issues' }),
  schema: z.object({
    issueNumber: z.number().int().positive(),
    title: z.string(),
    date: z.coerce.date(),
    editors: z.array(z.string()).nonempty(),
    summary: z.string(),
    featuredArtifact: z
      .object({
        title: z.string(),
        url: z.string().url().optional(),
        description: z.string().optional(),
      })
      .optional(),
    topicsCovered: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = { issues };
