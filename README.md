# AI Features

A public newsletter and library of AI engineering artifacts — prompts, skills, hooks, slash-commands, subagents, settings snippets, and playbooks — curated by [@otisdaley-vg](https://github.com/otisdaley-vg).

**Live site:** https://otisdaley-vg.github.io/ai-features/

## What this is

Two things live in one place:

- **Issues** — a weekly digest. Each issue is one MDX file in `src/content/issues/`, numbered in order. Read them as a sequence to follow the thinking over time.
- **Library** — a typed collection of artifacts you can copy and use. Each artifact carries frontmatter that pins its type, topic, target model (if relevant), install path (if relevant), and so on. Read it as a reference: dip in by topic when you need something.

## Who it's for

Engineers and AI practitioners who already use tools like Claude Code, Cursor, or the Anthropic API and want concrete artifacts to crib from. The tone assumes you've shipped something with an LLM in the loop.

## How to contribute

The full contributor guide is in [CONTRIBUTING.md](./CONTRIBUTING.md). The short version:

- **Editorial group** opens pull requests directly. See the [PR template](.github/PULL_REQUEST_TEMPLATE.md).
- **Everyone else** opens an issue via the [Submit an artifact](.github/ISSUE_TEMPLATE/submit-artifact.yml) form. An editor turns accepted proposals into PRs.

All paths are reviewed by [@otisdaley-vg](https://github.com/otisdaley-vg) (see [CODEOWNERS](./CODEOWNERS)).

## Content policy

This is a public site. Submissions must contain:

- **No internal information** (internal tools, URLs, codenames, roadmaps).
- **No NDA-protected material** (customer, vendor, or partner NDAs).
- **No customer-specific details** (names, data, architecture).

Generalise the lesson so it's useful without the identifying details. Full policy in [CONTRIBUTING.md](./CONTRIBUTING.md#content-policy).

## Local development

Built with [Astro 6](https://astro.build) and [Tailwind v4](https://tailwindcss.com). Requires Node ≥ 22.12.

```sh
pnpm install
pnpm dev
```

Open http://localhost:4321/ai-features/ — the site lives under the `/ai-features` base path because it's deployed to GitHub Pages under a user subdomain.

Other scripts:

| Command | Action |
| --- | --- |
| `pnpm build` | Production build to `./dist/`. |
| `pnpm preview` | Preview the production build locally. |
| `pnpm astro ...` | Run Astro CLI commands. |

## License

[MIT](./LICENSE) — © 2026 Otis Daley.
