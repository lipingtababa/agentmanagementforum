import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const authors = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: 'src/content/authors' }),
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    website: z.string().url().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    avatar: z.string().optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: 'src/content/articles' }),
  schema: z.object({
    title: z.string().max(120),
    description: z.string().max(300),
    author: reference('authors'),
    date: z.coerce.date(),
    tags: z.array(z.string()).min(1).max(5),
    original_url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, authors };
