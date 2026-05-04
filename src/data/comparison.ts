import type { ComparisonRowMeta } from './types';

export type ComparisonIcon = 'check' | 'x' | 'dash' | 'surface';

export interface ComparisonRow extends ComparisonRowMeta {
  scannerIcon: ComparisonIcon;
  depoversightIcon: ComparisonIcon;
}

// Icon hints mirror the semantic answer in each column. Aligned with the
// translation strings in `comparison.rows[]` — keep the indices in sync.
export const COMPARISON_ROWS: ReadonlyArray<ComparisonRow> = [
  { id: 'cve', scannerIcon: 'check', depoversightIcon: 'surface' },
  { id: 'preAdvisory', scannerIcon: 'x', depoversightIcon: 'check' },
  { id: 'silentPatch', scannerIcon: 'x', depoversightIcon: 'check' },
  { id: 'sensitivePrs', scannerIcon: 'x', depoversightIcon: 'check' },
  { id: 'exposureWindow', scannerIcon: 'x', depoversightIcon: 'check' },
  { id: 'preMergeBlock', scannerIcon: 'dash', depoversightIcon: 'check' },
];
