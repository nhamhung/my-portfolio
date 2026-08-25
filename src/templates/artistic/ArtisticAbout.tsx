import { Box, Image, Text } from "@chakra-ui/react";

import { about, profile } from "../../data/portfolio";
import ArtisticSectionIntro from "./ArtisticSectionIntro";

function ArtisticAbout() {
  return (
    <Box
      as="section"
      id="about"
      className="artistic-gallery-section artistic-profile-catalogue"
      data-presentation="artistic-about"
      data-testid="about-section"
    >
      <ArtisticSectionIntro sectionId="about" />
      <Box className="artistic-about-composition">
        <Box as="figure">
          <Image src={profile.profileImage} alt={`${profile.name} portrait`} />
          <Text as="figcaption">
            {profile.name} / {profile.role}
          </Text>
        </Box>
        <Box className="artistic-about-prose">
          {about.paragraphs.map((paragraph, index) => (
            <Text
              key={paragraph}
              className={`artistic-about-paragraph artistic-about-paragraph-${index}`}
            >
              {paragraph}
            </Text>
          ))}
        </Box>
        <Box className="artistic-about-metrics">
          {about.metrics.map((metric) => (
            <Box key={metric.label}>
              <Text>{metric.value}</Text>
              <Text>{metric.label}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ArtisticAbout;
