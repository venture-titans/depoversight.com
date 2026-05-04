import { useTranslation } from 'react-i18next';
import { LinkButton } from '../ui/Button';

export function Hero() {
  const { t } = useTranslation();
  const watchingSources = t('hero.watchingSources', { returnObjects: true }) as string[];
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-line/60 bg-gradient-to-b from-ink-950 via-ink-950 to-ink-900 pb-16 pt-16 sm:pb-20 sm:pt-24 lg:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-ink-800/70 px-3 py-1 text-xs font-medium text-fg-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {t('hero.eyebrow')}
        </p>
        <h1
          id="hero-heading"
          className="text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:text-6xl"
        >
          {t('hero.title')}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-fg-muted">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="#early-access" variant="primary" size="md">
            {t('hero.primaryCta')}
          </LinkButton>
          <LinkButton href="#demo" variant="secondary" size="md">
            {t('hero.secondaryCta')}
          </LinkButton>
        </div>

        {/* Proof-of-substance row: shows the upstream sources DepOversight actually
         * reads. Reads as a real product surface in the 5-second window. */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-fg-subtle">
          <span className="inline-flex items-center gap-1.5 text-fg-muted">
            <span
              aria-hidden="true"
              className="live-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-accent"
            />
            <span className="font-medium uppercase tracking-wider">{t('hero.watchingLabel')}</span>
          </span>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono">
            {watchingSources.map((src, i) => (
              <li key={i} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="text-fg-subtle/40">·</span>}
                <span>{src}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-10 max-w-2xl rounded-lg border border-line bg-ink-800/40 px-5 py-4 text-sm text-fg-muted">
          {t('hero.oneLiner')}
        </p>
      </div>
    </section>
  );
}
