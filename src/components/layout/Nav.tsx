import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';
import { MobileMenu } from './MobileMenu';

const NAV_ANCHORS = [
  { href: '#demo', key: 'demo' as const },
  { href: '#how-it-works', key: 'howItWorks' as const },
  { href: '#comparison', key: 'compare' as const },
  { href: '#integrations', key: 'integrations' as const },
];

export function Nav() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-ink-950/85 backdrop-blur supports-[backdrop-filter]:bg-ink-950/65">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight text-fg">
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
          </a>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-1">
              {NAV_ANCHORS.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm text-fg-muted transition-colors hover:bg-ink-700 hover:text-fg"
                  >
                    {t(`nav.links.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
            <a
              href="#early-access"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-accent px-3.5 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-hover"
            >
              {t('nav.cta')}
            </a>
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
