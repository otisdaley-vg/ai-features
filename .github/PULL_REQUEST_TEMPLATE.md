<!--
Thanks for contributing to AI Features! Fill in the sections below so a
reviewer can land your change quickly. Delete sections that don't apply.
-->

## Summary

<!-- One or two sentences: what changes and why. -->

## Type of change

- [ ] New **issue** (a weekly digest entry under `src/content/issues/`)
- [ ] New **artifact** (one of: prompt / skill / hook / slash-command / subagent / settings-snippet / playbook)
- [ ] **Site code** (Astro components, routes, styles, config)
- [ ] **Docs** (README, CONTRIBUTING, templates, ADRs)

## Checklist

- [ ] Title is descriptive and uses lowercase prefix (`feat:`, `fix:`, `docs:`, `chore:`)
- [ ] Summary above is filled in
- [ ] `pnpm build` passes locally
- [ ] No internal, NDA-protected, or customer-specific content (see [CONTRIBUTING.md](../CONTRIBUTING.md#content-policy))

### If this PR adds or edits an **artifact**

- [ ] Required frontmatter fields are present: `title`, `type`, `topic`, `summary`, `author`, `dateAdded`
- [ ] Type-specific required fields are present (see CONTRIBUTING.md for the recipe):
  - `prompt` → `targetModel`
  - `skill` → `installPath`
  - `settings-snippet` → `settingsScope` (`user` or `project`)
  - `hook` → `hookEvent`
  - `slash-command` → `commandName`
- [ ] `topic` is one of the controlled enum values:
  `code-review` · `testing` · `debugging` · `refactoring` · `docs-and-writing` · `infra-and-devops` · `data-and-analysis` · `meta-prompting` · `skills`

### If this PR adds or edits an **issue**

- [ ] Frontmatter includes `issueNumber`, `title`, `date`, `editors`, `summary`
- [ ] Body uses the four canonical sections where applicable: **The Idea**, **How To**, **Trade-offs / Pitfalls**, **Artifacts referenced**

## Related issues

<!-- e.g. Closes #42 -->
