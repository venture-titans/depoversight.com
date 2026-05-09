import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Section } from '../components/sections/Section';
import { Badge } from '../components/ui/Badge';
import { BlogProse } from '../components/BlogProse';
import { findPost } from '../blog';

const SITE_TITLE_SUFFIX = ' · DepOversight';

export function BlogPost() {
  const { slug = '' } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const post = findPost(slug);
  const dateFormat = new Intl.DateTimeFormat(i18n.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  useEffect(() => {
    document.title = (post ? post.title : t('blog.indexTitle')) + SITE_TITLE_SUFFIX;
  }, [post, t]);

  if (!post) {
    return (
      <Section title={t('blog.empty')}>
        <p className="mx-auto max-w-2xl text-center">
          <Link to="/blog" className="text-accent hover:text-accent-hover">
            {t('blog.backToIndex')}
          </Link>
        </p>
      </Section>
    );
  }

  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <header className="mb-10 border-b border-line/60 pb-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-fg-subtle">
            <time dateTime={post.date}>
              {t('blog.publishedOn', { date: dateFormat.format(new Date(post.date)) })}
            </time>
            <span aria-hidden="true"> · </span>
            {t('blog.minRead', { count: post.readingTimeMinutes })}
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-3 text-balance text-base text-fg-muted sm:text-lg">
              {post.excerpt}
            </p>
          )}
          {post.tags.length > 0 && (
            <p className="mt-4 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Badge key={tag} tone="neutral">
                  {tag}
                </Badge>
              ))}
            </p>
          )}
          {post.updated && (
            <p className="mt-3 text-xs text-fg-subtle">
              <time dateTime={post.updated}>
                {t('blog.updatedOn', { date: dateFormat.format(new Date(post.updated)) })}
              </time>
            </p>
          )}
        </header>

        <BlogProse html={post.html} />

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-6 text-sm">
          <Link to="/blog" className="text-accent hover:text-accent-hover">
            ← {t('blog.backToIndex')}
          </Link>
          <a
            href={`/blog/${post.slug}.md`}
            className="text-fg-subtle hover:text-fg-muted"
          >
            {t('blog.rawMarkdown')}
          </a>
        </footer>
      </article>
    </Section>
  );
}
