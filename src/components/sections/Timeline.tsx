import { useTranslation } from 'react-i18next';
import { Section } from './Section';
import { TIMELINE_EVENTS } from '../../data/timeline';

export function Timeline() {
  const { t } = useTranslation();
  return (
    <Section
      id="timeline"
      title={t('timeline.sectionTitle')}
      lead={t('timeline.sectionLead')}
    >
      <ol className="relative mx-auto max-w-3xl">
        <div
          aria-hidden="true"
          className="absolute left-3 top-0 bottom-0 w-px bg-line"
        />
        {TIMELINE_EVENTS.map((event, idx) => (
          <li key={event.id} className="relative pl-10 pb-6 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute left-2 top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-ink-950 ${
                event.inExposureWindow ? 'bg-accent' : 'bg-fg-subtle'
              }`}
            />
            <div
              className={`rounded-md border px-4 py-3 ${
                event.inExposureWindow
                  ? 'border-accent/40 bg-accent/5'
                  : 'border-line bg-ink-800/40'
              }`}
            >
              <div className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
                  {t(`timeline.events.${event.id}.day`)}
                </span>
                <span className="text-sm text-fg">{t(`timeline.events.${event.id}.label`)}</span>
              </div>
              {idx === 0 && (
                <p className="mt-2 text-xs uppercase tracking-wider text-accent">
                  {t('timeline.exposureWindowLabel')}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-10 max-w-2xl rounded-lg border border-line bg-ink-800/40 px-5 py-4 text-center text-sm text-fg-muted">
        {t('timeline.callout')}
      </p>
    </Section>
  );
}
