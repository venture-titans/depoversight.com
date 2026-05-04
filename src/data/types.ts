export type Severity = 'high' | 'review' | 'monitoring' | 'blocked';

export type SignalSourceTypeKey =
  | 'publicGithubIssue'
  | 'pullRequestOrCommit'
  | 'commitOrPr'
  | 'dependencyUpdate'
  | 'registryRelease'
  | 'manifestChange';

export type SignalStatusKey =
  | 'confirmedHistoricalPattern'
  | 'potentialUndisclosedFix'
  | 'exposureWindow'
  | 'prCheck'
  | 'maliciousVersion'
  | 'communityConfirmed';

export type SignalId = 'publicIssue' | 'publicFix' | 'mergedUnreleased' | 'riskyUpdate';

export type ScenarioId =
  | 'upstream'
  | 'publicFix'
  | 'mergedNoRelease'
  | 'silentPatch'
  | 'publicIssue'
  | 'riskyUpgrade'
  | 'reverted'
  | 'degradation';

export type TimelineEventId =
  | 'day0Signal'
  | 'day0Flag'
  | 'day3Merge'
  | 'day7Release'
  | 'day14Cve'
  | 'day14Scanner';

export type ProjectId = 'storage-gateway' | 'api-server' | 'billing-worker';

export interface SignalMeta {
  id: SignalId;
  severity: Severity;
  statusKey: SignalStatusKey;
  dependency: string;
  sourceTypeKey: SignalSourceTypeKey;
  sourceUrl: string;
  whyFlaggedCount: 4;
}

export interface ScenarioMeta {
  id: ScenarioId;
}

export interface TimelineEventMeta {
  id: TimelineEventId;
  inExposureWindow: boolean;
}

export interface IntegrationMeta {
  id: string;
}

export interface ComparisonRowMeta {
  id: string;
}
