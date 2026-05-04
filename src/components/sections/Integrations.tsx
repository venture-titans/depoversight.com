import { useTranslation } from 'react-i18next';
import { Section } from './Section';
import { Card } from '../ui/Card';
import { INTEGRATIONS } from '../../data/integrations';

interface Item {
  name: string;
  description: string;
}

// First 8 entries are read-side data sources (registries + code hosts);
// remaining entries are workflow integrations (Slack, Policy engine).
// Splitting them visually so customers don't conflate "we read npm" with
// "we ship a Slack notification".
const DATA_SOURCE_COUNT = 8;

export function Integrations() {
  const { t } = useTranslation();
  const items = t('integrations.items', { returnObjects: true }) as Item[];
  const dataSources = INTEGRATIONS.slice(0, DATA_SOURCE_COUNT);
  const workflowItems = INTEGRATIONS.slice(DATA_SOURCE_COUNT);

  return (
    <Section
      id="integrations"
      title={t('integrations.sectionTitle')}
      lead={t('integrations.sectionLead')}
      tone="subtle"
    >
      <div className="space-y-10">
        <SubGrid label={t('integrations.dataSourcesLabel')}>
          {dataSources.map((integration, i) => {
            const item = items[i];
            if (!item) return null;
            return (
              <Card key={integration.id} className="flex h-full flex-col">
                <p className="font-mono text-sm text-fg">{item.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.description}</p>
              </Card>
            );
          })}
        </SubGrid>

        <SubGrid label={t('integrations.workflowLabel')}>
          {workflowItems.map((integration, i) => {
            const item = items[DATA_SOURCE_COUNT + i];
            if (!item) return null;
            return (
              <Card key={integration.id} className="flex h-full flex-col">
                <p className="font-mono text-sm text-fg">{item.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.description}</p>
              </Card>
            );
          })}
        </SubGrid>
      </div>
    </Section>
  );
}

function SubGrid({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 text-center text-xs font-medium uppercase tracking-wider text-fg-subtle">
        {label}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{children}</div>
    </div>
  );
}
