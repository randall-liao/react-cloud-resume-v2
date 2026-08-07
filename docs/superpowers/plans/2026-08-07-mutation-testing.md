# Package Mutation Testing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add on-demand Stryker mutation testing for `packages/contracts` and `packages/frontend-core`, orchestrated through Turbo from the repo root.

**Architecture:** Each package owns a `stryker.config.mjs` and a `test:mutation` npm script. Root `devDependencies` provide `@stryker-mutator/core` and `@stryker-mutator/vitest-runner`. Root `npm run test:mutation` runs `turbo run test:mutation --filter=./packages/*`. Reports write under each package’s `reports/mutation/` (gitignored). Scores are informational only (`thresholds.break` unset/null); not wired into `validate`.

**Tech Stack:** StrykerJS, `@stryker-mutator/vitest-runner`, Vitest 4, npm workspaces, Turbo 2

**Spec:** [docs/superpowers/specs/2026-08-07-mutation-testing-design.md](../specs/2026-08-07-mutation-testing-design.md)

## Global Constraints

- Packages only: `packages/contracts`, `packages/frontend-core` (not `apps/web`, not Playwright)
- Do not add `test:mutation` to `npm run validate`
- `thresholds.break` must not fail the process (omit `break` or set `null`)
- Mutate `src/**/*.ts` only; exclude `src/index.ts`, `*.d.ts`, and all JSON fixtures
- Reports under `packages/*/reports/mutation/`; never commit report HTML/JSON or `.stryker-tmp/`
- All agent communications, replies, logs, code comments, and documentation must be strictly in English
- Before wrapping up, run `npm run validate`
- Do not automatically create Pull Requests

## File map

| File | Responsibility |
| --- | --- |
| `package.json` (root) | Add mutator deps + `test:mutation` script |
| `turbo.json` | Register `test:mutation` task (`dependsOn: ["build"]`, `cache: false`) |
| `.gitignore` | Ignore `reports/mutation/`, `.stryker-tmp/` |
| `packages/contracts/package.json` | Add `test:mutation` script |
| `packages/contracts/vitest.config.ts` | Explicit Vitest discovery for Stryker (new) |
| `packages/contracts/stryker.config.mjs` | Package mutator config |
| `packages/frontend-core/package.json` | Add `test:mutation` script |
| `packages/frontend-core/stryker.config.mjs` | Package mutator config (reuse existing Vitest config) |
| `docs/quality_standards.md` | Document how to run mutation testing |
| `docs/quality.md` | Note that package mutation score is measurable |
| `AGENTS.md` | Link this plan (orphan rule) |

---

### Task 1: Root Turbo wiring and mutator dependencies

**Files:**
- Modify: `package.json`
- Modify: `turbo.json`
- Modify: `.gitignore`

**Interfaces:**
- Consumes: existing root workspaces + Turbo `build` task
- Produces: root script `test:mutation`; Turbo task name `test:mutation`; hoisted bins `stryker`

- [ ] **Step 1: Install Stryker packages at the repo root**

```bash
npm install --save-dev @stryker-mutator/core @stryker-mutator/vitest-runner
```

Expected: both packages appear under root `devDependencies` in `package.json`; `npx stryker --version` prints a version.

- [ ] **Step 2: Add the root orchestration script**

In root `package.json` `scripts`, add:

```json
"test:mutation": "turbo run test:mutation --filter=./packages/*"
```

Do **not** change the existing `validate` script.

- [ ] **Step 3: Register the Turbo task**

In `turbo.json` `tasks`, add:

```json
"test:mutation": {
  "dependsOn": ["build"],
  "cache": false,
  "outputs": []
}
```

Keep existing `build`, `test`, `lint`, `plan`, `apply`, and `fmt` tasks unchanged.

- [ ] **Step 4: Ignore mutation artifacts**

Append to `.gitignore`:

```gitignore
# Stryker mutation testing
reports/mutation/
.stryker-tmp/
```

- [ ] **Step 5: Sanity-check root wiring (expect package script missing)**

```bash
npm run test:mutation
```

Expected: Turbo starts, then fails because package workspaces do not yet define `test:mutation` (or report no matching tasks with that script). This confirms the root script and Turbo task name are wired before package configs exist.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json turbo.json .gitignore
git commit -m "$(cat <<'EOF'
chore: wire Turbo mutation testing dependencies

Add Stryker packages, root test:mutation script, Turbo task, and
gitignore entries for mutation reports.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
EOF
)"
```

---

### Task 2: Contracts package mutation setup

**Files:**
- Create: `packages/contracts/vitest.config.ts`
- Create: `packages/contracts/stryker.config.mjs`
- Modify: `packages/contracts/package.json`

**Interfaces:**
- Consumes: root-hoisted `stryker` + `@stryker-mutator/vitest-runner`; existing `tests/resume.test.ts`
- Produces: workspace script `@cloud-resume-v2/contracts#test:mutation`; reports at `packages/contracts/reports/mutation/`

- [ ] **Step 1: Confirm baseline unit tests pass**

```bash
npm run test --workspace @cloud-resume-v2/contracts
```

Expected: Vitest passes (all green).

- [ ] **Step 2: Add an explicit Vitest config for stable Stryker discovery**

Create `packages/contracts/vitest.config.ts`:

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
  },
});
```

- [ ] **Step 3: Add Stryker config**

Create `packages/contracts/stryker.config.mjs`:

```js
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
export default {
  packageManager: 'npm',
  testRunner: 'vitest',
  plugins: ['@stryker-mutator/vitest-runner'],
  vitest: {
    configFile: 'vitest.config.ts',
    related: true,
  },
  mutate: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/index.ts',
  ],
  ignoreStatic: true,
  reporters: ['clear-text', 'progress', 'html', 'json'],
  htmlReporter: {
    fileName: 'reports/mutation/mutation.html',
  },
  jsonReporter: {
    fileName: 'reports/mutation/mutation.json',
  },
  thresholds: {
    high: 80,
    low: 60,
    break: null,
  },
  temporaryDirName: '.stryker-tmp',
};
```

If the installed Stryker version rejects `htmlReporter.fileName` / `jsonReporter.fileName` shape, adjust to the version’s documented keys while keeping output under `reports/mutation/`.

- [ ] **Step 4: Add the package script**

In `packages/contracts/package.json` `scripts`, add:

```json
"test:mutation": "stryker run"
```

Leave existing `build` and `test` scripts unchanged.

- [ ] **Step 5: Run mutation testing for contracts only**

```bash
npm run test:mutation --workspace @cloud-resume-v2/contracts
```

Expected:
- Dry run succeeds (baseline tests pass under Stryker)
- Mutants are generated for `src/resume.ts` (not `resume.json`, not `index.ts`)
- Console prints a mutation score summary (killed / survived / timeout / score)
- Process exits 0 even if score is below 60/80 (because `break: null`)
- Files exist:
  - `packages/contracts/reports/mutation/mutation.html`
  - `packages/contracts/reports/mutation/mutation.json`

If the run fails due to Vitest/Stryker friction, fix only package-local config (this file or `vitest.config.ts`), not application source.

- [ ] **Step 6: Confirm reports are untracked**

```bash
git status --short packages/contracts
```

Expected: no `reports/` or `.stryker-tmp/` paths staged/untracked as files to commit (ignored). Config + package.json + vitest config should show as modified/added source.

- [ ] **Step 7: Commit**

```bash
git add packages/contracts/package.json packages/contracts/vitest.config.ts packages/contracts/stryker.config.mjs
git commit -m "$(cat <<'EOF'
feat(contracts): add Stryker mutation testing

Wire package-local Stryker + Vitest config so mutation score can be
measured for the resume contract parser.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
EOF
)"
```

---

### Task 3: Frontend-core package mutation setup

**Files:**
- Create: `packages/frontend-core/stryker.config.mjs`
- Modify: `packages/frontend-core/package.json`

**Interfaces:**
- Consumes: root-hoisted Stryker; existing `vitest.config.ts` (`environment: 'jsdom'`, `tests/setup.ts`)
- Produces: workspace script `@cloud-resume-v2/frontend-core#test:mutation`; reports at `packages/frontend-core/reports/mutation/`

- [ ] **Step 1: Confirm baseline unit tests pass**

```bash
npm run test --workspace @cloud-resume-v2/frontend-core
```

Expected: Vitest passes.

- [ ] **Step 2: Add Stryker config**

Create `packages/frontend-core/stryker.config.mjs`:

```js
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
export default {
  packageManager: 'npm',
  testRunner: 'vitest',
  plugins: ['@stryker-mutator/vitest-runner'],
  vitest: {
    configFile: 'vitest.config.ts',
    related: true,
  },
  mutate: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/index.ts',
  ],
  ignoreStatic: true,
  reporters: ['clear-text', 'progress', 'html', 'json'],
  htmlReporter: {
    fileName: 'reports/mutation/mutation.html',
  },
  jsonReporter: {
    fileName: 'reports/mutation/mutation.json',
  },
  thresholds: {
    high: 80,
    low: 60,
    break: null,
  },
  temporaryDirName: '.stryker-tmp',
};
```

Same reporter-key fallback rule as Task 2 if the installed Stryker version differs.

- [ ] **Step 3: Add the package script**

In `packages/frontend-core/package.json` `scripts`, add:

```json
"test:mutation": "stryker run"
```

- [ ] **Step 4: Run mutation testing for frontend-core only**

```bash
npm run test:mutation --workspace @cloud-resume-v2/frontend-core
```

Expected:
- Dry run succeeds with jsdom theme tests
- Mutants target `src/themeManager.ts` (not `src/index.ts`)
- Console prints mutation score summary
- Exit code 0 with `break: null`
- Reports written:
  - `packages/frontend-core/reports/mutation/mutation.html`
  - `packages/frontend-core/reports/mutation/mutation.json`

- [ ] **Step 5: Run the full Turbo orchestration from root**

```bash
npm run test:mutation
```

Expected:
- Turbo runs `test:mutation` for both packages (after `build` deps)
- Both package scores print
- Overall command exits 0
- Both packages have report files under `reports/mutation/`

- [ ] **Step 6: Commit**

```bash
git add packages/frontend-core/package.json packages/frontend-core/stryker.config.mjs
git commit -m "$(cat <<'EOF'
feat(frontend-core): add Stryker mutation testing

Enable package-local mutation score measurement for themeManager via
Turbo-orchestrated test:mutation.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
EOF
)"
```

---

### Task 4: Documentation and final validation

**Files:**
- Modify: `docs/quality_standards.md`
- Modify: `docs/quality.md`
- Modify: `AGENTS.md`

**Interfaces:**
- Consumes: working `npm run test:mutation` from Tasks 1–3
- Produces: documented operator path; plan/spec remain linked for orphan rule

- [ ] **Step 1: Document the command in quality standards**

In `docs/quality_standards.md`, inside section `## 6. Current Validation Gates`, after the gates table, add a subsection:

```markdown
### Mutation testing (on-demand, packages only)

Mutation score measures how effectively package unit tests detect behavioral faults. It is **not** part of `npm run validate` or CI.

| Command | Purpose |
| --- | --- |
| `npm run test:mutation` | Run Stryker via Turbo for `packages/contracts` and `packages/frontend-core` |

- Scope: `src/**/*.ts` in those packages (excludes `src/index.ts` and JSON fixtures)
- Reports (gitignored): `packages/<pkg>/reports/mutation/mutation.html` and `mutation.json`
- Thresholds are informational only; a low score does not fail the script
- Use survived mutants to judge suite strength (including LLM-generated tests)
```

- [ ] **Step 2: Note measurability in the quality index**

In `docs/quality.md`, under both `packages/contracts/` and `packages/frontend-core/` **Known Debt** (or a one-line Notes row if cleaner), add a capability note without changing grades:

For contracts Known Debt (replace `None` if still present):

```markdown
- Mutation score is measurable via `npm run test:mutation` (on-demand; no baseline recorded in this index yet)
```

For frontend-core Known Debt (replace `None` if still present):

```markdown
- Mutation score is measurable via `npm run test:mutation` (on-demand; no baseline recorded in this index yet)
```

Do **not** change domain grades in this task.

- [ ] **Step 3: Link the plan from AGENTS.md (orphan rule)**

In `AGENTS.md` under `## Planning and External files Reference`, add:

```markdown
- [docs/superpowers/plans/2026-08-07-mutation-testing.md](docs/superpowers/plans/2026-08-07-mutation-testing.md)
```

Keep the existing design-spec link.

- [ ] **Step 4: Validate docs and agents lint**

```bash
npm run docs:validate && python3 scripts/lint_agents.py
```

Expected: docs validation passes. Agents lint passes for new links. If a pre-existing orphan (for example `linkedin_post.md`) fails the lint, do not "fix" it unless it was introduced by this work; note it and ensure **new** markdown is linked.

- [ ] **Step 5: Confirm validate is unchanged in composition**

```bash
node -e "const p=require('./package.json'); if(p.scripts.validate.includes('test:mutation')) { console.error('validate must not include test:mutation'); process.exit(1);} console.log('validate ok:', p.scripts.validate);"
```

Expected: prints `validate ok:` and the existing validate chain without `test:mutation`.

- [ ] **Step 6: Run full repository validate**

```bash
npm run validate
```

Expected: full stack passes (docs, agents lint subject to pre-existing orphans policy above, lint, build, test, dist checks).

- [ ] **Step 7: Commit docs**

```bash
git add docs/quality_standards.md docs/quality.md AGENTS.md docs/superpowers/plans/2026-08-07-mutation-testing.md
git commit -m "$(cat <<'EOF'
docs: document package mutation testing workflow

Describe on-demand Stryker/Turbo mutation runs and link the
implementation plan for operator discovery.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
EOF
)"
```

---

## Spec coverage checklist

| Spec requirement | Task |
| --- | --- |
| Stryker + vitest-runner | Task 1 deps; Tasks 2–3 configs |
| Per-package config + script | Tasks 2–3 |
| Root `test:mutation` via Turbo `--filter=./packages/*` | Task 1 + Task 3 Step 5 |
| `turbo` task `dependsOn: ["build"]`, `cache: false` | Task 1 |
| Mutate `src/**/*.ts`, exclude index/json | Tasks 2–3 configs |
| HTML + JSON reports under `reports/mutation/` | Tasks 2–3 |
| `break: null` / non-gating | Tasks 2–3 configs; Task 4 Step 5 |
| gitignore reports + `.stryker-tmp` | Task 1 |
| quality_standards + quality.md notes | Task 4 |
| Not in validate | Task 1 Step 2; Task 4 Steps 5–6 |
| Final `npm run validate` | Task 4 Step 6 |

## Out of scope (do not implement in this plan)

- Baseline score tables or grade changes after first run
- `apps/web` mutation
- CI job or threshold gate
- Rewriting tests to kill survivors
