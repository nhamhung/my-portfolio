# Component Methods - Youthful Themes and Artistic Student Template

## Template Contracts

```ts
export type PortfolioTemplateId =
  | "engineering"
  | "neutral"
  | "business"
  | "artistic";

export type SectionVisibilityPredicate = (sectionId: SectionId) => boolean;

export type PortfolioTemplate = {
  id: PortfolioTemplateId;
  label: string;
  description: string;
  ShellComponent: ComponentType<PortfolioShellProps>;
  JournalPostComponent: ComponentType<JournalPostPageProps>;
  chapterLabels: Record<SectionId, string>;
  sectionComponents: Record<SectionId, ComponentType>;
  isSectionVisible?: SectionVisibilityPredicate;
};
```

`isSectionVisible` is optional and defaults to visible. Engineering, Neutral, and Business remain unchanged unless they later need explicit sparse-section behavior.

## Artistic Data Contracts

```ts
export type ArtisticActivity = {
  title: string;
  organization: string;
  period?: string;
  description: string[];
};

export type ArtisticContent = {
  introduction: {
    eyebrow: string;
    headline: string;
    intro: string;
  };
  interests: string[];
  currentLearning: string[];
  hobbies: string[];
  activities: ArtisticActivity[];
  personalGoals: string[];
};
```

Arrays are allowed to be empty. Components omit empty groups rather than manufacture placeholder claims.

## Visibility and Navigation Methods

```ts
const isArtisticSectionVisible = (sectionId: SectionId): boolean;

const getTemplateNavigationItems = (
  items: readonly NavigationItem[],
  template: PortfolioTemplate,
): EnabledNavigationItem[];
```

High-level rules:

- Apply global `enabled` first.
- Apply `template.isSectionVisible` second when present.
- Artistic Experience is visible when shared experience or Artistic activities contains an entry.
- Artistic Awards is visible only when the real awards array contains an entry.
- Home remains visible and is the final safe fallback.

## Layout Reconciliation

Existing `resolveSectionId` remains the single fallback helper. `usePortfolioLayout` adds a reconciliation effect with this observable contract:

```ts
useEffect(() => {
  // Resolve activePageSection against the latest visible section IDs.
  // Replace an invalid multi-page hash instead of pushing history.
}, [enabledSectionIds, fallbackSectionId]);
```

The effect preserves valid sections. If a template switch hides the current section, it resolves to the first visible section and updates only a multi-page section hash. Local journal hashes remain owned by App and are not rewritten.

## Registry and Selection Methods

Existing signatures remain stable:

```ts
export const getPortfolioTemplate = (
  templateId: PortfolioTemplateId | string,
): PortfolioTemplate;

export const isPortfolioTemplateId = (
  value: unknown,
): value is PortfolioTemplateId;

export const getInitialPortfolioTemplateId = (
  defaultTemplateId: PortfolioTemplateId,
  storage?: Pick<Storage, "getItem">,
): PortfolioTemplateId;
```

Only the recognized set expands to include `artistic`; Engineering remains the fallback.

## Presentation Interfaces

- Artistic section components remain prop-free and consume typed data modules like existing sections.
- `ArtisticShell` uses the unchanged `PortfolioShellProps` contract and receives already-filtered navigation.
- Existing action and media records flow unchanged into Artistic components.
- No component writes to student data or introduces runtime content editing.

