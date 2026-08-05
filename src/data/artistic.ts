import type { ArtisticContent } from "../types/portfolio";

export const artisticContent = {
  introduction: {
    eyebrow: "Creative notebook",
    headline: "Learning in public, making things with care.",
    intro:
      "A collection of the subjects, projects, people, and small experiments that have shaped how I learn and what I hope to explore next.",
  },
  interests: [
    "Finding patterns in data and everyday systems",
    "Making technical ideas easier to understand",
    "Building useful projects with other learners",
  ],
  currentLearning: [
    "Designing dependable data products",
    "Creating practical learning experiences",
    "Writing clearer stories about technical work",
  ],
  hobbies: [
    "Mentoring and creating learning resources",
    "Choir and collaborative performance",
    "Documenting ideas through journals",
  ],
  activities: [
    {
      title: "Student Councillor",
      organization: "Saint Andrew's Junior College",
      period: "2017 - 2018",
      description: [
        "Helped represent the student community and support school activities while completing the GCE A-level programme.",
      ],
    },
    {
      title: "Choir Member",
      organization: "Zhonghua Secondary School",
      period: "2014 - 2015",
      description: [
        "Practised and performed as part of the school choir, including the Singapore Youth Festival programme.",
      ],
    },
  ],
  personalGoals: [
    "Keep building work that connects technology and education",
    "Help more students feel confident about learning difficult subjects",
    "Stay curious enough to keep changing my mind",
  ],
} satisfies ArtisticContent;
