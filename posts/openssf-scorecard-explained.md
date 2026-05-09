---
title: 'What an OpenSSF Scorecard score actually measures'
date: 2026-05-06
excerpt: 'Scorecard reduces 19+ structural risk checks to a single 0–10 number. Useful when you understand what is in the score, misleading when you do not.'
category: fundamentals
tags: [openssf, scorecard, fundamentals]
---

[OpenSSF Scorecard](https://scorecard.dev/) gives you a single number between 0 and 10 for any GitHub repository. It's increasingly cited in security tooling, dependency reviews, and procurement conversations. It's also widely *misunderstood*, the score is a useful summary of *some* things and silent about others.

This post is a working explanation: what the score actually measures, what it's reasonable to use it for, and where it stops.

## What Scorecard is

Scorecard is an automated tool, a CLI binary, a [GitHub Action](https://github.com/ossf/scorecard-action), and a hosted scoring database, that runs a set of checks against a public repository. Each check produces a 0–10 score; the overall score is a weighted aggregate.

The 19+ checks fall into a few rough buckets:

- **Project hygiene.** Has a `LICENSE`. Has a `SECURITY.md`. Has a contribution guide.
- **Maintenance signal.** Recent commits. Active maintainers. Closed issues being closed reasonably.
- **Code review.** Mandatory branch protection. Two-reviewer rules. Signed commits.
- **Build and release integrity.** Pinned dependencies in CI. Signed releases. Reproducible builds. SBOM publication.
- **Vulnerability handling.** No known unpatched vulnerabilities. Fuzzing in CI. Static analysis.
- **CI security.** Use of pinned actions (vs floating tags). Token-permission narrowing. Dangerous-workflow patterns.

The check list and weights are public and versioned in the [Scorecard repo](https://github.com/ossf/scorecard).

## What the score does say

A high Scorecard score (e.g. 8+ out of 10) tells you several useful things:

- The maintainers have invested in basic project hygiene.
- The release process has structural protections (signed releases, mandatory review, pinned CI).
- The project is actively maintained, on a recent timescale.
- There are no obvious "known-bad" patterns in the CI workflows.

These are correlates of a project that's *less likely* to be the target of (or vehicle for) a registry-side compromise, a maintainer-takeover, or a silent-patch-without-release scenario. They don't prove safety. They reduce one set of structural risks.

A low Scorecard score (e.g. 4 or below) tells you:

- One or more structural protections are missing.
- The project is more exposed to the failure modes those protections exist to mitigate.
- A reviewer should look at *which* checks failed before deciding whether the gap matters for your usage.

The drilling-down is the important part. A 4/10 because the project lacks fuzzing means something different than a 4/10 because it has no branch protection.

## What the score does NOT say

This is where most misinterpretation lives.

**Scorecard does not measure code quality.** A project can have perfect Scorecard hygiene and still ship a deserialization bug.

**Scorecard does not detect specific vulnerabilities.** It tells you whether structural protections are in place, not whether they're working. A signed release is signed; it isn't necessarily *secure*.

**Scorecard does not predict supply-chain attacks.** A high score is a *correlate* of lower attack risk, not a guarantee. The XZ Utils compromise, [for example](https://www.systemshardening.com/articles/cross-cutting/openssf-scorecard-supply-chain/), happened on a project whose Scorecard signals at the time would not have raised an immediate alarm, the attacker had earned maintainer trust through legitimate contributions.

**Scorecard does not see anything outside the GitHub repo.** The published artifact, the registry-side metadata, the maintainer's npm publishing token, none of these are inputs. A package can pass Scorecard with high marks while being compromised at the registry level. (The 2026 axios incident is a worked example: the GitHub repo was clean; the malicious release was published with a stolen token.)

**Scorecard does not adjust for context.** A score of 6 is often fine for a small, focused library and worrying for a critical infrastructure dependency. The number alone doesn't tell you which.

## How to read a Scorecard score reasonably

A practical reading protocol:

1. **Look at the per-check breakdown, not just the aggregate.** The interesting information is in *which* checks failed.
2. **Weight checks by your usage.** If you don't run the dependency in production, "fuzzing" is less important than "no known unpatched vulnerabilities". If you do, both matter.
3. **Compare against peers in the same niche.** A 5/10 is normal for a 2-maintainer specialist library and a red flag for a top-100 npm package.
4. **Re-run periodically.** Scores drift. A project at 8 today can be at 5 in three months if the maintainer steps back.
5. **Don't gate solely on the aggregate.** Composite-threshold policies (e.g., "block any dependency below 7") produce a lot of false positives in practice. Per-check thresholds calibrated to your security model produce fewer.

## Using Scorecard in your stack

Two practical integration points:

**At dependency-add time.** Before adding a new dependency, run `scorecard --repo=github.com/owner/name` and look at the result. This catches the worst cases (e.g., abandoned projects with dangerous CI workflows) at the cheapest decision point.

**Continuously across your existing graph.** Tools like `scorecard-monitor` track scores over time and alert on regressions. A dependency dropping from 8 to 5 is a posture change worth reviewing, not necessarily an action item, but a signal.

Both modes are well-documented in the [systemshardening Scorecard guide](https://www.systemshardening.com/articles/cross-cutting/openssf-scorecard-supply-chain/), which goes deep on policy enforcement via OPA/Rego.

## Where it sits next to dependency intelligence

Scorecard is a structural posture check; it answers *"how risky is this project as a project?"*. Dependency intelligence is a signal-watching layer; it answers *"what just happened in the upstream of this project that I should look at?"*.

The two are complementary:

- **Scorecard** catches the projects that are *predisposed* to bad outcomes, silent patches, unsigned releases, lax review.
- **Dependency intelligence** catches the *specific events*, a fix-language commit, an anomalous release, a maintenance-cadence break.

Running both means you have both the slow-moving baseline and the day-to-day signal. Running one without the other leaves a gap.

## What the score isn't replacing

To be clear: a high Scorecard score doesn't replace reading the dependency. It doesn't replace the security review of new transitive dependencies. It doesn't replace having a CVE scanner. It's one summary signal in a stack that needs several.

The next post in Fundamentals will look at how SBOMs (Syft, CycloneDX, SPDX) actually work in practice, and where they help vs where they don't.
