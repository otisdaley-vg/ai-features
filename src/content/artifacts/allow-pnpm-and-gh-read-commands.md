---
title: "Allowlist pnpm and gh read-only commands"
type: settings-snippet
topic: infra-and-devops
summary: >-
  Project-scoped `.claude/settings.json` permissions that pre-approve the
  read-only pnpm and gh calls Claude Code makes constantly — cuts permission
  prompts to near zero on a typical Node project.
author: Otis Daley
dateAdded: 2026-05-30
settingsScope: project
deprecated: true
tags:
  - permissions
  - pnpm
  - gh
---

Drop this into `.claude/settings.json` at the project root. It pre-approves
the read-only commands you'd otherwise click through dozens of times per
session.

```json
{
  "permissions": {
    "allow": [
      "Bash(pnpm install)",
      "Bash(pnpm build)",
      "Bash(pnpm test:*)",
      "Bash(pnpm lint)",
      "Bash(pnpm typecheck)",
      "Bash(gh pr view:*)",
      "Bash(gh pr list:*)",
      "Bash(gh issue view:*)",
      "Bash(gh run view:*)"
    ]
  }
}
```

Keep destructive operations (`pnpm publish`, `gh pr merge`, `gh release create`)
**out** of the allowlist — those should always prompt. The point isn't to
disable the gate, it's to stop training yourself to click "yes" reflexively.
