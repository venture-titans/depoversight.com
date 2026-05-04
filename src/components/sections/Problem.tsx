import { useTranslation } from 'react-i18next';
import { Section } from './Section';

export function Problem() {
  const { t } = useTranslation();
  const bullets = t('problem.bullets', { returnObjects: true }) as string[];
  return (
    <Section id="problem" title={t('problem.sectionTitle')} lead={t('problem.sectionLead')} tone="subtle">
      <ul className="mx-auto max-w-3xl space-y-3">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3 rounded-md border border-line bg-ink-800/40 px-4 py-3">
            <span
              aria-hidden="true"
              className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-danger/30 bg-danger/10 text-danger"
            >
              <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                <path
                  d="M3 3l6 6M9 3l-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-sm text-fg-muted">{b}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
