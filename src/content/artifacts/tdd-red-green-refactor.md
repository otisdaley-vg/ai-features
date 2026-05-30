---
title: "TDD red-green-refactor loop"
type: skill
topic: testing
summary: >-
  An agent skill that enforces the red-green-refactor cycle — write a failing
  test first, make it pass with the smallest possible change, then refactor.
author: Otis Daley
dateAdded: 2026-05-30
installPath: ~/.claude/skills/tdd/SKILL.md
tags:
  - tdd
  - testing
  - workflow
---

Drop this skill into `~/.claude/skills/tdd/` and Claude Code will route to it
whenever the user says "use TDD", "red-green-refactor", or asks to build a
feature test-first.

The skill enforces three rules:

1. **Red first.** No production code is written until a failing test exists
   that names the behavior. The skill refuses to skip ahead.
2. **Green minimally.** The first pass implements the smallest change that
   turns the test green — hardcoded returns are fine if no other test
   demands more.
3. **Refactor only when green.** Cleanup happens only with all tests passing,
   and the test suite is re-run after every refactor step.

Most useful for feature work where the spec is well-understood but the
implementation isn't. Less useful for spike work where the spec itself is
what you're discovering — use the `prototype` skill instead.
