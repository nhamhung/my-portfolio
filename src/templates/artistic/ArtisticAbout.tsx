import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import { about, artisticContent, sectionContent } from "../../data/portfolio";
import { getAnimationDelayClass } from "../../utils/animation";

const notebookGroups = [
  {
    id: "interests",
    label: "Things I notice",
    items: artisticContent.interests,
  },
  {
    id: "learning",
    label: "What I am learning",
    items: artisticContent.currentLearning,
  },
  {
    id: "hobbies",
    label: "Away from the screen",
    items: artisticContent.hobbies,
  },
  {
    id: "goals",
    label: "Where I hope to go",
    items: artisticContent.personalGoals,
  },
].filter((group) => group.items.length > 0);

function ArtisticAbout() {
  return (
    <Box
      id="about"
      className="artistic-about artistic-notebook-band artistic-band-paper"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
      data-testid="about-section"
    >
      <Box maxW="1240px" mx="auto">
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            lg: "minmax(220px, 0.42fr) minmax(0, 1fr)",
          }}
          gap={{ base: 5, lg: 12 }}
          pb={{ base: 8, md: 12 }}
          borderBottom="1px solid"
          borderColor="var(--line-700)"
        >
          <Text
            color="var(--accent-300)"
            fontSize="xs"
            fontWeight={800}
            textTransform="uppercase"
          >
            Notebook page / About
          </Text>
          <Box>
            <Heading
              as="h2"
              tabIndex={-1}
              data-chapter-heading
              className="artistic-display"
              fontSize={{ base: "4xl", md: "6xl" }}
              lineHeight="1"
              color="var(--text-100)"
            >
              {sectionContent.about.title}
            </Heading>
            <Text mt={5} maxW="760px" color="var(--text-300)" lineHeight="1.85">
              {sectionContent.about.description}
            </Text>
          </Box>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            lg: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
          }}
          gap={{ base: 10, lg: 14 }}
          pt={{ base: 10, md: 14 }}
          alignItems="start"
        >
          <VStack align="stretch" gap={6}>
            {about.paragraphs.map((paragraph, index) => (
              <Text
                key={paragraph}
                className={`reveal-up ${getAnimationDelayClass(index)}`}
                color="var(--text-300)"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.9"
              >
                {paragraph}
              </Text>
            ))}
          </VStack>

          <SimpleGrid
            columns={{ base: 1, sm: 2 }}
            gap="1px"
            bg="var(--line-700)"
          >
            {notebookGroups.map((group, index) => (
              <Box
                key={group.id}
                className={`artistic-about-group reveal-up ${getAnimationDelayClass(index)}`}
                data-testid={`artistic-about-group-${group.id}`}
                minH="220px"
                p={{ base: 5, md: 6 }}
                bg="var(--surface-900)"
              >
                <Text
                  color={
                    index % 2 === 0
                      ? "var(--accent-300)"
                      : "var(--accent-secondary)"
                  }
                  fontSize="xs"
                  fontWeight={800}
                  textTransform="uppercase"
                >
                  0{index + 1} / {group.label}
                </Text>
                <VStack align="stretch" gap={3} mt={5}>
                  {group.items.map((item) => (
                    <Text
                      key={item}
                      color="var(--text-100)"
                      lineHeight="1.6"
                      pl={4}
                      position="relative"
                    >
                      <Box
                        as="span"
                        position="absolute"
                        left={0}
                        color="var(--highlight-300)"
                        aria-hidden="true"
                      >
                        +
                      </Box>
                      {item}
                    </Text>
                  ))}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

export default ArtisticAbout;
