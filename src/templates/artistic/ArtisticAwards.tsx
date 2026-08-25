import { Box, Image, Text } from "@chakra-ui/react";

import { awards } from "../../data/portfolio";
import ArtisticSectionIntro from "./ArtisticSectionIntro";

function ArtisticAwards() {
  return (
    <Box
      as="section"
      id="awards"
      className="artistic-gallery-section artistic-recognition-wall"
      data-presentation="artistic-awards"
      data-testid="awards-section"
    >
      <ArtisticSectionIntro sectionId="awards" />
      <Box className="artistic-award-wall">
        {awards.map((award, index) => (
          <Box
            as="article"
            key={`${award.title}-${award.year}`}
            className={`artistic-award-piece artistic-award-piece-${index % 3}`}
          >
            <Text>{award.tag}</Text>
            {award.logo ? <Image src={award.logo} alt="" /> : null}
            <Text as="h3">{award.title}</Text>
            <Text>{award.organization}</Text>
            <Text>{award.year}</Text>
            <Text>{award.description}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ArtisticAwards;
