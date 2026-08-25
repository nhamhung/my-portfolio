import { Box, Text } from "@chakra-ui/react";

import { experience } from "../../data/portfolio";
import ArtisticSectionIntro from "./ArtisticSectionIntro";

function ArtisticExperience() {
  return (
    <Box
      as="section"
      id="experience"
      className="artistic-gallery-section artistic-experience-ribbon"
      data-presentation="artistic-experience"
      data-testid="experience-section"
    >
      <ArtisticSectionIntro sectionId="experience" />
      <Box className="artistic-experience-flow">
        {experience.map((entry, index) => (
          <Box
            as="article"
            key={`${entry.company}-${entry.period}`}
            className="artistic-experience-piece"
          >
            <Text className="artistic-experience-index">
              {String(index + 1).padStart(2, "0")}
            </Text>
            <Box className="artistic-experience-heading">
              <Text>{entry.period}</Text>
              <Text as="h3">{entry.title}</Text>
              <Text>{entry.company}</Text>
            </Box>
            <Box as="ul">
              {entry.description.map((detail) => (
                <Text as="li" key={detail}>
                  {detail}
                </Text>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ArtisticExperience;
