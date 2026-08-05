# Unit Test Execution Instructions

## Purpose

Run the lightweight automated tests that protect app rendering, navigation configuration, and portfolio data contracts.

## Run Unit Tests

### 1. Execute All Tests

```bash
npm run test
```

Expected current result:

- 7 test files pass.
- 84 tests pass.
- 0 failures.

## Test Files

| File                                     | Purpose                                                                                                                                            |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/App.test.tsx`                       | Covers app rendering, four-style selection, Artistic composition, persistence, layout modes, routes, journal pages, and responsive-shell controls. |
| `src/templates/templateRegistry.test.ts` | Validates exactly four complete templates, Artistic sparse sections, and Engineering fallback behavior.                                            |
| `src/utils/templateSelection.test.ts`    | Validates template IDs, source default, persistence, invalid fallback, and storage failures.                                                       |
| `src/hooks/usePortfolioLayout.test.ts`   | Covers layout preference, route parsing, hidden-section fallback, and section resolution.                                                          |
| `src/test/data/navigation.test.ts`       | Validates section IDs, navigation labels, baseline availability, and template visibility filtering.                                                |
| `src/test/data/portfolio.test.ts`        | Validates profile, actions, links, content, media, Artistic data, and visible section arrays.                                                      |
| `src/themeAccessibility.test.ts`         | Guards contrast, control spacing, and responsive styling constraints.                                                                              |
| `src/test/setup.ts`                      | Registers jest-dom and minimal JSDOM shims.                                                                                                        |

## What These Tests Do Not Do

- They do not fetch external URLs.
- They do not check the live GitHub Pages site.
- They do not run a real browser.
- They do not validate visual layout by screenshots.
- They do not access private Google Sheets or secrets.

## Fixing Failing Tests

1. Read the failing test name.
2. Read the assertion message.
3. Open the file named by the failure when provided, commonly:
   - `src/data/profile.ts`
   - `src/data/navigation.ts`
   - `src/data/projects.ts`
   - `src/data/gallery.ts`
   - `src/data/certificates.ts`
4. Fix the broken data or import.
5. Rerun:

```bash
npm run test
```

## When To Run

Run tests:

- After editing `src/data/`.
- After replacing assets.
- After changing navigation IDs or labels.
- After changing a template shell, selector, source default, or persistence behavior.
- Before pushing important changes.
- Before publishing to GitHub Pages.
