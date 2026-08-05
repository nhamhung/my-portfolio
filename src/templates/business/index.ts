import Awards from "../../components/Awards";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Gallery from "../../components/Gallery";
import Journal from "../../components/Journal";
import JournalPostPage from "../../components/JournalPostPage";
import Skills from "../../components/Skills";
import { portfolioTemplateOptions } from "../options";
import type { PortfolioTemplate } from "../types";
import BusinessAbout from "./BusinessAbout";
import BusinessHero from "./BusinessHero";
import BusinessProjects from "./BusinessProjects";
import BusinessShell from "./BusinessShell";

export const businessChapterLabels = {
  home: "Welcome",
  about: "My Story",
  education: "Education",
  experience: "Experience",
  awards: "Highlights",
  projects: "Projects",
  gallery: "Gallery",
  journal: "Journal",
  skills: "Skills",
  contact: "Say Hello",
} satisfies PortfolioTemplate["chapterLabels"];

export const businessTemplate = {
  ...portfolioTemplateOptions.business,
  ShellComponent: BusinessShell,
  JournalPostComponent: JournalPostPage,
  chapterLabels: businessChapterLabels,
  sectionComponents: {
    home: BusinessHero,
    about: BusinessAbout,
    education: Education,
    experience: Experience,
    awards: Awards,
    projects: BusinessProjects,
    gallery: Gallery,
    journal: Journal,
    skills: Skills,
    contact: Contact,
  },
} satisfies PortfolioTemplate;
