import { useTranslation } from 'react-i18next';
import { Section } from './Section';
import { Card } from '../ui/Card';

interface Item {
  title: string;
  body: string;
}

export function DetectionEngine() {
  const { t } = useTranslation();
  const items = t('detection.items', { returnObjects: true }) as Item[];
  return (
    <Section
      id="detection"
      title={t('detection.sectionTitle')}
      lead={t('detection.sectionLead')}
      tone="subtle"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <Card key={i} className="flex h-full flex-col">
            <h3 className="text-base font-semibold text-fg">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.body}</p>
          </Card>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-3xl rounded-lg border border-line bg-ink-800/40 px-5 py-4 text-center text-sm text-fg-muted">
        {t('detection.disclaimer')}
      </p>
    </Section>
  );
}
