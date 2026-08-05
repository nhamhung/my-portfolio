import Awards from "../../components/Awards";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Gallery from "../../components/Gallery";
import Journal from "../../components/Journal";
import JournalPostPage from "../../components/JournalPostPage";
import Skills from "../../components/Skills";
import { artisticContent, awards, experience } from "../../data/portfolio";
import type {
  ArtisticActivity,
  AwardEntry,
  ExperienceEntry,
  SectionId,
} from "../../types/portfolio";
import { portfolioTemplateOptions } from "../options";
import type { PortfolioTemplate } from "../types";
import ArtisticAbout from "./ArtisticAbout";
import ArtisticActivities from "./ArtisticActivities";
import ArtisticHero from "./ArtisticHero";
import ArtisticProjects from "./ArtisticProjects";
import ArtisticShell from "./ArtisticShell";

export const artisticChapterLabels = {
  home: "Hello",
  about: "My Notebook",
  education: "School Days",
  experience: "Activities",
  awards: "Milestones",
  projects: "Things I Made",
  gallery: "Snapshots",
  journal: "Notes",
  skills: "What I Use",
  contact: "Say Hello",
} satisfies PortfolioTemplate["chapterLabels"];

type ArtisticVisibilityContent = {
  activities?: readonly ArtisticActivity[];
  experiences?: readonly ExperienceEntry[];
  awards?: readonly AwardEntry[];
};

export const createArtisticSectionVisibility =
  ({
    activities = artisticContent.activities,
    experiences = experience,
    awards: awardEntries = awards,
  }: ArtisticVisibilityContent = {}) =>
  (sectionId: SectionId): boolean => {
    if (sectionId === "experience") {
      return experiences.length > 0 || activities.length > 0;
    }

    if (sectionId === "awards") {
      return awardEntries.length > 0;
    }

    return true;
  };

export const isArtisticSectionVisible = createArtisticSectionVisibility();

export const artisticTemplate = {
  ...portfolioTemplateOptions.artistic,
  ShellComponent: ArtisticShell,
  JournalPostComponent: JournalPostPage,
  chapterLabels: artisticChapterLabels,
  sectionComponents: {
    home: ArtisticHero,
    about: ArtisticAbout,
    education: Education,
    experience: ArtisticActivities,
    awards: Awards,
    projects: ArtisticProjects,
    gallery: Gallery,
    journal: Journal,
    skills: Skills,
    contact: Contact,
  },
  isSectionVisible: isArtisticSectionVisible,
} satisfies PortfolioTemplate;
