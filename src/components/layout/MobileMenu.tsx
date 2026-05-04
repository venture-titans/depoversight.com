import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';

const NAV_ANCHORS = [
  { href: '#demo', key: 'demo' as const },
  { href: '#how-it-works', key: 'howItWorks' as const },
  { href: '#comparison', key: 'compare' as const },
  { href: '#integrations', key: 'integrations' as const },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: Props) {
  const { t } = useTranslation();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div
        className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-ink-900 border-l border-line shadow-2xl">
        <div className="flex h-14 items-center justify-between border-b border-line px-5">
          <span className="font-semibold tracking-tight">{t('nav.brand')}</span>
          <button
            type="button"
            aria-label={t('nav.closeMenu')}
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-fg-muted hover:text-fg hover:bg-ink-700"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
              <path
                d="M4 4L12 12M12 4L4 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-5">
          <ul className="space-y-1">
            {NAV_ANCHORS.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="flex min-h-[44px] items-center justify-between rounded-md px-3 py-2 text-base text-fg hover:bg-ink-700"
                >
                  {t(`nav.links.${item.key}`)}
                  <svg viewBox="0 0 12 12" className="h-3 w-3 text-fg-subtle" fill="none" aria-hidden="true">
                    <path
                      d="M4.5 3L7.5 6L4.5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href="#early-access"
              onClick={onClose}
              className="flex h-11 w-full items-center justify-center rounded-md bg-accent text-ink-950 font-medium hover:bg-accent-hover"
            >
              {t('nav.cta')}
            </a>
          </div>
          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-wider text-fg-subtle">
              {t('nav.selectLanguage')}
            </p>
            <LanguageSelector variant="list" onChange={onClose} />
          </div>
        </nav>
      </div>
    </div>
  );
}
