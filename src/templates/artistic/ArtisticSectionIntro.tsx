import { Box, Text } from "@chakra-ui/react";

import { sectionContent } from "../../data/portfolio";
import type { ContentSectionId } from "../../types/portfolio";

const sectionNumbers: Record<ContentSectionId, string> = {
  about: "02",
  education: "03",
  experience: "04",
  awards: "05",
  projects: "06",
  gallery: "07",
  journal: "08",
  skills: "09",
  contact: "10",
};

function ArtisticSectionIntro({ sectionId }: { sectionId: ContentSectionId }) {
  const copy = sectionContent[sectionId];
  return (
    <Box className="artistic-section-intro">
      <Box className="artistic-section-marker">
        <Text className="artistic-section-number">
          {sectionNumbers[sectionId]}
        </Text>
        <Text className="artistic-section-eyebrow">{copy.eyebrow}</Text>
      </Box>
      <Text
        as="h2"
        tabIndex={-1}
        data-chapter-heading
        className="artistic-section-title"
      >
        {copy.title}
      </Text>
      <Text className="artistic-section-copy">{copy.description}</Text>
    </Box>
  );
}

export default ArtisticSectionIntro;
