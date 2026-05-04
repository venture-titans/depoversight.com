import { useTranslation } from 'react-i18next';
import { Section } from './Section';
import { Card } from '../ui/Card';

interface Item {
  title: string;
  body: string;
}

export function WhoItsFor() {
  const { t } = useTranslation();
  const items = t('whoFor.items', { returnObjects: true }) as Item[];
  return (
    <Section id="who-its-for" title={t('whoFor.sectionTitle')}>
      <div className="grid gap-4 lg:grid-cols-3">
        {items.map((item, i) => (
          <Card key={i} className="flex h-full flex-col">
            <h3 className="text-base font-semibold text-fg">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
