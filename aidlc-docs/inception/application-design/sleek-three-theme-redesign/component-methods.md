# Component Methods - Sleek Three-Theme Redesign

## Template Contracts

```ts
export type PortfolioTemplateId = "engineering" | "business" | "artistic";

export type JournalPostPageProps = {
  slug: string;
};

export type PortfolioShellProps = {
  activeSection: SectionId;
  activeTemplateId: PortfolioTemplateId;
  layoutMode: LayoutMode;
  navigationItems: readonly NavigationItem[];
  getNavigationHref: (sectionId: SectionId) => string;
  onNavigate: (sectionId: SectionId) => void;
  onSelectTemplate: (templateId: PortfolioTemplateId) => void;
  onToggleLayoutMode: () => void;
  children: ReactNode;
};

export type PortfolioTemplate = {
  id: PortfolioTemplateId;
  label: string;
  description: string;
  ShellComponent: ComponentType<PortfolioShellProps>;
  JournalPostComponent: ComponentType<JournalPostPageProps>;
  chapterLabels: Record<SectionId, string>;
  sectionComponents: Record<SectionId, ComponentType>;
  isSectionVisible?: (sectionId: SectionId) => boolean;
};
```

The optional visibility seam remains backward-compatible. The redesigned Business and Artistic definitions use complete maps and shared enabled navigation rather than theme-only content visibility.

## Registry and Selection Methods

```ts
export const portfolioTemplates: readonly PortfolioTemplate[];

export function getPortfolioTemplate(
  templateId: PortfolioTemplateId | string,
): PortfolioTemplate;

export function isPortfolioTemplateId(
  value: unknown,
): value is PortfolioTemplateId;

export function getInitialPortfolioTemplateId(
  defaultTemplateId: PortfolioTemplateId,
  storage?: Pick<Storage, "getItem">,
): PortfolioTemplateId;

export function persistPortfolioTemplateId(
  templateId: PortfolioTemplateId,
  storage?: Pick<Storage, "setItem">,
): boolean;
```

High-level rules:

- `portfolioTemplates` contains Engineering, Business, and Artistic exactly once in that order.
- `getPortfolioTemplate` returns Engineering for `neutral`, unknown strings, or missing registry matches.
- `isPortfolioTemplateId` returns `false` for `neutral`.
- Initial selection accepts only a valid stored value; otherwise it uses the valid configured default and ultimately Engineering.
- Persistence stores only a typed valid ID and continues to tolerate unavailable browser storage.

## Shell Interfaces

```ts
export default function BusinessShell(props: PortfolioShellProps): JSX.Element;
export default function ArtisticShell(props: PortfolioShellProps): JSX.Element;
```

Both shells:

- Render a skip link and one `main` target.
- Render the shared style selector and existing color/layout controls through theme-owned placement.
- Use provided navigation items and callbacks without parsing routes themselves.
- Keep decorative background layers `aria-hidden` and non-interactive.
- Place `children` above all decorative layers in logical reading order.

## Section Component Interfaces

All section components remain prop-free strategy entries that read typed shared data modules, matching the existing `Record<SectionId, ComponentType>` contract.

```ts
export default function BusinessHero(): JSX.Element;
export default function BusinessAbout(): JSX.Element;
export default function BusinessEducation(): JSX.Element;
export default function BusinessExperience(): JSX.Element;
export default function BusinessAwards(): JSX.Element;
export default function BusinessProjects(): JSX.Element;
export default function BusinessGallery(): JSX.Element;
export default function BusinessJournal(): JSX.Element;
export default function BusinessSkills(): JSX.Element;
export default function BusinessContact(): JSX.Element;

export default function ArtisticHero(): JSX.Element;
export default function ArtisticAbout(): JSX.Element;
export default function ArtisticEducation(): JSX.Element;
export default function ArtisticExperience(): JSX.Element;
export default function ArtisticAwards(): JSX.Element;
export default function ArtisticProjects(): JSX.Element;
export default function ArtisticGallery(): JSX.Element;
export default function ArtisticJournal(): JSX.Element;
export default function ArtisticSkills(): JSX.Element;
export default function ArtisticContact(): JSX.Element;
```

Each component must preserve its canonical section ID and existing test ID so App routing and focused verification remain stable. Internal theme-local primitives may accept presentation-only values derived from shared records, but they must not create personal facts.

## Journal View Interfaces

```ts
export default function BusinessJournalPostPage(
  props: JournalPostPageProps,
): JSX.Element;

export default function ArtisticJournalPostPage(
  props: JournalPostPageProps,
): JSX.Element;
```

High-level rules:

- Resolve `slug` through `getLocalJournalPostBySlug`.
- Render theme-owned article and not-found compositions.
- Preserve `#/journal` return navigation, post media, alternative text, dates, category, topics, summary, and Markdown body.
- External Markdown links open safely using the existing behavior.
- Heading levels remain logical beneath the article `h1`.
- Do not import the Engineering `JournalPostPage` visible component.

## App Orchestration Methods

```ts
function selectTemplate(templateId: PortfolioTemplateId): void;

function getEnabledNavigationItems(
  navigation: readonly NavigationItem[],
  isSectionVisible?: (sectionId: SectionId) => boolean,
): NavigationItem[];
```

No new App method or state store is required. `selectTemplate` resolves through the registry, persists the resulting valid ID, and updates the active strategy. Existing layout and route helpers continue to preserve section, journal, and layout state.

## Presentation Rules at Interface Boundaries

- Business and Artistic components may import shared data, media/action helpers, Chakra primitives, React Icons, and React Markdown.
- They must not import visible Engineering section components, `SectionShell`, `ContentCard`, or Engineering presentation CSS.
- The shared style selector and low-level action/accessibility utilities remain allowed because they provide behavior rather than Engineering composition.
- Theme-local UI primitives cannot be exported across Business and Artistic.
- `business.css` and `artistic.css` expose no unscoped visual selector.

## Content Validation

| Check                  | Result                                                              |
| ---------------------- | ------------------------------------------------------------------- |
| TypeScript fences      | Balanced and syntactically structured declarations                  |
| Mermaid/ASCII diagrams | Not used                                                            |
| Method coverage        | Contracts, registry, selection, shells, sections, journals, and App |

## Extension Compliance

| Extension              | Status   | Rationale                                                                                                    |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| Security Baseline      | Disabled | Reconfirmed during Requirements Analysis; no enabled security rules apply to method design.                  |
| Property-Based Testing | Disabled | Reconfirmed during Requirements Analysis; focused deterministic verification remains the approved direction. |
