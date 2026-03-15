import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lyrics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lyrics' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    album: z.string(),
    composer: z.string(),
    mixer: z.string(),
    excerpt: z.string().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { lyrics, posts };
