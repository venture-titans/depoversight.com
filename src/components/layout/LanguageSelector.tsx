import { useEffect, useId, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../i18n/languages';
import { setLanguage } from '../../i18n';

interface Props {
  variant?: 'compact' | 'list';
  onChange?: () => void;
}

export function LanguageSelector({ variant = 'compact', onChange }: Props) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const buttonId = useId();
  const listboxId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const current =
    LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) ?? LANGUAGES[0];

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('mousedown', onClick);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('mousedown', onClick);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const select = (code: string) => {
    setLanguage(code);
    setOpen(false);
    onChange?.();
  };

  if (variant === 'list') {
    // Used inside the mobile menu — full list, no popover.
    return (
      <div role="radiogroup" aria-label={t('nav.selectLanguage')} className="grid grid-cols-2 gap-2">
        {LANGUAGES.map((lang) => {
          const active = lang.code === current.code;
          return (
            <button
              key={lang.code}
              role="radio"
              aria-checked={active}
              onClick={() => select(lang.code)}
              className={`flex min-h-[44px] items-center rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                active
                  ? 'border-accent/60 bg-accent/10 text-fg'
                  : 'border-line bg-ink-800 text-fg-muted hover:border-line-strong hover:text-fg'
              }`}
            >
              {lang.label}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        id={buttonId}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={t('nav.selectLanguage')}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 items-center gap-1.5 rounded-md border border-line bg-ink-800 px-2.5 text-sm text-fg-muted hover:text-fg hover:border-line-strong transition-colors"
      >
        <span aria-hidden="true" className="font-mono text-xs uppercase">
          {current.code}
        </span>
        <span className="hidden md:inline">{current.label}</span>
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={buttonId}
          className="absolute right-0 top-full z-30 mt-1 min-w-[10rem] rounded-md border border-line-strong bg-ink-700 py-1 shadow-lg"
        >
          {LANGUAGES.map((lang) => {
            const active = lang.code === current.code;
            return (
              <li key={lang.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => select(lang.code)}
                  className={`flex w-full items-center justify-between gap-3 px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? 'bg-accent/10 text-fg'
                      : 'text-fg-muted hover:bg-ink-600 hover:text-fg'
                  }`}
                >
                  <span>{lang.label}</span>
                  <span className="font-mono text-xs uppercase opacity-60">{lang.code}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
