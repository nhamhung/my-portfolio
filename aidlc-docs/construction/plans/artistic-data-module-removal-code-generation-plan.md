# Code Generation Plan - Remove Artistic Data Module and Simplify README

> **Status: Approved and implemented on 2026-08-24; awaiting Code Generation review.** This is the single source of truth for the implementation sequence.

## Unit Context

- **Unit**: Artistic data-module cleanup and beginner README.
- **Workspace root**: `/Users/nhamhhung/nhamhung.github.io`.
- **Project type**: Brownfield React 19, TypeScript, and Vite static portfolio.
- **Application boundary**: Existing files under `src/`, root `README.md`, and existing tests only.
- **Documentation boundary**: AI-DLC plans, state, audit, and the implementation summary under `aidlc-docs/`.
- **Stories**: None. User Stories were deliberately skipped for this internal refactor and documentation-only experience change.
- **Requirement traceability**: YAT-REM-01 through YAT-REM-08 plus the unchanged YAT behavior and NFR regression boundaries.

## Dependencies and Interfaces

- Artistic Hero, About, Activities, and section visibility currently depend on `artisticContent` exported through `src/data/portfolio.ts`.
- App tests import the same object to derive expectations, which would hide accidental content changes; the updated tests must assert user-visible output independently.
- The `Portfolio` aggregate and shared type file expose an Artistic-only property and types that become unnecessary after the module is removed.
- The root README currently has 462 lines and explicitly lists and documents `src/data/artistic.ts`.
- No database, API, infrastructure, runtime dependency, route, storage key, or deployment interface changes.

## Generation Approach

Preserve the current Artistic text exactly while moving small presentation-specific constants into the Artistic components that render them. Keep shared career, education, awards, projects, gallery, journal, skills, and profile content in the existing shared data files. Export only the small activity list needed by Artistic visibility logic from the existing Activities component module. Then remove the obsolete aggregate/type surface and delete the standalone file.

Rewrite the README around the tasks a non-technical portfolio owner performs: install, preview, edit, choose a style, add media or writing, verify, and publish. Keep commands copyable and essential Windows/macOS/Linux guidance available, but remove repeated explanations and framework internals.

## Detailed Implementation Steps

### Step 1 - Establish the Content-Preservation Baseline

- [x] Capture the exact current Artistic introduction, interests, learning items, hobbies, activities, and goals from `src/data/artistic.ts`.
- [x] Update the Artistic App test expectations so they independently assert the preserved headline, introduction, every notebook item, and the two school/community activities.
- [x] Keep the current collage, project-media, no-fabricated-content, template switching, routing, and section-visibility assertions.
- [x] Map this step to YAT-REM-02, YAT-REM-04, YAT-REM-05, and YAT-REM-06.

### Step 2 - Move Artistic Copy to Its Existing Presentation Consumers

- [x] In `src/templates/artistic/ArtisticHero.tsx`, replace `artisticContent` usage with module-local introduction and interest constants containing the exact existing strings.
- [x] In `src/templates/artistic/ArtisticAbout.tsx`, define the four existing notebook groups locally with the exact existing items and preserve empty-group filtering.
- [x] In `src/templates/artistic/ArtisticActivities.tsx`, define and export the two existing school/community activities, merge them with shared `experience`, and preserve labels, ordering, periods, and descriptions.
- [x] In `src/templates/artistic/index.ts`, use the exported activity list as the default input for visibility while retaining injectable empty arrays for sparse-section tests.
- [x] Do not create a renamed Artistic-only data file.
- [x] Map this step to YAT-REM-02 through YAT-REM-05.

### Step 3 - Remove the Obsolete Shared Data and Type Surface

- [x] Remove the `artisticContent` import, `portfolio.artistic` property, and `artisticContent` export from `src/data/portfolio.ts`.
- [x] Remove `ArtisticContent`, the now-unneeded shared `ArtisticActivity` type, and the `artistic` property from `Portfolio` in `src/types/portfolio.ts`.
- [x] Update `src/App.test.tsx` to remove its `artisticContent` import and use independent visible-content expectations.
- [x] Confirm no Engineering, Neutral, or Business source imports or contracts change.
- [x] Map this step to YAT-REM-01, YAT-REM-05, and YAT-REM-06.

### Step 4 - Delete the Redundant Module and Check References

- [x] Delete `src/data/artistic.ts` only after all consumers compile against their updated boundaries.
- [x] Search application source and tests for `artisticContent`, `ArtisticContent`, `ArtisticActivity`, and `data/artistic` references.
- [x] Confirm there is no replacement file dedicated only to the removed data object.
- [x] Map this step to YAT-REM-01 and YAT-REM-03.

### Step 5 - Rewrite the README for Non-Technical Users

- [x] Replace the current 462-line README with a substantially shorter task-first guide, targeting no more than roughly 300 lines without dropping essential instructions.
- [x] Lead with a quick-start path: install Node LTS and Git, obtain the project, run `npm install`, run `npm run dev`, and open the printed local URL.
- [x] Explain common edits in plain language with a compact source map for profile, sections, education, experience, awards, projects, media, writing, skills, certificates, navigation, and initial template choice.
- [x] Explain the four visual styles without suggesting a separate Artistic content source.
- [x] Retain concise Windows, macOS, Linux/WSL/ChromeOS considerations, copyable verification commands, GitHub Pages publishing steps, and high-value troubleshooting.
- [x] Add the diagnosed SWC-native-binding recovery guidance using a recoverable `node_modules` backup and clean `npm ci` reinstall.
- [x] Remove the `src/data/artistic.ts` project-structure row, Artistic field table, empty-array instructions, and all statements that Artistic requires extra content duplication.
- [x] Keep `DEPLOYMENT.md` as the detailed publishing reference and avoid duplicating it.
- [x] Map this step to YAT-REM-07 and YAT-REM-08.

### Step 6 - Format and Run Focused Regression Checks

- [x] Format every changed source, test, README, and AI-DLC Markdown file with the repository's Prettier version, excluding the append-only audit's exact raw user input.
- [x] Run the Artistic App test and template-registry test first.
- [x] Confirm the preserved Artistic strings render, activity ordering remains stable, and sparse Activities/Awards visibility still behaves correctly.
- [x] Re-run repository searches to ensure root README, source, and tests contain no stale deleted-file reference.
- [x] Map this step to YAT-REM-01, YAT-REM-02, YAT-REM-04, YAT-REM-06, and YAT-REM-07.

### Step 7 - Run the Complete Quality Gate

- [x] Run the complete Vitest suite.
- [x] Run ESLint.
- [x] Run the TypeScript/Vite production build.
- [x] Run the changed-file Prettier check and `git diff --check`; record the unrelated full-repository historical Markdown baseline separately.
- [x] Verify the root README is materially shorter and all referenced paths and commands exist.
- [x] Record environmental and existing build warnings separately from application failures.
- [x] Map this step to YAT-REM-05 through YAT-REM-08.

### Step 8 - Record Implementation Evidence

- [x] Create or update `aidlc-docs/construction/artistic-data-module-removal/code/code-generation-summary.md` with modified/deleted files, content-preservation evidence, README outcome, and verification results.
- [x] Update this plan's checkboxes immediately as each step finishes.
- [x] Update the execution-plan implementation checkbox, `aidlc-state.md`, the AI-DLC index, approved requirement traceability, and append-only audit entries.
- [x] Verify no duplicate `_new`, `_modified`, or replacement application files were created.
- [x] Present the standardized Code Generation completion review gate before Build and Test.

## Expected File Operations

### Modify

- `src/templates/artistic/ArtisticHero.tsx`
- `src/templates/artistic/ArtisticAbout.tsx`
- `src/templates/artistic/ArtisticActivities.tsx`
- `src/templates/artistic/index.ts`
- `src/data/portfolio.ts`
- `src/types/portfolio.ts`
- `src/App.test.tsx`
- `src/test/data/portfolio.test.ts`
- `README.md`
- Existing AI-DLC state, index, requirements, execution plan, audit, and this plan

### Delete

- `src/data/artistic.ts`

### Create

- `aidlc-docs/construction/artistic-data-module-removal/code/code-generation-summary.md`

No new application source file, dependency, deployment artifact, or infrastructure resource will be created.

## Verification Commands

```bash
npx vitest run src/App.test.tsx src/templates/templateRegistry.test.ts
npm test
npm run lint
npm run build
npx prettier --check .
git diff --check
```

Repository searches will additionally verify the removed runtime and README references while allowing historical AI-DLC records to retain their audit context.

## Success Criteria

- All eight steps are completed in order and marked `[x]` in the same interaction as the work.
- The website displays the same Artistic copy and behavior without `src/data/artistic.ts`.
- Shared template behavior and quality checks remain green.
- The README is accurate, noticeably shorter, and understandable without React or TypeScript knowledge.
- The implementation summary provides complete requirement and verification evidence.

## Extension Compliance

| Extension              | Status   | Rationale                                                                                |
| ---------------------- | -------- | ---------------------------------------------------------------------------------------- |
| Security Baseline      | Disabled | Existing project decision; this refactor introduces no new security boundary             |
| Property-Based Testing | Disabled | Existing project decision; deterministic rendering and visibility tests cover the change |

## Content Validation

| Check                              | Result                                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------- |
| Mermaid and ASCII diagrams         | Not used                                                                                    |
| Markdown structure                 | Valid headings, lists, checkboxes, tables, and fenced commands                              |
| Paths and commands                 | Checked against the existing workspace and `package.json`                                   |
| Application/documentation boundary | Application edits remain in the workspace root; AI-DLC evidence remains under `aidlc-docs/` |
