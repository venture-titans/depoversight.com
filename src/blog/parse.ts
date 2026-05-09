import type { Category, Post, PostFrontmatter } from './types';
import { CATEGORIES } from './types';
import { parseFrontmatter } from './frontmatter';
import { readingTimeMinutes, renderMarkdown } from './markdown';

export function parsePost(slug: string, raw: string): Post {
  const { data, content } = parseFrontmatter(raw);
  const fm = data as unknown as PostFrontmatter;
  if (!fm.title || !fm.date || !fm.excerpt) {
    throw new Error(
      `Post "${slug}" is missing required frontmatter (title, date, excerpt).`,
    );
  }
  if (!fm.category || !CATEGORIES.includes(fm.category as Category)) {
    throw new Error(
      `Post "${slug}" must declare category as one of: ${CATEGORIES.join(', ')}.`,
    );
  }
  return {
    slug,
    title: String(fm.title),
    date: String(fm.date),
    updated: fm.updated ? String(fm.updated) : undefined,
    excerpt: String(fm.excerpt),
    category: fm.category as Category,
    tags: Array.isArray(fm.tags) ? fm.tags : [],
    ogImage: fm.ogImage ? String(fm.ogImage) : undefined,
    html: renderMarkdown(content),
    markdown: content,
    readingTimeMinutes: readingTimeMinutes(content),
  };
}

export function sortByDateDesc(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}
