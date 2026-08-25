import { Box, Image, Text } from "@chakra-ui/react";

import { education } from "../../data/portfolio";
import ArtisticSectionIntro from "./ArtisticSectionIntro";

function ArtisticEducation() {
  return (
    <Box
      as="section"
      id="education"
      className="artistic-gallery-section artistic-education-study"
      data-presentation="artistic-education"
      data-testid="education-section"
    >
      <ArtisticSectionIntro sectionId="education" />
      <Box className="artistic-institution-study">
        {education.map((entry, index) => (
          <Box
            as="article"
            key={`${entry.institution}-${entry.period}`}
            className="artistic-institution-piece"
          >
            <Box className="artistic-institution-orbit" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </Box>
            <Image src={entry.logo} alt="" />
            <Box>
              <Text>{entry.period}</Text>
              <Text as="h3">{entry.degree}</Text>
              <Text>{entry.institution}</Text>
              <Text>{entry.specialization}</Text>
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

export default ArtisticEducation;
