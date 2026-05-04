import { useTranslation } from 'react-i18next';
import { Section } from './Section';
import { Card } from '../ui/Card';

interface Item {
  title: string;
  body: string;
}

export function WhatItTellsYou() {
  const { t } = useTranslation();
  const items = t('whatItTellsYou.items', { returnObjects: true }) as Item[];
  return (
    <Section id="what-it-tells-you" title={t('whatItTellsYou.sectionTitle')} tone="subtle">
      <div className="grid gap-4 lg:grid-cols-2">
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
