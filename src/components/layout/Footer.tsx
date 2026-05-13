import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  // Cross-route hash links use react-router; home-page hash links stay native
  // so the browser does smooth scroll without a route transition.
  const homeAnchor = (anchor: string, label: string) =>
    isHome ? (
      <a href={`#${anchor}`} className="text-fg-muted hover:text-fg">
        {label}
      </a>
    ) : (
      <Link to={`/#${anchor}`} className="text-fg-muted hover:text-fg">
        {label}
      </Link>
    );

  return (
    <footer className="border-t border-line bg-ink-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold tracking-tight">
              <img
                src="/favicon-96x96.png"
                alt=""
                aria-hidden="true"
                width={28}
                height={28}
                className="h-7 w-7 rounded-md"
              />
              {t('nav.brand')}
            </div>
            <p className="mt-3 max-w-sm text-sm text-fg-muted">{t('footer.tagline')}</p>
            <a
              href="mailto:hello@depoversight.com"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                <path
                  d="M2.5 4h11v8h-11V4zM2.5 4l5.5 4.5L13.5 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t('footer.links.contact')}
            </a>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
              {t('footer.sections.product')}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>{homeAnchor('demo', t('footer.links.demo'))}</li>
              <li>{homeAnchor('how-it-works', t('footer.links.howItWorks'))}</li>
              <li>{homeAnchor('comparison', t('footer.links.compare'))}</li>
              <li>{homeAnchor('early-access', t('footer.links.earlyAccess'))}</li>
              <li>
                <Link to="/blog" className="text-fg-muted hover:text-fg">
                  {t('blog.indexTitle')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
              {t('footer.sections.resources')}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="/llms.txt" className="text-fg-muted hover:text-fg">
                  {t('footer.links.llms')}
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="text-fg-muted hover:text-fg">
                  {t('footer.links.sitemap')}
                </a>
              </li>
              <li>
                <a href="/privacy.html" className="text-fg-muted hover:text-fg">
                  {t('footer.links.privacy')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-line pt-6">
          <p className="text-xs text-fg-subtle">{t('footer.disclaimer')}</p>
          <p className="mt-2 text-xs text-fg-subtle">
            {t('footer.copyright', { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
