import "./artistic.css";

import { portfolioTemplateOptions } from "../options";
import type { PortfolioTemplate } from "../types";
import ArtisticAbout from "./ArtisticAbout";
import ArtisticAwards from "./ArtisticAwards";
import ArtisticContact from "./ArtisticContact";
import ArtisticEducation from "./ArtisticEducation";
import ArtisticExperience from "./ArtisticExperience";
import ArtisticGallery from "./ArtisticGallery";
import ArtisticHero from "./ArtisticHero";
import ArtisticJournal from "./ArtisticJournal";
import ArtisticJournalPostPage from "./ArtisticJournalPostPage";
import ArtisticProjects from "./ArtisticProjects";
import ArtisticShell from "./ArtisticShell";
import ArtisticSkills from "./ArtisticSkills";

export const artisticChapterLabels = {
  home: "Hello",
  about: "About",
  education: "Education",
  experience: "Experience",
  awards: "Awards",
  projects: "Projects",
  gallery: "Gallery",
  journal: "Journal",
  skills: "Skills",
  contact: "Contact",
} satisfies PortfolioTemplate["chapterLabels"];

export const artisticTemplate = {
  ...portfolioTemplateOptions.artistic,
  ShellComponent: ArtisticShell,
  JournalPostComponent: ArtisticJournalPostPage,
  chapterLabels: artisticChapterLabels,
  sectionComponents: {
    home: ArtisticHero,
    about: ArtisticAbout,
    education: ArtisticEducation,
    experience: ArtisticExperience,
    awards: ArtisticAwards,
    projects: ArtisticProjects,
    gallery: ArtisticGallery,
    journal: ArtisticJournal,
    skills: ArtisticSkills,
    contact: ArtisticContact,
  },
} satisfies PortfolioTemplate;
