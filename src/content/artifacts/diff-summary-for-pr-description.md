---
title: "Diff summary for PR description"
type: prompt
topic: code-review
summary: >-
  Turns a raw `git diff` into the Summary/Test-plan markdown a PR description
  expects — skips refactors, calls out behavior changes, surfaces risks.
author: Otis Daley
dateAdded: 2026-05-30
targetModel: claude-opus-4-7
tags:
  - pr
  - git
  - review
---

You will be given the output of `git diff origin/main...HEAD`. Produce a PR
description in this exact shape:

```
## Summary
- <bullet> (one per user-visible change, leading verb)

## Risks / things to double-check
- <bullet>

## Test plan
- [ ] <step>
```

Rules:

- Ignore pure refactors, formatting, and lockfile churn unless they change
  behavior.
- Group related file changes into one bullet — readers don't want a
  file-by-file translation of the diff.
- If a migration, env var, or feature flag is touched, surface it under
  **Risks** even if it looks routine.
- No emojis. No marketing language. If the diff is uninteresting, say so in one
  line and stop.
