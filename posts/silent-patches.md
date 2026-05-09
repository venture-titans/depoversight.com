---
title: 'Silent patches: the security fixes nobody tells you about'
date: 2026-05-05
excerpt: 'A non-trivial fraction of security-relevant fixes ship without an advisory, ever. Here is what that means for the dependency graph you have today, and the few signals that catch them.'
category: industry
tags: [silent-patches, disclosure, advisory-databases]
---

When you read about supply-chain security, the picture is usually a sequence: vulnerability discovered → patched → CVE assigned → advisory published → scanners catch up. That's the *happy path* for disclosure, and it accounts for a large share of vulnerabilities, but not all of them.

A meaningful fraction of security-relevant fixes ship without ever producing a CVE. The fix is in `main`, the fix is in a release, the fix is deployed by users who upgrade for unrelated reasons. No advisory is ever published. We call these *silent patches*.

This post is about what they are, why they happen, and what the absence of any CVE actually means for the dependency graph you ship today.

## What silent patches actually look like

A silent patch is a commit (or series of commits) that:

1. Fixes a security-relevant issue, one that, if disclosed in advisory form, would justify a CVE.
2. Lands in a release.
3. Is never accompanied by an advisory, a CVE, or a security note in the changelog.

In practice, the release notes for a silent patch read like one of these:

- "Minor refactor in `parsing.go`."
- "Fix edge case in `serveStatic`."
- "Improve handling of malformed input."
- "Internal cleanup."

If you read the diff, the change is unmistakably a hardening fix. If you read the release notes, you'd never know.

## How common is this?

Quantifying silent patches is methodologically hard, by definition, they're the cases that *don't* show up in databases, but several research efforts have tried.

Across major ecosystems (npm, PyPI, Go, Maven, RubyGems), the share of security-relevant fixes that ship without a CVE has been measured at **20–40%** in different studies. The number varies by ecosystem, by project size, and by year. In every measurement we know of, it is large enough to matter.

(Worth noting: silent patching is not always negligence. Some maintainers have reasonable arguments for it, small reach, low severity, embargoed coordination they don't want to spend time on, fear of researcher attention. The point of this post is not to assign blame; it's to describe what the data flow into your scanner does and doesn't include.)

## Why silent patches happen

Five common reasons, in rough order of frequency:

1. **The maintainer doesn't think the fix is "security-relevant enough."** A path-traversal in a feature used by 0.1% of users feels small to write up. The advisory process is friction.
2. **The CVE process is unfamiliar.** Many open-source maintainers are part-time. Requesting a CVE through a CNA, filling out CVSS scores, and writing the advisory text is an unrewarded, unfamiliar workflow.
3. **The fix is bundled with a refactor.** When a security fix happens during a larger code change, the security framing gets lost in the commit history.
4. **There's no clear reporter.** A maintainer notices a flaw while working on something else and patches it. There's no external researcher pushing for a CVE.
5. **The maintainer prefers not to draw attention.** Some maintainers (rightly or wrongly) feel that publishing an advisory invites adversarial scanning of older versions.

None of these are anomalies. They're the ordinary failure modes of a disclosure process that depends on volunteer effort.

## What this means for your dependency graph

If the published-CVE rate is 60–80% of security-relevant fixes, then **20–40% of fixes that exist in the upstream, fixes that, if exploited against your code, would matter, are not in any advisory database.** Your scanner is permanently silent on them.

Concretely:

- A version of your dependency in your `package-lock.json` may already be patched against an issue that nobody has named.
- A version *before* the silent patch may still be vulnerable, with no advisory to flag it.
- A *security-relevant downgrade*, someone reverting a silent patch, won't appear in any feed.

Your dependency-update tooling will happily move you between these states without producing a single security signal.

## What signals exist

Silent patches are *publicly observable*, just not publicly *labelled*. The signals available to a system that watches upstream activity:

**Commit-message language.** "Sanitize", "validate", "prevent", "no longer leaks", "reject malformed". Words that describe a security relevance, even when the surrounding framing avoids the security label.

**Diff surface area.** Code that touches parsing, deserialization, authentication, process spawn, redirect handling, or file paths is more likely to be security-relevant by base rate. A small diff in `auth/redirect.ts` deserves more attention than the same number of lines in a logging helper.

**Test naming.** Tests added alongside silent patches frequently describe the vulnerability they fix, even when the production-code commit message doesn't. `does_not_leak_session_token_on_redirect` is a far stronger signal than the commit titled "fix redirect helper".

**Issue activity.** Locked or redacted issues that close around the time of the patch. Maintainers communicating with each other in less public channels often leave a thin public trail, an issue that suddenly goes private, a closed PR with no description.

**Release-note delta.** A release that bumps a version "for cleanup" but contains a small set of focused changes in security-sensitive files.

A reviewer who knows what to look for catches a fair share of these without any tooling. A system that watches the same signals across thousands of dependencies catches more.

## Why "we'll just upgrade often" is not the answer

A natural response: "If we upgrade fast, we'll get the silent patches even if we don't know they exist." This is partially true, and it's the strategy most well-resourced teams default to.

It has limits:

- **Upgrades aren't free.** Major-version bumps break things; minor bumps occasionally do too. Aggressive upgrade policy creates its own incident risk.
- **Auto-merge is itself an attack vector.** If you auto-merge upgrades, you also auto-merge silent *malicious* changes if a registry-side compromise happens. This is the trade-off the [recent registry compromises](https://www.systemshardening.com/articles/kubernetes/kubernetes-supply-chain-incident-response/) exploited.
- **You don't know which dependencies *contain* silent patches.** Without a signal, you can't prioritise. Spreading attention thin across all dependencies means you give the same review weight to a high-risk auth library and a logging helper.

The pragmatic move is not "upgrade everything fast." It's "know which dependencies just had something security-relevant happen, and look at those carefully."

## Where DepOversight fits

DepOversight reads upstream activity and applies the signals listed above to surface candidates for the silent-patch category. The output is a review trigger, not a verdict, silent patches don't always affect you, and the detection rules will produce some false positives, especially on projects with idiosyncratic conventions.

What changes is that the silent patches you'd otherwise discover by accident, twelve months later in a postmortem, become things you can deliberately decide about now.

The next post in this series will look at trust degradation: when the package didn't change, but the people behind it did.
