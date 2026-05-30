---
title: "Auto-format on every Write/Edit with Prettier"
type: hook
topic: infra-and-devops
summary: >-
  A PostToolUse hook that runs Prettier against any file Claude Code writes
  or edits, so the next read sees the formatted version and stylistic churn
  never reaches your diff.
author: Otis Daley
dateAdded: 2026-05-30
hookEvent: PostToolUse
tags:
  - hooks
  - prettier
  - formatting
---

Add this to `.claude/settings.json`:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path' | xargs -I{} pnpm exec prettier --write --ignore-unknown {} 2>/dev/null || true"
          }
        ]
      }
    ]
  }
}
```

The `|| true` is deliberate — Prettier returning non-zero on an unsupported
file shouldn't fail the tool call. And `--ignore-unknown` keeps it silent on
the file types Prettier doesn't know about.

The agent's next Read of the file will pick up the formatted version, so it
stays in sync without manual nudging.
