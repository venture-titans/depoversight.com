export type Category = 'industry' | 'fundamentals' | 'tools';

export const CATEGORIES: ReadonlyArray<Category> = ['industry', 'fundamentals', 'tools'];

export interface PostFrontmatter {
  title: string;
  date: string;
  updated?: string;
  excerpt: string;
  category: Category;
  tags?: string[];
  ogImage?: string;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  excerpt: string;
  category: Category;
  tags: string[];
  ogImage?: string;
  html: string;
  markdown: string;
  readingTimeMinutes: number;
}
