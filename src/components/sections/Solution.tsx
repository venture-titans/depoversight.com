import { useTranslation } from 'react-i18next';
import { Section } from './Section';

export function Solution() {
  const { t } = useTranslation();
  const bullets = t('solution.bullets', { returnObjects: true }) as string[];
  return (
    <Section id="solution" title={t('solution.sectionTitle')} lead={t('solution.sectionLead')}>
      <ul className="mx-auto max-w-3xl space-y-3">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="flex items-start gap-3 rounded-md border border-line bg-ink-800/40 px-4 py-3"
          >
            <span
              aria-hidden="true"
              className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent"
            >
              <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                <path
                  d="M2.5 6l2.5 2.5L9.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-sm text-fg-muted">{b}</span>
          </li>
        ))}
      </ul>

      {/* Two framing callouts: how DepOversight fits with existing tooling,
       * and how it handles signal noise. Addresses customer-review issues
       * #2 (existing-tools fit) and #3 (false-positive acknowledgment). */}
      <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-line bg-ink-800/30 px-4 py-3">
          <p className="text-sm font-semibold text-fg">{t('solution.fitsAlongsideTitle')}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
            {t('solution.fitsAlongsideBody')}
          </p>
        </div>
        <div className="rounded-md border border-line bg-ink-800/30 px-4 py-3">
          <p className="text-sm font-semibold text-fg">{t('solution.tuneForReviewTitle')}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
            {t('solution.tuneForReviewBody')}
          </p>
        </div>
      </div>
    </Section>
  );
}
