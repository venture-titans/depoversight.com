---
title: 'Reading commit messages for security-relevant signals'
date: 2026-05-03
excerpt: 'A practical taxonomy of the language patterns, diff shapes, and test names that reveal a security-relevant fix in commits, long before any advisory exists.'
category: fundamentals
tags: [commit-analysis, detection, fundamentals]
---

A surprising amount of pre-CVE detection comes down to *reading the commits*. When a fix lands in `main`, the patch itself, the message that describes it, and the tests that ship with it leave a public trail. The trail is structured enough to be machine-parseable but conversational enough that the language varies project-to-project.

This post is a working taxonomy. It's the same set of signals an experienced reviewer scans for when they look at a dependency's recent commits. It's also (broadly) what a detection engine like DepOversight applies at scale.

## Why commits, not advisories

The argument for watching commits is covered in [the post on the hidden window between a fix and a public CVE](/blog/hidden-window-between-fix-and-cve/). The short version: the fix typically lands in `main` weeks or months before any advisory mentions it, and a non-trivial fraction of fixes [never get an advisory at all](/blog/silent-patches/).

Reading commits is the earliest data source in the disclosure pipeline. Everything downstream, the release note, the advisory, the CVE entry, the scanner result, is derived from what you can see at the commit level.

## Three layers of signal

For any commit that *might* be security-relevant, three independent signal layers exist. They're independent in the sense that each can be present without the others, and a strong signal usually combines two or three.

### Layer 1, commit-message language

Maintainers describe what they're doing in the message. Even when they don't use the word "security", their language gives the work away. The high-precision verbs are:

- **Prevent** / **avoid**, *prevent prototype pollution*, *avoid path traversal*. Active language about what the fix stops happening.
- **Sanitize** / **validate** / **escape** / **normalize**, described inputs are now being treated defensively. This vocabulary is rarely used outside security or correctness contexts.
- **Reject**, *reject malformed input*, *reject untrusted redirects*. The fix establishes a denial.
- **No longer** / **stop**, *no longer leaks session token*, *stop following arbitrary redirects*. Past behaviour is identified as wrong.
- **Strict** / **strictly**, *strict CSRF check*, *strictly typed input*. Tightening previously-loose handling.

The lower-precision (but still meaningful) verbs:

- **Fix** plus a noun in a security-sensitive area, *fix path handling*, *fix auth check*.
- **Harden**, sometimes used loosely, sometimes precisely.
- **Guard** / **bounds-check**, defensive programming language.

False positives exist. "Sanitize input" can mean *cleanly format a logging field*. "Validate" can mean *reject empty strings in a CLI argument*. The language is a *signal*, not a verdict.

### Layer 2, diff surface area

Where in the codebase the change lives matters as much as what the message says. The base rate of security relevance is much higher in some files than others.

High-base-rate file paths:

- **Authentication and session handling.** Anything under `auth/`, `session/`, `login/`, `oauth/`. A 5-line change here is more interesting than a 500-line refactor in a CSS helper.
- **Parsers and deserializers.** JSON, XML, YAML, protobuf, MIME, multipart. Historic vulnerability concentration; small bugs become RCEs.
- **Path-handling code.** `path/`, `fs/`, anything that constructs filesystem paths from user input.
- **Process spawning and shell execution.** `exec.go`, `child_process`, `subprocess`, `shell`.
- **Network ingress.** Request parsing, header handling, redirect logic, URL handling.
- **Cryptographic primitives.** `crypto/`, `tls/`, hashing or signature verification code.

A diff that touches these areas, even with a benign-looking commit message, deserves more attention by base rate.

### Layer 3, test names and assertions

Tests are often the most explicit security framing in the entire patch. A maintainer who avoids the word "security" in the production-code commit message will sometimes name the test plainly:

- `test_does_not_leak_session_token_on_redirect`
- `test_rejects_path_traversal_in_serve_static`
- `test_avoids_prototype_pollution_via_deepMerge`
- `test_normalizes_unicode_homoglyphs_in_username`

When the test name is more explicit than the production-code commit, that's a *very* strong signal. It usually means the maintainer intentionally framed the security relevance in a place that won't appear in the changelog.

## Combining layers

A single layer is rarely sufficient on its own. The strongest signals come from two or three layers reinforcing each other:

| Layer 1 (message) | Layer 2 (path) | Layer 3 (tests) | Verdict |
|-------------------|----------------|-----------------|---------|
| "Refactor JSON helper" | `parsing/json.go` | None | Low, base-rate concern only |
| "Fix edge case in deepMerge" | `lib/deepMerge.js` | None | Medium, name suggests prototype pollution territory |
| "Refactor JSON helper" | `parsing/json.go` | `test_rejects_unbalanced_braces` | Medium-high, test reveals defensive intent |
| "Prevent path traversal" | `static/serveStatic.go` | `test_rejects_dotdot` | High, all three layers agree |
| "Internal cleanup" | `auth/session.go` | `test_does_not_leak_session_token` | High, test reveals what the message hides |

The two-of-three threshold is a reasonable starting point for review prioritisation.

## What this taxonomy is not

This is *not* a list of patterns that prove a vulnerability exists. Many commits that match these signals are precautionary hardening, defensive programming, or code that *prevents future* vulnerabilities rather than fixing current ones. A signal is a review trigger.

It's also not exhaustive. New patterns emerge as ecosystems evolve. A detection system that hard-codes today's vocabulary will miss tomorrow's idioms; the patterns that worked in 2018 are different from the ones that work in 2026.

And it's project-specific. Some projects use security framing in every related commit; others avoid it entirely as a policy. Calibrating per-project, knowing the maintainers' usual vocabulary, produces fewer false positives than running the same rules across everything.

## How DepOversight uses these signals

DepOversight runs detection rules across all three layers continuously over the dependency graph you declare. Output is review triggers tied to the source artifact (the PR, the commit, the release), with the signal tags that matched. The same taxonomy that works manually scales to thousands of dependencies, but only as a prioritisation aid, not a verdict.

The next post in the Fundamentals series looks at OpenSSF Scorecard: a different angle on the same question, *what's the risk profile of a project, regardless of any specific commit?*
