import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import ExternalAction from "../../components/shared/ExternalAction";
import LogoMark from "../../components/shared/LogoMark";
import { projects, sectionContent } from "../../data/portfolio";
import { getAnimationDelayClass } from "../../utils/animation";

function ArtisticProjects() {
  return (
    <Box
      id="projects"
      className="artistic-projects artistic-notebook-band artistic-band-paper"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
      data-testid="projects-section"
    >
      <Box maxW="1260px" mx="auto">
        <Flex
          justify="space-between"
          align="flex-end"
          gap={8}
          wrap="wrap"
          pb={8}
          borderBottom="1px solid"
          borderColor="var(--line-700)"
        >
          <Box>
            <Text
              color="var(--accent-300)"
              fontSize="xs"
              fontWeight={800}
              textTransform="uppercase"
            >
              Notebook pages / Projects
            </Text>
            <Heading
              as="h2"
              tabIndex={-1}
              data-chapter-heading
              className="artistic-display"
              mt={4}
              fontSize={{ base: "4xl", md: "6xl" }}
              lineHeight="1"
              color="var(--text-100)"
            >
              {sectionContent.projects.title}
            </Heading>
          </Box>
          <Text maxW="560px" color="var(--text-300)" lineHeight="1.8">
            {sectionContent.projects.description}
          </Text>
        </Flex>

        <VStack
          align="stretch"
          gap={{ base: 14, md: 20 }}
          mt={{ base: 10, md: 14 }}
        >
          {projects.map((project, index) => {
            const imageOnLeft = index % 2 === 0;

            return (
              <Box
                key={project.id}
                className={`artistic-project-sheet reveal-up ${getAnimationDelayClass(index)}`}
                data-testid={`artistic-project-${project.id}`}
                display="grid"
                gridTemplateColumns={{
                  base: "1fr",
                  lg: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
                }}
                gridTemplateAreas={{
                  base: '"visual" "copy"',
                  lg: imageOnLeft ? '"visual copy"' : '"copy visual"',
                }}
                gap={{ base: 7, lg: 12 }}
                alignItems="center"
              >
                <Box
                  as="figure"
                  m={0}
                  gridArea="visual"
                  className="artistic-project-figure"
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    w="100%"
                    aspectRatio="4 / 3"
                    objectFit="cover"
                  />
                  <Flex
                    as="figcaption"
                    justify="space-between"
                    gap={4}
                    mt={3}
                    color="var(--text-300)"
                    fontSize="xs"
                  >
                    <Text>
                      Project page {String(index + 1).padStart(2, "0")}
                    </Text>
                    <Text textAlign="right">{project.title}</Text>
                  </Flex>
                </Box>

                <VStack gridArea="copy" align="stretch" gap={6} minW={0}>
                  <Flex align="center" justify="space-between" gap={5}>
                    <LogoMark
                      logoKey={project.logoKey}
                      logoLabel={project.logoLabel}
                      logoAccent={project.logoAccent}
                      size="lg"
                    />
                    <Text
                      className="artistic-handnote"
                      color="var(--highlight-300)"
                      fontSize="lg"
                    >
                      Made with curiosity
                    </Text>
                  </Flex>
                  <Heading
                    as="h3"
                    className="artistic-display"
                    fontSize={{ base: "3xl", md: "5xl" }}
                    color="var(--text-100)"
                    lineHeight="1.05"
                  >
                    {project.title}
                  </Heading>
                  <Text color="var(--text-300)" lineHeight="1.85">
                    {project.description}
                  </Text>
                  <Flex gap={2} wrap="wrap">
                    {project.technologies.map((technology) => (
                      <Badge
                        key={technology}
                        px={2.5}
                        py={1}
                        borderRadius="sm"
                        bg="var(--control-bg-soft)"
                        color="var(--text-300)"
                        border="1px solid"
                        borderColor="var(--line-700)"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </Flex>
                  <HStack gap={3} wrap="wrap" pt={2}>
                    {project.actions.map((action, actionIndex) => (
                      <ExternalAction
                        key={action.href}
                        href={action.href}
                        label={action.label}
                        ariaLabel={action.ariaLabel}
                        tone={actionIndex === 0 ? "primary" : "outline"}
                        testId={`artistic-project-${project.id}-action-${actionIndex}`}
                      />
                    ))}
                  </HStack>
                </VStack>
              </Box>
            );
          })}
        </VStack>
      </Box>
    </Box>
  );
}

export default ArtisticProjects;
