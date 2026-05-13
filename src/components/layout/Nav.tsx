import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';
import { MobileMenu } from './MobileMenu';

const NAV_ANCHORS = [
  { anchor: 'demo', key: 'demo' as const },
  { anchor: 'how-it-works', key: 'howItWorks' as const },
  { anchor: 'comparison', key: 'compare' as const },
  { anchor: 'integrations', key: 'integrations' as const },
];

export function Nav() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-ink-950/85 backdrop-blur supports-[backdrop-filter]:bg-ink-950/65">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight text-fg">
            <img
              src="/favicon-96x96.png"
              alt=""
              aria-hidden="true"
              width={28}
              height={28}
              className="h-7 w-7 rounded-md"
            />
            {t('nav.brand')}
          </Link>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-1">
              {NAV_ANCHORS.map((item) => (
                <li key={item.key}>
                  {isHome ? (
                    <a
                      href={`#${item.anchor}`}
                      className="rounded-md px-3 py-2 text-sm text-fg-muted transition-colors hover:bg-ink-700 hover:text-fg"
                    >
                      {t(`nav.links.${item.key}`)}
                    </a>
                  ) : (
                    <Link
                      to={`/#${item.anchor}`}
                      className="rounded-md px-3 py-2 text-sm text-fg-muted transition-colors hover:bg-ink-700 hover:text-fg"
                    >
                      {t(`nav.links.${item.key}`)}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/blog"
                  className="rounded-md px-3 py-2 text-sm text-fg-muted transition-colors hover:bg-ink-700 hover:text-fg"
                >
                  {t('blog.indexTitle')}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
            {isHome ? (
              <a
                href="#early-access"
                className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-accent px-3.5 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-hover"
              >
                {t('nav.cta')}
              </a>
            ) : (
              <Link
                to="/#early-access"
                className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-accent px-3.5 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-hover"
              >
                {t('nav.cta')}
              </Link>
            )}
            <button
              type="button"
              aria-label={t('nav.openMenu')}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line bg-ink-800 text-fg-muted transition-colors hover:text-fg md:hidden"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
                <path
                  d="M2 4h12M2 8h12M2 12h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
