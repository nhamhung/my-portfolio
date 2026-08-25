# Integration Test Instructions

## Purpose

Verify that application orchestration, theme registries, shared portfolio data, theme-owned sections, routes, persistence, and the production bundle work together as one static site.

## Automated Integration Group

```bash
npx vitest run src/App.test.tsx src/templates/business/businessTemplate.test.tsx src/templates/artistic/artisticTemplate.test.tsx src/templates/journalPostPages.test.tsx
```

Expected verified result: 4 files and 52 tests pass.

| Integration boundary            | Covered behavior                                                                                                 |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| App and template registry       | Engineering default, Business switching, hidden Artistic option, direct Artistic rendering, and Neutral fallback |
| App and browser state           | Template, route, Journal, layout, and color-mode preservation                                                    |
| Business and shared content     | Original sections, readable detail formatting, aligned media, canonical labels, and certificate previews         |
| Artistic and shared content     | Original sections, canonical labels, and exclusion of former theme-only prose                                    |
| Theme Journal pages and routing | Existing post rendering, Markdown, metadata, missing-post state, and return navigation                           |

## Manual Scenario 1: Visible Theme Selector

1. Run `npm run dev` and open the printed local URL.
2. Open the Portfolio style menu in Engineering.
3. Confirm only Engineering and Business are offered.
4. Switch to Business and reopen the menu.
5. Confirm the same two options appear and no Artistic option is visible.

Expected result: switching is immediate, the active section remains stable, and the choice survives refresh.

## Manual Scenario 2: Preserved Artistic Implementation

1. Confirm `src/templates/artistic/` remains present.
2. Confirm the registry in `src/templates/index.ts` still includes Artistic.
3. Run the complete automated suite.

Expected result: Artistic remains directly renderable and persistence-compatible in automated coverage even though visitors cannot select it from the menu. Re-enabling it requires adding `artistic` to `selectablePortfolioTemplateIds` in `src/templates/options.ts`.

## Manual Scenario 3: Routes, Layout, and Color Mode

1. In Engineering, switch to multi-page mode and open Projects.
2. Change to Business.
3. Open a local Journal post and switch back to Engineering.
4. Toggle light or dark mode and switch theme once more.

Expected result: the current valid section or Journal route, layout mode, and color mode remain unchanged through each switch.

## Manual Scenario 4: Business Certificate Gallery

1. Open Business and navigate to Skills.
2. Find Certificate Gallery.
3. Confirm every certificate has a consistently sized PDF preview and readable metadata.
4. Open each source-PDF action in a new tab.

Expected result: previews align without clipping and every certificate remains accessible through its source link.

## Production Preview Smoke Test

```bash
npm run build
npm run preview
```

Open the printed URL and confirm the application shell and static assets load. The verified preview returned HTTP 200 for `/`.

## External Integrations

No backend, database, authentication provider, CMS, or API service exists in this project. Contract tests and service startup or cleanup are therefore not applicable.

Stop a local dev or preview server with `Ctrl+C` in the terminal where it is running.
