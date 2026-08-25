import { Box, Heading, Text } from "@chakra-ui/react";

import { sectionContent } from "../../data/portfolio";
import type { ContentSectionId } from "../../types/portfolio";

const chapterNumbers: Record<ContentSectionId, string> = {
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

type BusinessSectionHeadingProps = {
  sectionId: ContentSectionId;
};

function BusinessSectionHeading({ sectionId }: BusinessSectionHeadingProps) {
  const copy = sectionContent[sectionId];

  return (
    <Box className="business-chapter-heading">
      <Box className="business-chapter-kicker">
        <Text as="span">Chapter {chapterNumbers[sectionId]}</Text>
        <Text as="span">{copy.eyebrow}</Text>
      </Box>
      <Heading
        as="h2"
        tabIndex={-1}
        data-chapter-heading
        className="business-section-title"
      >
        {copy.title}
      </Heading>
      <Text className="business-chapter-intro">{copy.description}</Text>
    </Box>
  );
}

export default BusinessSectionHeading;
