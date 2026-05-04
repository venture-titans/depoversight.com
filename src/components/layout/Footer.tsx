import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ink-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold tracking-tight">
              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-line-strong bg-ink-800 text-accent"
              >
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                  <path
                    d="M3 5l7 4 7-4M3 10l7 4 7-4M3 15l7 4 7-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
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
              <li>
                <a href="#demo" className="text-fg-muted hover:text-fg">
                  {t('footer.links.demo')}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-fg-muted hover:text-fg">
                  {t('footer.links.howItWorks')}
                </a>
              </li>
              <li>
                <a href="#comparison" className="text-fg-muted hover:text-fg">
                  {t('footer.links.compare')}
                </a>
              </li>
              <li>
                <a href="#early-access" className="text-fg-muted hover:text-fg">
                  {t('footer.links.earlyAccess')}
                </a>
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
