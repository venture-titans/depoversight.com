import type { ScenarioMeta } from './types';

export const SCENARIOS: ReadonlyArray<ScenarioMeta> = [
  { id: 'upstream' },
  { id: 'publicFix' },
  { id: 'mergedNoRelease' },
  { id: 'silentPatch' },
  { id: 'publicIssue' },
  { id: 'riskyUpgrade' },
  { id: 'reverted' },
  { id: 'degradation' },
];
