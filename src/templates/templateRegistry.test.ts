import { describe, expect, it } from "vitest";

import { selectedTemplateId } from "../data/template";
import { sectionIds } from "../data/portfolio";
import {
  artisticTemplate,
  createArtisticSectionVisibility,
  isArtisticSectionVisible,
} from "./artistic";
import {
  activePortfolioTemplate,
  getPortfolioTemplate,
  portfolioTemplates,
} from "./index";
import type { PortfolioTemplateId } from "./types";

describe("portfolio template registry", () => {
  it("keeps the selected template resolvable", () => {
    expect(activePortfolioTemplate.id).toBe(selectedTemplateId);
  });

  it("exposes exactly the four supported template ids", () => {
    expect(portfolioTemplates.map((template) => template.id)).toEqual([
      "engineering",
      "neutral",
      "business",
      "artistic",
    ]);
  });

  it("keeps every template aligned with the portfolio section ids", () => {
    for (const template of portfolioTemplates) {
      expect(
        template.label.trim(),
        `${template.id} template needs a readable label`,
      ).not.toHaveLength(0);
      expect(
        template.description.trim(),
        `${template.id} template needs a readable description`,
      ).not.toHaveLength(0);
      expect(
        template.ShellComponent,
        `${template.id} template needs a shell`,
      ).toBeTypeOf("function");
      expect(
        template.JournalPostComponent,
        `${template.id} template needs a journal page`,
      ).toBeTypeOf("function");

      for (const sectionId of sectionIds) {
        expect(
          template.chapterLabels[sectionId].trim(),
          `${template.id} needs a ${sectionId} chapter label`,
        ).not.toHaveLength(0);
        expect(
          template.sectionComponents[sectionId],
          `${template.id} template is missing the ${sectionId} section component`,
        ).toBeTypeOf("function");
      }
    }
  });

  it("falls back to engineering for unknown template ids", () => {
    expect(
      getPortfolioTemplate("missing" as PortfolioTemplateId | string).id,
    ).toBe("engineering");
  });

  it("keeps Artistic complete and hides only genuinely empty formal sections", () => {
    expect(artisticTemplate.isSectionVisible).toBe(isArtisticSectionVisible);
    expect(isArtisticSectionVisible("home")).toBe(true);
    expect(isArtisticSectionVisible("experience")).toBe(true);
    expect(isArtisticSectionVisible("awards")).toBe(true);

    const sparseVisibility = createArtisticSectionVisibility({
      activities: [],
      experiences: [],
      awards: [],
    });

    expect(sparseVisibility("home")).toBe(true);
    expect(sparseVisibility("experience")).toBe(false);
    expect(sparseVisibility("awards")).toBe(false);
  });
});
