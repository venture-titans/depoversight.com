import type { ProjectId, SignalMeta } from './types';

export const PROJECT = 'acme/storage-gateway';
export const DEPENDENCY = 'axios';

/**
 * Worked-example metadata for the demo dashboard. The dashboard reconstructs
 * a real, fully-public OSS supply-chain incident — the axios npm compromise of
 * 31 March 2026 — to show what DepOversight would surface during such a window.
 *
 * DepOversight was not running during this incident. The reconstruction is
 * post-hoc and illustrative.
 */
export const SCENARIO = {
  id: 'axios-2026-03-31',
  ecosystem: 'npm',
  affectedVersions: ['1.14.1', '0.30.4'],
  publishedAt: '2026-03-31T00:21:00Z',
  yankedAt: '2026-03-31T03:25:00Z',
  sources: [
    {
      label: 'axios#10636 (maintainer post-mortem)',
      url: 'https://github.com/axios/axios/issues/10636',
    },
    {
      label: 'Datadog Security Labs',
      url: 'https://securitylabs.datadoghq.com/articles/axios-npm-supply-chain-compromise/',
    },
    {
      label: 'Microsoft Security Blog',
      url: 'https://www.microsoft.com/en-us/security/blog/2026/04/01/mitigating-the-axios-npm-supply-chain-compromise/',
    },
  ],
} as const;

// Each signal corresponds to one phase of the worked-example incident. Source
// URLs resolve to '#' since this is illustrative — the SCENARIO.sources array
// holds the canonical links for the banner.
export const SIGNALS: ReadonlyArray<SignalMeta> = [
  {
    id: 'publicIssue',
    severity: 'high',
    statusKey: 'maliciousVersion',
    dependency: DEPENDENCY,
    sourceTypeKey: 'registryRelease',
    sourceUrl: '#',
    whyFlaggedCount: 4,
  },
  {
    id: 'publicFix',
    severity: 'high',
    statusKey: 'exposureWindow',
    dependency: DEPENDENCY,
    sourceTypeKey: 'manifestChange',
    sourceUrl: '#',
    whyFlaggedCount: 4,
  },
  {
    id: 'mergedUnreleased',
    severity: 'high',
    statusKey: 'communityConfirmed',
    dependency: DEPENDENCY,
    sourceTypeKey: 'publicGithubIssue',
    sourceUrl: '#',
    whyFlaggedCount: 4,
  },
  {
    id: 'riskyUpdate',
    severity: 'blocked',
    statusKey: 'prCheck',
    dependency: DEPENDENCY,
    sourceTypeKey: 'dependencyUpdate',
    sourceUrl: '#',
    whyFlaggedCount: 4,
  },
];

export const DASHBOARD_METRICS = {
  signals: 4,
  exposureWindow: 1,
  disclosure: 1,
  sensitivePrs: 2,
  advisories: 0,
} as const;

export const PROJECTS: ReadonlyArray<{ id: ProjectId; active: boolean }> = [
  { id: 'storage-gateway', active: true },
  { id: 'api-server', active: false },
  { id: 'billing-worker', active: false },
];

export const SIDEBAR_INTEGRATIONS = ['github', 'slack', 'policy'] as const;
