import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Section } from '../components/sections/Section';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { loadPosts } from '../blog';
import { CATEGORIES, type Category, type Post } from '../blog/types';

const SITE_TITLE_SUFFIX = ' · DepOversight';

export function BlogIndex() {
  const { t, i18n } = useTranslation();
  const posts = loadPosts();
  const dateFormat = new Intl.DateTimeFormat(i18n.language, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  // Group posts by category, preserving the canonical category order so the
  // funnel reads top-to-bottom (problem-awareness → educational → comparisons).
  const grouped = useMemo(() => {
    const buckets = new Map<Category, Post[]>();
    for (const cat of CATEGORIES) buckets.set(cat, []);
    for (const post of posts) {
      const arr = buckets.get(post.category);
      if (arr) arr.push(post);
    }
    return CATEGORIES.map((cat) => ({ category: cat, posts: buckets.get(cat) ?? [] })).filter(
      (g) => g.posts.length > 0,
    );
  }, [posts]);

  useEffect(() => {
    document.title = t('blog.indexTitle') + SITE_TITLE_SUFFIX;
  }, [t]);

  return (
    <Section
      id="blog"
      title={t('blog.indexTitle')}
      lead={t('blog.indexLead')}
    >
      {grouped.length === 0 ? (
        <p className="mx-auto max-w-2xl text-center text-fg-muted">
          {t('blog.empty')}
        </p>
      ) : (
        <div className="mx-auto max-w-4xl space-y-14">
          {grouped.map(({ category, posts: catPosts }) => (
            <section key={category} aria-labelledby={`cat-${category}`}>
              <h2
                id={`cat-${category}`}
                className="mb-5 text-xs font-semibold uppercase tracking-wider text-accent"
              >
                <Link to={`/blog/${category}/`} className="hover:text-accent-hover">
                  {t(`blog.categories.${category}`)}
                </Link>
              </h2>
              <ul className="grid gap-5 sm:grid-cols-2">
                {catPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      to={`/blog/${post.slug}/`}
                      className="block focus-visible:outline-none"
                      aria-label={post.title}
                    >
                      <Card interactive className="h-full">
                        <article className="flex h-full flex-col">
                          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-fg-subtle">
                            <time dateTime={post.date}>
                              {dateFormat.format(new Date(post.date))}
                            </time>
                            <span aria-hidden="true"> · </span>
                            {t('blog.minRead', { count: post.readingTimeMinutes })}
                          </p>
                          <h3 className="text-lg font-semibold text-fg">{post.title}</h3>
                          <p className="mt-2 grow text-sm text-fg-muted">{post.excerpt}</p>
                          {post.tags.length > 0 && (
                            <p className="mt-4 flex flex-wrap gap-1.5">
                              {post.tags.map((tag) => (
                                <Badge key={tag} tone="neutral">
                                  {tag}
                                </Badge>
                              ))}
                            </p>
                          )}
                        </article>
                      </Card>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </Section>
  );
}
