import { useTranslation } from 'react-i18next';
import { Section } from './Section';

interface Step {
  title: string;
  body: string;
}

interface CapabilityItem {
  title: string;
  body: string;
}

export function HowItWorks() {
  const { t } = useTranslation();
  const steps = t('howItWorks.steps', { returnObjects: true }) as Step[];
  // Detection items previously had their own section (DetectionEngine); folded
  // here as a compact sub-grid under the 4-step process to reduce the
  // "five sections explaining the same thing" feel.
  const capabilities = t('detection.items', { returnObjects: true }) as CapabilityItem[];
  return (
    <Section id="how-it-works" title={t('howItWorks.sectionTitle')}>
      <ol className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={i} className="rounded-lg border border-line bg-ink-800 p-5">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 text-base font-semibold text-fg">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{step.body}</p>
          </li>
        ))}
      </ol>

      {/* Detection capabilities — inline sub-grid, no separate scroll-step. */}
      <div className="mx-auto mt-12 max-w-5xl">
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-wider text-fg-subtle">
          {t('howItWorks.capabilitiesLabel')}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="rounded-md border border-line/70 bg-ink-900/50 px-4 py-3"
            >
              <p className="text-sm font-medium text-fg">{cap.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-fg-muted">{cap.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
