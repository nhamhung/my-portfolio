# Integration Test Instructions

## Purpose

Validate that the completed units work together as a single static portfolio template.

## Automated Integration Coverage

The lightweight test suite covers local integration between:

| Integration                                       | Covered By                                                                                          |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| App shell and provider context                    | `src/App.test.tsx`                                                                                  |
| Runtime template state, registry, and persistence | `src/App.test.tsx`, `src/templates/templateRegistry.test.ts`, `src/utils/templateSelection.test.ts` |
| App sections and navigation config                | `src/test/data/navigation.test.ts`                                                                  |
| Portfolio aggregate and editable data modules     | `src/test/data/portfolio.test.ts`                                                                   |
| Layout preference and hash routes                 | `src/App.test.tsx`, `src/hooks/usePortfolioLayout.test.ts`                                          |
| Test command and student documentation            | README verification command list plus `package.json` script                                         |

Run:

```bash
npm run test
```

## Manual Integration Checks

### Scenario 1: Local Development Server

Steps:

1. Start the dev server.

```bash
npm run dev
```

2. Open the printed local URL.
3. Confirm the hero, navigation, sections, gallery, videos, skills, and contact area render.
4. Click several navigation items and confirm they scroll to the expected sections.
5. Open **Portfolio style** and switch through Engineering, Neutral, Business, and Artistic.
6. Confirm the current section remains selected after each switch.

Expected result:

- The app renders without console-breaking errors.
- Navigation points to visible sections.
- Every header exposes the selector without overlapping the brand or other controls.
- The browser restores the latest style after refresh.

### Scenario 2: Artistic Sparse Student Content

Steps:

1. Review `src/data/artistic.ts` and the shared Experience and Awards arrays.
2. Confirm populated activities appear under Artistic Activities.
3. In a temporary local edit, empty Artistic activities and shared Experience.
4. Confirm Artistic omits the Activities navigation item and section.
5. Empty shared Awards and confirm Artistic omits Awards without showing a blank panel.
6. Restore the original data after the check.

Expected result:

- Artistic shows only content backed by real entries.
- Hidden sections have no dead navigation links.
- An invalid hidden multi-page route resolves to Home.

### Scenario 3: Route And Layout Preservation

Steps:

1. Switch to multi-page mode and open Projects.
2. Change the portfolio style.
3. Open a local Journal post and change the style again.
4. Toggle light/dark color mode and change the style.

Expected result:

- The `#/projects` route and multi-page mode remain active after the first switch.
- The local Journal route and article remain open after the second switch.
- Color mode remains unchanged.

### Scenario 4: Production Preview

Steps:

1. Build the app.

```bash
npm run build
```

2. Preview the built app.

```bash
npm run preview
```

3. Open the printed local URL.
4. Confirm the production build displays expected content and assets.

Expected result:

- Production preview works locally.
- Images and certificate links resolve from the built assets.

### Scenario 5: GitHub Pages Deployment Configuration

Steps:

1. Review `.github/workflows/deploy.yml`.
2. Review `vite.config.ts`.
3. Confirm `VITE_BASE_PATH` behavior is unchanged.
4. Push to `main` only when local test, build, and lint pass.

Expected result:

- GitHub Actions remains the deployment path.
- Unit 5 tests do not query the live site.

## Cleanup

Stop local dev or preview servers with `Ctrl+C` in the terminal where they are running.
