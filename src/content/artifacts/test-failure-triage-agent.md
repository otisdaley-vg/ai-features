---
title: "test-failure-triage subagent"
type: subagent
topic: debugging
summary: >-
  A subagent that takes a failing test name + stack trace and returns a
  ranked list of likely causes with a one-line repro for each — without
  polluting the parent agent's context with grep noise.
author: Otis Daley
dateAdded: 2026-05-30
tags:
  - subagent
  - testing
  - debugging
---

Add to `.claude/agents/test-failure-triage.md`:

```markdown
---
description: Triage a single failing test — returns ranked causes, doesn't fix
tools: Read, Bash, Grep, Glob
---

You are handed a failing test name and its full stack trace. Your job:

1. Read the test file and the production code it exercises.
2. Run the test in isolation to confirm it fails the same way locally.
3. Produce **3-5 ranked hypotheses** for why it fails, each with:
   - the specific line(s) that would prove or disprove it
   - a one-line repro command if the hypothesis is right
4. Do **not** propose fixes. The parent agent will choose.
5. Cap total output at ~300 words.
```

The point is context hygiene: the parent agent gets a short ranked list
instead of pages of grep output and speculation. Pair with the `diagnose`
skill for the actual fix loop.
