// English — canonical source of truth for all dictionary keys.
// All other locales must mirror this key shape exactly.

export const en = {
  nav: {
    brand: 'DepOversight',
    links: {
      product: 'Product',
      demo: 'Demo',
      howItWorks: 'How it works',
      compare: 'Compare',
      integrations: 'Integrations',
    },
    cta: 'Request Early Access',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    selectLanguage: 'Select language',
    skipToContent: 'Skip to content',
  },
  hero: {
    eyebrow: 'Dependency intelligence',
    title: 'Know when your dependencies become risky before your scanner tells you.',
    subtitle:
      'DepOversight monitors upstream PRs, commits, issues, and releases to surface security-relevant signals across your dependency graph before CVEs, advisories, or scanner alerts exist.',
    oneLiner:
      'CVE scanners tell you what is already known. DepOversight shows you what is starting to look risky.',
    primaryCta: 'Request Early Access',
    secondaryCta: 'Try the demo',
    watchingLabel: 'Watching upstream',
    watchingSources: ['PRs', 'commits', 'issues', 'releases', 'changelogs', 'advisories'],
  },
  demo: {
    sectionEyebrow: 'Interactive demo',
    sectionTitle: 'What DepOversight would have caught during the axios npm compromise',
    sectionLead:
      'A reconstruction of a real supply-chain incident, replayed through the product. Each row is one upstream pattern DepOversight would have raised — before any CVE existed.',
    cta: {
      primary: 'Request early access',
      secondary: 'How it works',
    },
    project: 'Project',
    environment: 'Environment',
    environmentValue: 'production',
    dependency: 'Dependency',
    status: 'Status',
    statusReviewRequired: 'Review required',
    live: 'Live',
    headerLine: '{{project}} · production · {{dependency}}@1.14.x',
    scenario: {
      eyebrow: 'Worked example · Illustrative reconstruction',
      title: 'axios npm supply-chain compromise — 31 March 2026',
      framing:
        'DepOversight was not running during this incident. This view reconstructs what the product would have surfaced, based on the public record.',
      sourcesLabel: 'Sources',
    },
    replay: 'Replay',
    replayDate: '31 Mar 2026',
    metrics: {
      signals: 'Security signals',
      exposureWindow: 'Possible exposure window',
      disclosure: 'Public disclosure pattern',
      sensitivePrs: 'PRs touching sensitive areas',
      advisories: 'Advisories detected',
    },
    filters: {
      label: 'Filter by severity',
      all: 'All',
      high: 'High',
      review: 'Review',
      monitoring: 'Monitoring',
      blocked: 'Blocked',
      empty: 'No signals match this filter.',
    },
    severity: {
      high: 'High',
      review: 'Review',
      monitoring: 'Monitoring',
      blocked: 'Blocked',
    },
    sidebar: {
      brand: 'DepOversight',
      sections: {
        projects: 'Projects',
        signals: 'Signals',
        integrations: 'Integrations',
      },
      severityShortcuts: {
        high: 'High',
        review: 'Review',
        monitoring: 'Monitoring',
        resolved: 'Resolved',
      },
      integrations: {
        github: 'GitHub',
        slack: 'Slack',
        policy: 'Policy',
      },
      collapseLabel: 'Demo workspace',
    },
    projects: {
      'storage-gateway': 'storage-gateway',
      'api-server': 'api-server',
      'billing-worker': 'billing-worker',
    },
    statusLabels: {
      confirmedHistoricalPattern: 'Confirmed historical pattern',
      potentialUndisclosedFix: 'Potential undisclosed fix',
      exposureWindow: 'Exposure window',
      prCheck: 'PR check',
      maliciousVersion: 'Malicious version (yanked)',
      communityConfirmed: 'Community-confirmed compromise',
    },
    sourceType: {
      publicGithubIssue: 'Public GitHub issue',
      pullRequestOrCommit: 'Pull request / commit',
      commitOrPr: 'Commit / PR',
      dependencyUpdate: 'Dependency update',
      registryRelease: 'npm release',
      manifestChange: 'Package manifest change',
    },
    detail: {
      summary: 'Summary',
      whyFlagged: 'Why flagged',
      recommendedAction: 'Recommended action',
      viewSource: 'View source',
      viewTimeline: 'View timeline',
      viewPrCheck: 'View PR check',
      severity: 'Severity',
      status: 'Status',
      dependency: 'Dependency',
      sourceType: 'Source type',
      empty: 'Select a signal to see details.',
      back: 'Back to signals',
    },
    prCheck: {
      title: 'DepOversight Check',
      result: 'Review required',
      summary:
        'Dependency update includes security-relevant upstream activity.',
      dependencyLabel: 'Dependency',
      reasonsLabel: 'Reasons',
      reasons: [
        'Open or recently merged security-sensitive PRs detected',
        'Release status unclear',
        'No advisory found',
        'Current version may be affected',
      ],
      footer: 'Manual review required before merge.',
      close: 'Close',
    },
    timelineButton: 'View timeline',
    prCheckButton: 'View PR check',
    timelineModalTitle: 'Exposure window timeline',
    disclaimer:
      'DepOversight surfaces security-relevant review signals based on public upstream activity. A signal is not a confirmed vulnerability unless linked to an advisory or CVE.',
    signals: {
      publicIssue: {
        title: 'Malicious axios versions published to npm',
        summary:
          'On 31 March 2026 at 00:21 UTC, axios@1.14.1 was published to npm, followed at 01:00 UTC by axios@0.30.4. Both contained a hidden post-install hook fetching a runtime payload.',
        whyFlagged: [
          'Unexpected version bump outside maintainer’s usual release cadence',
          'New transitive dependency added: plain-crypto-js@4.2.1 with no prior axios history',
          'New post-install hook in the published package.json',
          'No matching commit on the axios git repository for the published artifact',
        ],
        recommendedAction:
          'Hold any auto-merge of axios upgrades touching 1.14.1 / 0.30.4 until release origin is verified.',
      },
      publicFix: {
        title: 'Suspicious transitive dependency introduced',
        summary:
          'plain-crypto-js@4.2.1 appears as a runtime dependency in the malicious axios releases. An earlier version (4.2.0) was published the day before by a publisher with no prior history.',
        whyFlagged: [
          'Newly-published package referenced as runtime dependency',
          'Publisher account has no prior package history',
          'Package name shadows a legitimate cryptography library',
          'Post-install script downloads a remote binary',
        ],
        recommendedAction:
          'Treat plain-crypto-js@4.2.1 as untrusted; pin to last known-good axios version.',
      },
      mergedUnreleased: {
        title: 'Community confirms axios 1.14.1 is malicious',
        summary:
          'Multiple independent researchers (Datadog, SANS, Wiz, Elastic) report that axios 1.14.1 deploys a cross-platform RAT via post-install. axios maintainers acknowledge in issue #10636.',
        whyFlagged: [
          'Multi-source independent confirmation',
          'Maintainer-acknowledged in public post-mortem',
          'RAT payloads observed on macOS, Windows, Linux',
          'Active during a 3-hour window before npm yanked the versions',
        ],
        recommendedAction:
          'Audit any CI / dev environment that may have installed axios 1.14.1 between 00:21 and 03:15 UTC.',
      },
      riskyUpdate: {
        title: 'Renovate PR upgrading axios blocked',
        summary:
          'Renovate opened a PR upgrading axios from 1.13.0 to 1.14.1. DepOversight’s PR check blocks the merge — the target version is on the active flagged list, before any CVE was assigned.',
        whyFlagged: [
          'Target version (1.14.1) is on the flagged list',
          'PR opened during active exposure window',
          'No CVE assigned at PR open time — traditional scanners would not have caught this',
          'Auto-merge enabled in this repository',
        ],
        recommendedAction:
          'Manual review required. Pin axios to 1.13.0 or upgrade to a verified release once available.',
      },
    },
  },
  scenarios: {
    sectionTitle: 'Security scenarios DepOversight surfaces',
    sectionLead:
      'Risk in open-source dependencies rarely arrives as a single CVE. These are the patterns we surface.',
    items: {
      upstream: {
        title: 'Risk introduced upstream',
        description:
          'A new upstream change widens the security-sensitive surface area of a dependency you ship.',
      },
      publicFix: {
        title: 'Existing risk fixed publicly',
        description:
          'A maintainer fixes a security-relevant issue in the open before any advisory is published.',
      },
      mergedNoRelease: {
        title: 'Fix merged, but no release exists',
        description:
          'The fix is in main, but every released version still contains the unfixed code path.',
      },
      silentPatch: {
        title: 'Silent patch release',
        description:
          'A new release contains a security-relevant fix without an advisory or release-note callout.',
      },
      publicIssue: {
        title: 'Public issue disclosure',
        description:
          'A maintainer or reporter posts a security-relevant issue publicly before triage is complete.',
      },
      riskyUpgrade: {
        title: 'Risky dependency upgrade',
        description:
          'A proposed upgrade introduces new security-sensitive code surface into your dependency graph.',
      },
      reverted: {
        title: 'Reverted or partial fix',
        description:
          'A previous security-relevant fix is reverted, narrowed, or only partially applied.',
      },
      degradation: {
        title: 'Dependency trust degradation',
        description:
          'Maintenance signals around a dependency change in ways that warrant a posture review.',
      },
    },
  },
  timeline: {
    sectionTitle: 'Where the exposure window opens',
    sectionLead:
      'A typical timeline from upstream signal to CVE — and where DepOversight closes the gap.',
    exposureWindowLabel: 'Possible exposure window',
    callout:
      'The dangerous gap is not after disclosure. It is between the public upstream signal and the official advisory.',
    events: {
      day0Signal: { day: '31 Mar · 00:21 UTC', label: 'axios@1.14.1 published to npm' },
      day0Flag: { day: '31 Mar · ~02:00 UTC', label: 'DepOversight surfaces release-anomaly signal' },
      day3Merge: { day: '31 Mar · 03:15 UTC', label: 'npm yanks both axios versions' },
      day7Release: { day: '1 Apr', label: 'Microsoft, Datadog publish post-mortems' },
      day14Cve: { day: '~8 Apr', label: 'CVE assigned for the compromised releases' },
      day14Scanner: { day: '8 Apr +', label: 'Traditional scanners catch up' },
    },
  },
  problem: {
    sectionTitle: 'The problem',
    sectionLead:
      'CVE scanners answer a question that was already answered — by the time they answer it.',
    bullets: [
      'Most CVE feeds describe risk after disclosure.',
      'Fixes often land before advisories are published.',
      'Some patches ship silently with no advisory at all.',
      'Scanner blind spots leave teams reacting instead of deciding.',
    ],
  },
  solution: {
    sectionTitle: 'The solution',
    sectionLead:
      'DepOversight tracks security posture changes across your open-source dependencies — from risky PRs and public fixes to unreleased patches and pre-advisory exposure windows.',
    bullets: [
      'Read upstream activity continuously, across the dependency graph.',
      'Detect security-relevant patterns in PRs, commits, issues, releases, and changelogs.',
      'Flag dependency posture changes — not just published CVEs.',
      'Block risky dependency updates before they hit main.',
    ],
    fitsAlongsideTitle: 'Fits alongside your existing scanner',
    fitsAlongsideBody:
      'DepOversight runs alongside Dependabot, Snyk, GitHub Advanced Security, or Socket — it does not replace them. The scanner stays your source of truth for published advisories. DepOversight handles the gap before disclosure.',
    tuneForReviewTitle: 'Tuned for review, not alert fatigue',
    tuneForReviewBody:
      'Signals are review triggers. Each one ships with the source PR / commit / issue and recommended action so your team decides what is actionable — false-positives stay false-positives, not pages.',
  },
  whatItTellsYou: {
    sectionTitle: 'What DepOversight tells you',
    items: [
      {
        title: 'Whether to trust this dependency right now',
        body: 'A live posture read of every dependency in your graph, not just the ones with known CVEs.',
      },
      {
        title: 'Whether a fix exists upstream but is unreleased',
        body: 'When a security-relevant patch is in main but not yet shipped, you see it before the release notes do.',
      },
      {
        title: 'Whether a release contains a silent security patch',
        body: 'Releases are scanned for fix patterns even when no advisory accompanies them.',
      },
      {
        title: 'Whether an upgrade introduces new risk surface',
        body: 'Bumps that touch authentication, parsing, or process boundaries are flagged for review.',
      },
      {
        title: 'Whether a public signal predates an advisory',
        body: 'You see the gap between the first public security-relevant signal and the official advisory — before it closes.',
      },
    ],
  },
  howItWorks: {
    sectionTitle: 'How it works',
    capabilitiesLabel: 'Detection capabilities',
    steps: [
      {
        title: 'Watch upstream',
        body: 'Continuously read PRs, commits, issues, releases, and changelogs across your declared dependency graph.',
      },
      {
        title: 'Detect security-relevant signals',
        body: 'Apply detection rules tuned for security-relevant upstream activity: language patterns, code surface changes, and disclosure patterns.',
      },
      {
        title: 'Surface review-worthy events',
        body: 'Promote signals to your review queue with sources, evidence, and recommended action.',
      },
      {
        title: 'Block risky merges',
        body: 'A PR check stops dependency updates that touch flagged versions until reviewed.',
      },
    ],
  },
  detection: {
    sectionTitle: 'The detection engine',
    sectionLead:
      'DepOversight does not run exploits. It reads upstream activity and surfaces patterns that experienced security engineers already look for.',
    items: [
      {
        title: 'Source-type tagging',
        body: 'Each signal is tagged by source: PR, commit, issue, release, changelog, advisory.',
      },
      {
        title: 'Language pattern detection',
        body: 'Identifies fix-language, security-language, and disclosure-language without claiming an exploit exists.',
      },
      {
        title: 'Surface-area awareness',
        body: 'Flags PRs that touch authentication, parsing, deserialization, network, or process boundaries.',
      },
      {
        title: 'Release-state tracking',
        body: 'Tracks whether a fix is merged, released, or only present in a development branch.',
      },
    ],
    disclaimer:
      'Signals are review triggers, not confirmed vulnerabilities, unless tied to a published advisory or CVE.',
  },
  comparison: {
    sectionTitle: 'How this is different from a CVE scanner',
    sectionLead:
      'Traditional scanners answer: "Is this dependency vulnerable?" DepOversight asks: "Should we trust this dependency right now?"',
    columns: {
      capability: 'Capability',
      scanner: 'Dependabot · Snyk · GHAS',
      depoversight: 'DepOversight',
    },
    note: 'Tools like Socket overlap with parts of this — DepOversight focuses specifically on the pre-disclosure window: upstream activity that has not yet produced an advisory.',
    rows: [
      { capability: 'Detects published CVEs', scanner: 'Yes', depoversight: 'Surfaces them' },
      {
        capability: 'Surfaces public upstream fixes before advisory',
        scanner: 'No',
        depoversight: 'Yes',
      },
      { capability: 'Flags silent patch releases', scanner: 'No', depoversight: 'Yes' },
      {
        capability: 'Detects PRs in security-sensitive code',
        scanner: 'No',
        depoversight: 'Yes',
      },
      { capability: 'Highlights exposure windows', scanner: 'No', depoversight: 'Yes' },
      {
        capability: 'Blocks risky dependency upgrades pre-merge',
        scanner: 'Limited',
        depoversight: 'Yes',
      },
    ],
  },
  integrations: {
    sectionTitle: 'Integrations',
    sectionLead: 'DepOversight reads what you already have.',
    dataSourcesLabel: 'Data sources',
    workflowLabel: 'Workflow',
    items: [
      { name: 'GitHub', description: 'PR checks, commit and release feeds.' },
      { name: 'GitLab', description: 'MR checks and pipeline integration.' },
      { name: 'npm', description: 'Package manifests and advisory cross-reference.' },
      { name: 'PyPI', description: 'Package metadata and release feeds.' },
      { name: 'Maven Central', description: 'Artifact metadata and changelog scraping.' },
      { name: 'Go modules', description: 'go.mod parsing and proxy.golang.org metadata.' },
      { name: 'crates.io', description: 'Rust crate metadata and yanked-version tracking.' },
      { name: 'RubyGems', description: 'Gem metadata and release feeds.' },
      { name: 'Slack', description: 'Channel notifications when signals require review.' },
      { name: 'Policy engine', description: 'Configurable rules for which signals block, monitor, or notify.' },
    ],
  },
  whoFor: {
    sectionTitle: "Who DepOversight is for",
    items: [
      {
        title: 'Security engineering',
        body: 'You already triage CVE noise. DepOversight surfaces the signals that arrive before advisories — so you decide instead of react.',
      },
      {
        title: 'Platform and infrastructure',
        body: 'Block risky dependency updates before they hit main. Set policy at the PR check, not at incident response.',
      },
      {
        title: 'Open-source-heavy startups',
        body: "Most of your code is someone else's. Know when their posture changes before you ship a release that depends on it.",
      },
    ],
  },
  earlyAccess: {
    sectionTitle: 'Request early access',
    sectionLead: "Tell us where DepOversight would fit. We'll get back to you.",
    callout: 'Block risky dependency updates before they hit main.',
    pricing: 'Early access is free. Pricing tiers will be announced before GA.',
    fields: {
      name: { label: 'Name', placeholder: 'Optional' },
      email: {
        label: 'Work email',
        placeholder: 'you@company.com',
        error: 'Please enter a valid email.',
        required: 'required',
      },
      company: { label: 'Company', placeholder: 'Optional' },
      githubOrg: { label: 'GitHub org', placeholder: 'Optional' },
      ecosystem: {
        label: 'Main package ecosystem',
        placeholder: 'e.g. npm, PyPI, Go modules',
      },
      currentTool: {
        label: 'Current tool',
        placeholder: 'Select one',
        options: {
          dependabot: 'Dependabot',
          snyk: 'Snyk',
          ghas: 'GitHub Advanced Security',
          socket: 'Socket',
          semgrep: 'Semgrep',
          other: 'Other',
        },
      },
      message: {
        label: 'Message',
        placeholder: 'Optional — what would you want to see first?',
      },
    },
    submit: 'Request access',
    submitting: 'Sending…',
    submitError: 'Could not send. Please try again, or email hello@depoversight.com.',
    success: {
      title: 'Thanks — your request is in.',
      body: "We'll be in touch as we open more early-access slots.",
    },
    expectations:
      "We'll reach out within a few days. Early access slots open in batches — you'll hear back even if you're queued.",
    privacyNotice: 'By submitting you agree to our <link>privacy policy</link>.',
  },
  blog: {
    indexTitle: 'Blog',
    indexLead:
      'Field notes on dependency security, supply-chain incidents, and what we surface before disclosure.',
    readMore: 'Read post',
    minRead: '{{count}} min read',
    publishedOn: 'Published {{date}}',
    updatedOn: 'Updated {{date}}',
    backToIndex: 'Back to blog',
    tagsLabel: 'Tags',
    rawMarkdown: 'View as markdown',
    empty: 'No posts yet, check back soon.',
    categories: {
      industry: 'Industry',
      fundamentals: 'Fundamentals',
      tools: 'Tools',
    },
  },
  footer: {
    tagline: 'Dependency intelligence before disclosure.',
    copyright: '© {{year}} DepOversight. All rights reserved.',
    sections: {
      product: 'Product',
      resources: 'Resources',
    },
    links: {
      demo: 'Demo',
      howItWorks: 'How it works',
      compare: 'vs. CVE scanners',
      earlyAccess: 'Early access',
      llms: 'AI discovery (llms.txt)',
      sitemap: 'Sitemap',
      privacy: 'Privacy',
      contact: 'Contact',
    },
    disclaimer:
      'DepOversight surfaces security-relevant review signals based on public upstream activity. A signal is not a confirmed vulnerability unless linked to an advisory or CVE.',
  },
};

export type Dictionary = typeof en;

// Default export so the i18n loader can pull every locale via the same shape.
export default en;
