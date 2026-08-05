import type { PortfolioTemplateId } from "./types";

type PortfolioTemplateOption = {
  id: PortfolioTemplateId;
  label: string;
  description: string;
};

export const portfolioTemplateOptions = {
  engineering: {
    id: "engineering",
    label: "Engineering",
    description:
      "A structured portfolio for technical projects, problem-solving, and the tools you are learning.",
  },
  neutral: {
    id: "neutral",
    label: "Neutral",
    description:
      "A relaxed learning journal for projects, reflections, and the things you are exploring.",
  },
  business: {
    id: "business",
    label: "Business",
    description:
      "An organized student showcase for projects, activities, and skills you are building.",
  },
  artistic: {
    id: "artistic",
    label: "Artistic",
    description:
      "A creative notebook for interests, schoolwork, activities, and ideas still taking shape.",
  },
} satisfies Record<PortfolioTemplateId, PortfolioTemplateOption>;

export const portfolioTemplateOptionList = Object.values(
  portfolioTemplateOptions,
);
