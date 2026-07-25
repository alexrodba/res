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
    // Short body shown on the news card. Falls back to nothing if omitted.
    excerpt: z.string().optional(),
    // Card link label. Defaults to "Llegir la història" when opening the detail page.
    linkLabel: z.string().optional(),
    // Optional external link (e.g. Spotify). When set, the card links out instead
    // of opening the /posts/[id] detail page.
    linkUrl: z.string().optional(),
  }),
});

export const collections = { lyrics, posts };
