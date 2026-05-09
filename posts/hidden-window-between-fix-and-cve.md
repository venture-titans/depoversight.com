---
title: 'The hidden window between a security fix and a public CVE'
date: 2026-05-02
excerpt: 'For most vulnerabilities, the fix lands in main long before any advisory or CVE exists. The gap is measured in days for the lucky cases and months for the median. Here is what happens in that window.'
category: industry
tags: [pre-cve, disclosure, advisory-databases]
---

A vulnerability disclosure feels, from the outside, like a single event. The CVE goes live, scanners refresh, your dashboard changes colour, and you patch. The reality is a sequence, and most of it has already happened by the time the CVE shows up.

This post is about what happens between the fix landing in `main` and the CVE being public. It's the window where dependency security is most exposed, and where most teams have the least visibility.

## The actual sequence

For a typical "fix lands first, advisory follows" vulnerability, the steps are:

1. A maintainer writes a patch and commits it to the project's default branch.
2. The patch is reviewed and merged. Often there's a test that proves the fix works.
3. The maintainer cuts a new release containing the patch. The release notes may or may not mention the security relevance.
4. Someone, the maintainer, a reporter, a coordinator, decides the issue warrants an advisory.
5. A CVE number is requested from a [CNA](https://www.cve.org/PartnerInformation/ListofPartners) (CVE Numbering Authority).
6. The CNA publishes the entry, populating fields like affected versions, severity, and the description.
7. Aggregator databases, [NVD](https://nvd.nist.gov/), [GitHub Advisory Database](https://github.com/advisories), [OSV](https://osv.dev/), ingest the entry.
8. Your scanner refreshes its feed and matches the new entry against your dependency graph.

Steps 1–3 are typically same-day or same-week. Steps 4–7 are the long tail. Independent measurements have put the median time from public fix to CVE publication in the **two- to four-week** range across major ecosystems, with a non-trivial fraction taking **months** and a small fraction never getting a CVE at all.

Every day in that window is a day your scanner is silent and your dependency is, by any reasonable definition, vulnerable.

## What lives in the window

Three categories of risk concentrate here:

**The fix-in-main, no-release case.** The patch is committed but no release contains it yet. Your dependency manager is pinned to the latest released version, which is still vulnerable. When the advisory eventually lands, it correctly names that release as affected, but only retroactively.

**The released-but-no-advisory case.** A new release contains the fix. The release notes call it a "minor fix in `auth.ts`" or skip the security framing entirely. No CVE is requested. Your scanner sees a patch version bump it could safely auto-merge, and the vulnerable version stays in your graph until you happen to upgrade.

**The actively-exploited-during-the-window case.** This is the [XZ Utils compromise (CVE-2024-3094)](https://nvd.nist.gov/vuln/detail/CVE-2024-3094), the [event-stream incident](https://github.com/dominictarr/event-stream/issues/116), and the more recent registry-side compromises. The window between "public signal exists" and "CVE published" is where attacks happen, not where they are merely possible.

## What the public signals actually look like

The reason this window is *visible*, even when no advisory exists, is that the steps that produce the eventual advisory leave a trail. Some of that trail is structured (commits, PRs, releases); some of it is conversational (issue comments, post-mortems, security researcher posts).

A reviewer who reads upstream activity sees:

- Commit messages with verbs like *prevent*, *sanitize*, *avoid*, *no longer*.
- PR descriptions that link to private discussions or reference embargoed coordination.
- Tests added with names that describe the vulnerability ("does_not_leak_*", "rejects_path_traversal_*").
- Diffs that touch boundaries the project's security-conscious reviewers always look at: deserialization, parsers, authentication, process spawn, file paths.
- Maintainer activity on issues that get redacted, locked, or moved to private.

None of this is a CVE. None of it would trip a scanner. All of it is observable.

## Why this isn't a scanner-vendor problem

It's tempting to read this as "the scanners need to be faster", and at the margins, that's true; faster ingestion of advisory feeds is meaningful work. But the window is structural. A vulnerability scanner's data source is, by definition, the advisory database. The earliest moment the scanner can possibly know about a problem is the moment someone publishes the entry. Steps 1–4 are *upstream of* the scanner's input.

This isn't anyone's bug. It's a property of the data flow.

The implication is that closing the window requires a different data source: not "what does the advisory database say?" but "what is the public upstream activity actually doing?" That's a different observation problem with different tooling.

## What you can do without a new tool

If you don't run anything that watches upstream activity, you can still narrow the window operationally:

- **Pin to release versions, not ranges, for your most security-sensitive dependencies.** Then make the upgrade decision deliberate, when you cut the release, look at *what changed*, not just whether tests pass. This is the [tier-1 control approach systemshardening describes](https://www.systemshardening.com/articles/cross-cutting/supply-chain-risk-management/) for critical dependencies.
- **Subscribe to release feeds for your top-N dependencies.** Even reading release notes catches a fraction of the silent-patch and unreleased-fix cases.
- **Have one reviewer per team who reads the changelogs of dependencies in the security-sensitive blast radius.** This is unglamorous and works.

These don't close the window. They make it shorter.

## Why DepOversight thinks this is the right place to invest

The arithmetic is simple. Every day in this window is a day where:

- Active attacks are unflagged.
- Silent patches are accumulating in your graph.
- Auto-merge upgrade tooling can deliver a malicious release before any advisory exists.

CVE scanners do their job, they tell you about advisories. The question of whether that's *enough* depends on how much of your risk lives in the window before the advisory exists. For most teams shipping against an open-source dependency graph in 2026, it's a substantial fraction.

The next post in this series ("Silent patches") looks at the case where there's no CVE *ever*.
