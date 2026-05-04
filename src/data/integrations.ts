import type { IntegrationMeta } from './types';

// Each id maps to integrations.items[index] in the dictionaries.
export const INTEGRATIONS: ReadonlyArray<IntegrationMeta> = [
  { id: 'github' },
  { id: 'gitlab' },
  { id: 'npm' },
  { id: 'pypi' },
  { id: 'maven' },
  { id: 'go' },
  { id: 'crates' },
  { id: 'rubygems' },
  { id: 'slack' },
  { id: 'policy' },
];
