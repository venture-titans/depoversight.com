import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Section } from '../components/sections/Section';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { loadPosts } from '../blog';
import type { Category } from '../blog/types';

const SITE_TITLE_SUFFIX = ' · DepOversight';

interface Props {
  category: Category;
}

export function BlogCategory({ category }: Props) {
  const { t, i18n } = useTranslation();
  const allPosts = loadPosts();
  const posts = useMemo(() => allPosts.filter((p) => p.category === category), [allPosts, category]);
  const dateFormat = new Intl.DateTimeFormat(i18n.language, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const categoryLabel = t(`blog.categories.${category}`);

  useEffect(() => {
    document.title = `${categoryLabel} · ${t('blog.indexTitle')}${SITE_TITLE_SUFFIX}`;
  }, [categoryLabel, t]);

  return (
    <Section id={`blog-${category}`} eyebrow={categoryLabel} title={t('blog.indexTitle')} lead={t('blog.indexLead')}>
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-fg-subtle">
        <Link to="/blog" className="hover:text-fg-muted">
          ← {t('blog.backToIndex')}
        </Link>
      </p>
      {posts.length === 0 ? (
        <p className="mx-auto max-w-2xl text-center text-fg-muted">{t('blog.empty')}</p>
      ) : (
        <ul className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {posts.map((post) => (
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
      )}
    </Section>
  );
}
