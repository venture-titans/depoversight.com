import { useTranslation } from 'react-i18next';
import { Section } from './Section';
import { Card } from '../ui/Card';
import { SCENARIOS } from '../../data/scenarios';

export function SecurityScenarios() {
  const { t } = useTranslation();
  return (
    <Section
      id="scenarios"
      title={t('scenarios.sectionTitle')}
      lead={t('scenarios.sectionLead')}
      tone="subtle"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SCENARIOS.map((scenario) => (
          <Card key={scenario.id} className="flex h-full flex-col">
            <h3 className="text-base font-semibold text-fg">
              {t(`scenarios.items.${scenario.id}.title`)}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              {t(`scenarios.items.${scenario.id}.description`)}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
