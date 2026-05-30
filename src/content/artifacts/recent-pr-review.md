---
title: "/recent-pr-review"
type: slash-command
topic: code-review
summary: >-
  Pulls the most recent open PR on the current branch's repo and walks Claude
  through a structured review — correctness, security surface, test gaps,
  rollback plan.
author: Otis Daley
dateAdded: 2026-05-30
commandName: recent-pr-review
tags:
  - pr
  - review
  - workflow
---

Save as `~/.claude/commands/recent-pr-review.md`:

```markdown
---
description: Review the most recent open PR on this repo
---

1. Run `gh pr list --state open --limit 1 --json number,title,headRefName`
   and capture the PR number.
2. Fetch the diff with `gh pr diff <number>` and the description with
   `gh pr view <number> --json body,title`.
3. Review in this order:
   - **Correctness**: does the code do what the description claims?
   - **Security surface**: any new input boundaries, auth changes, secrets?
   - **Test gaps**: which branches added by this PR are unexercised?
   - **Rollback**: if this lands and breaks prod, what's the revert path?
4. Output findings as inline-comment-ready bullets, grouped by file.
   No summary section — the PR description is the summary.
```

Invoke with `/recent-pr-review` from inside any repo's working tree. The
agent doesn't ask which PR — there is exactly one "most recent open" per
repo and that's almost always the one you mean.
