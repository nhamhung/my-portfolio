import { selectedTemplateId } from "../data/template";
import { artisticTemplate } from "./artistic";
import { businessTemplate } from "./business";
import { engineeringTemplate } from "./engineering";
import { neutralTemplate } from "./neutral";
import type { PortfolioTemplate, PortfolioTemplateId } from "./types";

export const portfolioTemplates = [
  engineeringTemplate,
  neutralTemplate,
  businessTemplate,
  artisticTemplate,
] satisfies PortfolioTemplate[];

export const getPortfolioTemplate = (
  templateId: PortfolioTemplateId | string,
): PortfolioTemplate =>
  portfolioTemplates.find((template) => template.id === templateId) ??
  engineeringTemplate;

export const activePortfolioTemplate = getPortfolioTemplate(selectedTemplateId);
