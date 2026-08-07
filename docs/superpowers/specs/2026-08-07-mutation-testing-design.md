# Design: Package Mutation Testing (Stryker + Turbo)

**Date:** 2026-08-07  
**Status:** Approved for implementation planning  
**Scope:** `packages/contracts`, `packages/frontend-core` only  

## Problem

We need a reliable signal for how effective the package Vitest suites are at detecting real bugs—including tests that may be LLM-generated. Line coverage alone is insufficient: a suite can cover lines while missing meaningful behavioral faults.

## Goals

1. Measure **mutation score** for package source with an on-demand script.
2. Integrate with the existing **npm workspaces + Turbo** task graph.
3. Produce **human-readable and machine-readable reports** for comparing suite quality over time.
4. Keep measurement **out of** `npm run validate` and CI gates for this phase.

## Non-Goals

- Mutating `apps/web` or Playwright e2e harnesses
- Failing CI or `validate` on a score threshold
- Committing HTML/JSON report artifacts
- Rewriting weak tests or killing survivors in the same change (measurement only)

## Approach

Use **StrykerJS** with `@stryker-mutator/vitest-runner`, orchestrated per package by Turbo.

### Why Stryker

- Mature JS/TS mutation tooling with a first-party Vitest runner
- Clear killed / survived / timeout accounting
- Per-file drill-down suitable for judging LLM-generated tests

## Architecture

```text
npm run test:mutation
  -> turbo run test:mutation --filter=./packages/*
       -> packages/contracts: stryker run
       -> packages/frontend-core: stryker run
```

### Ownership

| Piece | Location | Owner |
| --- | --- | --- |
| Orchestration script | root `package.json` → `test:mutation` | repo root |
| Turbo task | `turbo.json` → `test:mutation` | repo root |
| Mutator deps | root `devDependencies` | repo root (hoisted) |
| Stryker config | `packages/<pkg>/stryker.config.mjs` | each package |
| Package script | `packages/<pkg>` → `"test:mutation": "stryker run"` | each package |
| Reports | `packages/<pkg>/reports/mutation/` | local only, gitignored |

### Turbo task shape

```json
"test:mutation": {
  "dependsOn": ["build"],
  "cache": false,
  "outputs": []
}
```

- `dependsOn: ["build"]` matches the existing `test` family.
- `cache: false` avoids treating mutation runs as stable Turbo cache hits.
- Reports are intentionally **not** Turbo outputs; they are local inspection artifacts.

### Root script

```json
"test:mutation": "turbo run test:mutation --filter=./packages/*"
```

Do **not** wire `test:mutation` into `validate`.

## Mutate / ignore rules

Shared policy for both packages:

- **Mutate:** `src/**/*.ts`
- **Ignore:**
  - `src/**/*.d.ts`
  - `src/index.ts` (re-export surface; low signal)
  - all `*.json` (especially `packages/contracts/src/resume.json` content fixtures)
  - tests and config files (Stryker default: only listed `mutate` globs)

### Package notes

- **contracts:** focus mutants on `resume.ts` validation/parser logic.
- **frontend-core:** focus mutants on `themeManager.ts`; keep existing `vitest.config.ts` + jsdom setup.

## Stryker config (per package)

Conceptual defaults (exact keys follow current Stryker docs at implement time):

- `testRunner: 'vitest'`
- plugin: `@stryker-mutator/vitest-runner`
- reporters: `clear-text`, `html`, `json`
- HTML + JSON under `reports/mutation/`
- `thresholds.break: null` (informational scores only; never fail the process on score)
- optional informational bands, e.g. `high: 80`, `low: 60`
- prefer ignoring pure static string mutants when the runner supports it (`ignoreStatic: true`) so scores reflect behavioral faults

If contracts needs an explicit Vitest config for stable discovery, add a minimal `vitest.config.ts` in that package rather than special-casing from the root.

## Dependencies

Add to root `devDependencies` (workspace hoisting):

- `@stryker-mutator/core`
- `@stryker-mutator/vitest-runner`

Package `package.json` files only gain the `test:mutation` script (no duplicate dep pins unless hoisting proves insufficient).

## Git hygiene

Add ignore entries:

- `reports/mutation/`
- `.stryker-tmp/`

## Documentation updates (implementation phase)

1. Short “Mutation testing” subsection in `docs/quality_standards.md` (command, scope, report path, not part of `validate`).
2. Optional one-line capability note in `docs/quality.md` that package mutation score is measurable (no grade change until a baseline is recorded).
3. No architecture rewrite required beyond script/task mention if the quality docs already cover how to run it.

## Success criteria

1. From repo root, `npm run test:mutation` runs both package tasks through Turbo.
2. Each package prints a mutation score summary (killed / survived / timeout / score).
3. Each package writes HTML + JSON under `packages/<pkg>/reports/mutation/`.
4. Survived mutants are inspectable in the HTML report for suite-weakness analysis.
5. `npm run validate` behavior is unchanged.
6. Docs validation and agents lint still pass after doc/link updates.

## Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Slow first run on parser-heavy contracts | On-demand only; not in `validate` |
| Vitest 4 + Stryker runner friction | Keep fixes in package `stryker.config.mjs` / minimal vitest config |
| Noisy static/string mutants | `ignoreStatic` + tight `mutate` globs |
| Accidental CI gate | `thresholds.break: null`; no validate wiring |

## Follow-ups (out of this design)

- Record a baseline score in `docs/quality.md` after the first successful run.
- Optionally expand to `apps/web` unit tests later.
- Optionally add a non-blocking CI report job later.
- Use survived mutants to improve LLM or hand-written tests in separate changes.

## Approval

- Approach A (Stryker + Vitest runner) approved.
- Turbo-integrated packages-only orchestration approved.
- Deliverable: script + config + local reports (not CI gate) approved.
