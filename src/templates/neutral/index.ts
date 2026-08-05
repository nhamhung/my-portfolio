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
import NeutralAbout from "./NeutralAbout";
import NeutralHero from "./NeutralHero";
import NeutralProjects from "./NeutralProjects";
import NeutralShell from "./NeutralShell";

export const neutralChapterLabels = {
  home: "Hello",
  about: "My Story",
  education: "Learning",
  experience: "Experience",
  awards: "Highlights",
  projects: "Projects",
  gallery: "Snapshots",
  journal: "Journal",
  skills: "Skills",
  contact: "Say Hello",
} satisfies PortfolioTemplate["chapterLabels"];

export const neutralTemplate = {
  ...portfolioTemplateOptions.neutral,
  ShellComponent: NeutralShell,
  JournalPostComponent: JournalPostPage,
  chapterLabels: neutralChapterLabels,
  sectionComponents: {
    home: NeutralHero,
    about: NeutralAbout,
    education: Education,
    experience: Experience,
    awards: Awards,
    projects: NeutralProjects,
    gallery: Gallery,
    journal: Journal,
    skills: Skills,
    contact: Contact,
  },
} satisfies PortfolioTemplate;
