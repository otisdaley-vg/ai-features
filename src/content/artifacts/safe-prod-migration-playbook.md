---
title: "Safe production migration playbook"
type: playbook
topic: infra-and-devops
summary: >-
  The seven-step checklist we run before any schema migration touches a table
  with more than a million rows in production. Forces explicit thinking about
  locking, backfills, and rollback before the PR opens.
author: Otis Daley
dateAdded: 2026-05-30
tags:
  - migrations
  - postgres
  - production
---

Run through this checklist before opening the migration PR. If you can't
answer a step, the migration isn't ready.

1. **Lock profile.** Which lock does this statement take in Postgres? If
   it's `AccessExclusiveLock` against a hot table, you need a different
   approach (`ADD COLUMN ... DEFAULT NULL` then backfill, not
   `ADD COLUMN ... DEFAULT <value>`).
2. **Backfill plan.** How are existing rows populated? Batched job? Lazy
   on read? The migration PR should link the backfill PR explicitly.
3. **Read/write compatibility window.** Will old app code still work
   against the new schema? Will new app code still work against the old
   schema? Both must be true during deploy.
4. **Rollback path.** Is the migration reversible? If not, what's the
   recovery procedure if it lands broken?
5. **Replica lag.** Will the migration block replication? Estimate the
   wall-clock cost on the largest replica.
6. **Observability.** Which dashboard or query confirms the migration
   succeeded? Add it to the PR description.
7. **Comms.** Who needs to know? At minimum: oncall, the team owning the
   table, and anyone whose dashboards query the column directly.

If all seven are green, open the PR. If even one is yellow, write the
unknowns into the PR description and request review before merging.
