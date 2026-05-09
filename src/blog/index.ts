import type { Post } from './types';
import { parsePost, sortByDateDesc } from './parse';

const rawPosts = import.meta.glob<string>('/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

let cache: Post[] | null = null;

export function loadPosts(): Post[] {
  if (cache) return cache;
  const posts: Post[] = [];
  for (const [path, raw] of Object.entries(rawPosts)) {
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    posts.push(parsePost(slug, raw));
  }
  cache = sortByDateDesc(posts);
  return cache;
}

export function findPost(slug: string): Post | undefined {
  return loadPosts().find((p) => p.slug === slug);
}

export type { Post } from './types';
