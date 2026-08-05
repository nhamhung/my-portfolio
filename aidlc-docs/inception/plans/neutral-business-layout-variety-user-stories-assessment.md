# User Stories Assessment - Neutral and Business Layout Variety

## Request Analysis

- **Original request**: Improve the layout variety of Neutral and Business without adding an Artistic template.
- **User impact**: Direct. Student authors choose the presentation and visitors navigate the resulting portfolio.
- **Complexity**: Moderate and bounded to two template presentations.
- **Stakeholders**: Student portfolio author, portfolio visitor, and template maintainer.

## Assessment Criteria Met

- [x] High priority: The change materially alters existing user interfaces.
- [x] High priority: Students gain different forms of expression through template choice.
- [x] Complexity factor: Shells, navigation, Hero, About, Projects, styles, and tests are affected.
- [x] Testing value: Stories can distinguish structural variety from color-only restyling.
- [x] Overhead control: A focused story set can cover the change without duplicating the requirements.

## Decision

**Execute User Stories**: Yes

Use a minimal story set centered on student expression, visitor navigation, and preserved behavior. Do not create epics, sprint planning, or implementation-task stories.

## Expected Outcomes

- Define who benefits from each layout.
- Convert visual requirements into user-observable acceptance criteria.
- Preserve accessibility, routes, actions, shared data, and Engineering behavior.

## Runtime Selector Amendment Assessment

- **Request**: Let visitors select Engineering, Neutral, or Business directly from the website.
- **User impact**: Direct. The visitor changes the complete presentation while remaining in the current portfolio context.
- **Complexity**: Moderate. App state, all three responsive shells, browser persistence, route preservation, accessibility, and regression tests are involved.
- **High-priority indicator**: This is a new user-facing control and workflow, so a user-story amendment is required.
- **Decision**: Reuse the existing Student Portfolio Author and Portfolio Visitor personas; add one focused selector story and update only affected navigation and maintenance criteria.

## Student-Friendly Refresh Amendment Assessment

- **Request**: Make Neutral and Business lighter and more student-friendly, use accurate project media, remove the selector tick, and improve Business case-label spacing.
- **User impact**: Direct. Students choose these presentations, while visitors interpret the student's identity and projects through their wording, imagery, and responsive layout.
- **Complexity**: Moderate and bounded. The change affects two presentation stories, one selector interaction, shared project media, responsive spacing, accessibility, and regression coverage.
- **High-priority indicator**: This materially changes existing user interfaces and the visitor's understanding of student work.
- **Testing value**: Updated acceptance criteria can distinguish accurate project media and student-friendly framing from unrelated imagery or executive language.
- **Overhead control**: Reuse the existing personas and stories; add no new epic, persona, or implementation-task story.
- **Decision**: Execute a focused amendment to `NBV-US-01` through `NBV-US-05` and extend traceability through NBV-20 and NBV-NFR-10.

## Neutral Portrait and Cross-Platform Setup Amendment Assessment

- **Request**: Reduce Neutral's oversized portrait and expand the README into a detailed setup guide for students across major desktop operating systems.
- **User impact**: Direct for the portrait, which changes the first viewport; indirect but important for student authors who must install and run the portfolio before editing it.
- **Complexity**: Simple and bounded to one existing presentation component plus student documentation.
- **High-priority indicator**: The portrait is a visible interface change, so its user outcome and responsive acceptance criteria belong in the existing Neutral story.
- **Documentation indicator**: The setup guide does not justify a standalone feature story, but it strengthens the existing shared-maintenance journey for student authors.
- **Testing value**: Updated criteria can distinguish a proportionate portrait from the current full-spread treatment and define a complete, verifiable onboarding path.
- **Overhead control**: Reuse the existing personas and stories; add no new epic, persona, or story.
- **Decision**: Amend `NBV-US-01` and `NBV-US-04`, then extend requirement traceability through NBV-23 and NBV-NFR-12.

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Confirmed during Requirements Analysis. |
| Property-Based Testing | Disabled | Confirmed during Requirements Analysis. |
