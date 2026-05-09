---
title: 'How DepOversight would have caught the axios npm compromise'
date: 2026-05-01
excerpt: 'On 31 March 2026, two malicious axios releases were live on npm for just over three hours. There was no CVE. There was no advisory. Here is what we would have surfaced, and when.'
category: fundamentals
tags: [supply-chain, npm, axios, worked-example]
---

On **31 March 2026 at 00:21 UTC**, `axios@1.14.1` was published to npm. Forty minutes later, `axios@0.30.4` followed. Both contained a hidden post-install hook that fetched a runtime payload, a cross-platform RAT, from an attacker-controlled domain. By **03:25 UTC**, npm had yanked both versions. From first publish to yank, the window was three hours and four minutes.

During those three hours, every CI environment that ran `npm install` against an unconstrained `^1.13` or `^0.29` axios range pulled the malicious code. Every Renovate or Dependabot PR that auto-merged a patch upgrade in that window was a delivery vehicle. There was no CVE. There was no GHSA advisory. Traditional scanners had nothing to flag.

This post reconstructs the incident through the lens of the signals DepOversight is built to surface, and shows where in the timeline each one would have fired.

## What actually happened

Public reporting from Datadog Security Labs, Microsoft, and the maintainer post-mortem in [axios#10636](https://github.com/axios/axios/issues/10636) gives us the sequence:

1. **00:21 UTC**, `axios@1.14.1` published to npm. The maintainer's normal release cadence at this point was every 4–6 weeks; the previous release was 8 days prior. The publish came from a fresh npm token, not the maintainer's usual one.
2. **01:00 UTC**, `axios@0.30.4` published to npm. Same payload, targeted at projects still pinned to the legacy 0.x line.
3. **00:21–03:25 UTC**, Both versions live on the registry. CI systems and developer machines pulling `axios` resolved to the malicious release.
4. **02:11 UTC**, First independent researcher (Datadog) flags the release as suspicious based on a new transitive dependency, `plain-crypto-js@4.2.1`, with no prior history.
5. **02:54 UTC**, axios maintainers acknowledge the compromise in issue #10636.
6. **03:25 UTC**, npm yanks both versions.
7. **08 April 2026**, CVE assigned (well after the active window closed).

The dangerous window is the first three hours. **No traditional scanner produces a signal during that window**, because traditional scanners only know what an advisory database tells them.

## What DepOversight would have surfaced

DepOversight reads upstream activity continuously. It does not run exploits and it does not call a release "vulnerable", it surfaces patterns that an experienced reviewer would want to look at. Four of those patterns fire on this incident.

### Signal 1, Release anomaly

> **00:21 UTC.** `axios@1.14.1` published to npm.

Within a couple of minutes, the release-anomaly detector would have flagged this release on four counts:

- The version bump is outside the maintainer's recent cadence.
- A new transitive dependency (`plain-crypto-js@4.2.1`) appears in the published `package.json` with no prior history in axios.
- The published artifact contains a post-install hook not present in any prior release.
- There is no matching commit on the `axios` git repository for the published artifact, the tarball does not correspond to a tagged release.

Each of those is benign in isolation. Together they form the pattern of a registry-side compromise where an attacker has obtained a publish credential without touching the source repository. **A reviewer looking at this signal would not have merged any PR upgrading to 1.14.1.**

### Signal 2, Suspicious transitive dependency

> **00:22 UTC.** `plain-crypto-js@4.2.1` referenced as a runtime dependency.

The new transitive package is published two days earlier by an account with no prior packages, and the package name shadows a well-known cryptography library. Its post-install script downloads a remote binary at install time.

This is not "axios is vulnerable." It is "a release of axios introduces a dependency that on its own merits a security review."

### Signal 3, Community confirmation

> **02:11–02:54 UTC.** Datadog, SANS ISC, Wiz, and Elastic publish independent analyses; axios maintainers acknowledge in #10636.

DepOversight watches public security-relevant discussion across issues, gists, and a curated set of researcher feeds. When multiple independent sources converge on the same release, the existing release-anomaly signal is escalated to a confirmed compromise, *before* a CVE exists, *before* a GHSA advisory exists.

### Signal 4, PR-level block

> **02:35 UTC.** Renovate opens a PR upgrading `axios` from `1.13.0` to `1.14.1` on a downstream repo with auto-merge enabled.

The DepOversight PR check refuses the merge. The check explains why:

- The target version is on the active flagged list.
- The PR was opened during an exposure window.
- No CVE has been assigned at this point, a traditional scanner would not have caught this.
- Auto-merge is enabled, so the human-in-the-loop has been delegated.

The check is the policy enforcement layer. It is the difference between "we noticed" and "the malicious release did not enter `main`."

## Where the gap actually is

A useful way to look at any supply-chain incident is to draw the timeline twice: once for what the public knew, and once for what your scanner knew.

For axios, the public knew something was off **at 02:11 UTC** (researcher posts), and the maintainer confirmed **at 02:54 UTC**. The CVE landed **on 08 April**. Between 02:11 UTC on 31 March and the CVE on 08 April, traditional scanners had nothing actionable. **That eight-day gap, plus the three-hour active-attack window before it, is where DepOversight is designed to operate.**

## What this is not

DepOversight does not claim that every release-anomaly signal is malicious. The four-count detection in Signal 1 above will fire on legitimate releases too, most often when a maintainer is genuinely changing their packaging strategy. The output of the system is a review trigger, not a verdict. The decision still belongs to your security team.

What changes with DepOversight in place is the *time at which the decision becomes possible*. For axios, that moves from "a week after the CVE" to "two minutes after the malicious publish."

## Disclaimer

DepOversight was not running during this incident. The reconstruction above is post-hoc and illustrative, drawn entirely from the public record cited at the top of this post. A signal is a review trigger, not a confirmed vulnerability, unless tied to a published advisory or CVE.
