# Contributing to AI Features

AI Features is a public newsletter + library of AI engineering artifacts. This guide explains how to add to it.

## Editorial flow

There are two ways content lands in the repo:

1. **Pull requests** — used by the editorial group. PRs can add or revise issues, artifacts, site code, or docs. Every PR uses the [PR template](.github/PULL_REQUEST_TEMPLATE.md) and is reviewed by [@otisdaley-vg](https://github.com/otisdaley-vg) (see [CODEOWNERS](./CODEOWNERS)).
2. **Issue-based proposals** — used by the wider team and anyone outside the editorial group. Open a [Submit an artifact](.github/ISSUE_TEMPLATE/submit-artifact.yml) issue with the structured form. An editor will turn accepted proposals into a PR.

If you're not sure which path to use: open an issue. It's lower friction and easier to iterate on.

## Content policy

This is a **public site**. Before you submit anything, confirm:

- **No internal information** — no internal tools, internal URLs, internal codenames, internal roadmaps, or anything that wouldn't already be visible to someone outside the company.
- **No NDA-protected material** — nothing covered by a customer NDA, vendor NDA, or partner agreement.
- **No customer-specific details** — no customer names, customer data, customer architecture, or anything traceable to a specific account. Generalise the lesson so it's useful without the identifying details.

When in doubt, leave it out, or ask in the proposing issue before submitting.

## Artifact frontmatter recipes

Every artifact carries a typed frontmatter block. Copy the recipe for your type below and fill in the fields. The schema enforces these at build time.

### Common fields

All artifacts share these fields.

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Short, descriptive. |
| `type` | yes | One of: `prompt`, `skill`, `hook`, `slash-command`, `subagent`, `settings-snippet`, `playbook`. |
| `topic` | yes | One of nine: `code-review`, `testing`, `debugging`, `refactoring`, `docs-and-writing`, `infra-and-devops`, `data-and-analysis`, `meta-prompting`, `skills`. |
| `summary` | yes | One sentence — what it does and when to reach for it. |
| `author` | yes | Attribution. |
| `dateAdded` | yes | `YYYY-MM-DD`. |
| `tags` | no | Free-form, for search. |
| `dateUpdated` | no | `YYYY-MM-DD` of the most recent revision. |
| `deprecated` | no | `true` if superseded; pair with a `relatedArtifacts` pointer to the replacement. |
| `relatedArtifacts` | no | Array of slugs to cross-link. |

### `prompt`

```yaml
---
title: "<short title>"
type: prompt
topic: code-review        # one of the nine
summary: "<one sentence>"
author: "<your name>"
dateAdded: 2026-05-30
targetModel: "claude-opus-4-7"   # required for prompts
tags: ["optional", "free-form"]
---
```

### `skill`

```yaml
---
title: "<short title>"
type: skill
topic: skills
summary: "<one sentence>"
author: "<your name>"
dateAdded: 2026-05-30
installPath: ".claude/skills/<skill-name>"   # required for skills
tags: ["optional"]
---
```

### `hook`

```yaml
---
title: "<short title>"
type: hook
topic: infra-and-devops
summary: "<one sentence>"
author: "<your name>"
dateAdded: 2026-05-30
hookEvent: "PostToolUse"   # required for hooks (e.g. PreToolUse, PostToolUse, Stop)
tags: ["optional"]
---
```

### `slash-command`

```yaml
---
title: "<short title>"
type: slash-command
topic: meta-prompting
summary: "<one sentence>"
author: "<your name>"
dateAdded: 2026-05-30
commandName: "review"   # required — the slash command name without the leading "/"
tags: ["optional"]
---
```

### `subagent`

```yaml
---
title: "<short title>"
type: subagent
topic: code-review
summary: "<one sentence>"
author: "<your name>"
dateAdded: 2026-05-30
tags: ["optional"]
---
```

### `settings-snippet`

```yaml
---
title: "<short title>"
type: settings-snippet
topic: infra-and-devops
summary: "<one sentence>"
author: "<your name>"
dateAdded: 2026-05-30
settingsScope: "project"   # required — "user" or "project"
tags: ["optional"]
---
```

### `playbook`

```yaml
---
title: "<short title>"
type: playbook
topic: debugging
summary: "<one sentence>"
author: "<your name>"
dateAdded: 2026-05-30
tags: ["optional"]
---
```

## Issue authoring

Issues live in `src/content/issues/<issueNumber>.mdx`. The frontmatter shape is set by the issue content collection — see [`src/content/issues/1.mdx`](./src/content/issues/1.mdx) for the canonical example.

### Frontmatter

```yaml
---
issueNumber: 2
title: "<issue title>"
date: 2026-06-06
editors:
  - <name>
summary: >-
  <one-paragraph blurb that shows up in the issue index>
featuredArtifact:                # optional
  title: "<artifact title>"
  url: "<link>"
  description: "<one sentence>"
topicsCovered:                   # optional
  - <free-form tag>
---
```

### Body structure — the four canonical sections

When an issue centers on a single idea or artifact, use these four sections in order. Skip any that don't apply, but don't reorder them.

1. **The Idea** — what's the insight, framing, or pattern this issue is about?
2. **How To** — concrete steps, code, or prompts the reader can copy.
3. **Trade-offs / Pitfalls** — where this breaks, what it costs, when not to use it.
4. **Artifacts referenced** — links to the artifact entries in the library (or external sources).

A short tracer-bullet or update issue doesn't need all four — the seed issue uses freeform `## What's new` / `## Featured artifact` / `## Tip` / `## Heads-up` sections. The four canonical sections are the default when the issue has a single load-bearing idea.

## Local development

```sh
pnpm install
pnpm dev
```

Open http://localhost:4321/ai-features/ — the site lives under the `/ai-features` base path because it's hosted on GitHub Pages under a user subdomain.

Before opening a PR:

```sh
pnpm build
```

This catches frontmatter schema violations early.
