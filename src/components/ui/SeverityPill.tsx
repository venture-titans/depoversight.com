import { useTranslation } from 'react-i18next';
import type { Severity } from '../../data/types';
import { Badge } from './Badge';

const SEVERITY_TONE = {
  high: 'danger',
  review: 'review',
  monitoring: 'monitor',
  blocked: 'blocked',
} as const;

export function SeverityPill({ severity }: { severity: Severity }) {
  const { t } = useTranslation();
  return <Badge tone={SEVERITY_TONE[severity]}>{t(`demo.severity.${severity}`)}</Badge>;
}
