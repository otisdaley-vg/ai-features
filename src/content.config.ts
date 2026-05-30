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

const topicEnum = z.enum([
  'code-review',
  'testing',
  'debugging',
  'refactoring',
  'docs-and-writing',
  'infra-and-devops',
  'data-and-analysis',
  'meta-prompting',
  'skills',
]);

const artifactBase = {
  title: z.string(),
  topic: topicEnum,
  summary: z.string(),
  author: z.string(),
  dateAdded: z.coerce.date(),
  tags: z.array(z.string()).optional(),
  dateUpdated: z.coerce.date().optional(),
  deprecated: z.boolean().optional(),
  relatedArtifacts: z.array(z.string()).optional(),
};

const artifacts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/artifacts' }),
  schema: z.discriminatedUnion('type', [
    z.object({ ...artifactBase, type: z.literal('prompt'), targetModel: z.string() }),
    z.object({ ...artifactBase, type: z.literal('skill'), installPath: z.string() }),
    z.object({
      ...artifactBase,
      type: z.literal('settings-snippet'),
      settingsScope: z.enum(['user', 'project']),
    }),
    z.object({ ...artifactBase, type: z.literal('hook'), hookEvent: z.string() }),
    z.object({ ...artifactBase, type: z.literal('slash-command'), commandName: z.string() }),
    z.object({ ...artifactBase, type: z.literal('subagent') }),
    z.object({ ...artifactBase, type: z.literal('playbook') }),
  ]),
});

export const collections = { issues, artifacts };
