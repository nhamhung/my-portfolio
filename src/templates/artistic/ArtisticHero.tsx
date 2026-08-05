import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";

import ExternalAction from "../../components/shared/ExternalAction";
import {
  artisticContent,
  gallery,
  profile,
  projects,
} from "../../data/portfolio";
import { scrollToSection } from "../../utils/scroll";

function ArtisticHero() {
  const project = projects[0];
  const galleryItem = gallery[1] ?? gallery[0];

  return (
    <Box
      id="home"
      className="artistic-hero artistic-notebook-band"
      px={{ base: 4, md: 8 }}
      py={{ base: 7, md: 16 }}
    >
      <Box maxW="1380px" mx="auto">
        <Box
          className="artistic-hero-grid"
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            lg: "minmax(0, 0.94fr) minmax(440px, 1.06fr)",
          }}
          gap={{ base: 10, lg: 14 }}
          alignItems="center"
        >
          <VStack align="stretch" gap={{ base: 4, md: 6 }} minW={0}>
            <Flex align="center" gap={3}>
              <Box w="38px" h="4px" bg="var(--accent-400)" aria-hidden="true" />
              <Text
                color="var(--accent-300)"
                fontSize="xs"
                fontWeight={800}
                textTransform="uppercase"
              >
                {artisticContent.introduction.eyebrow}
              </Text>
            </Flex>
            <Heading
              as="h1"
              tabIndex={-1}
              data-chapter-heading
              className="artistic-display"
              fontSize={{ base: "4xl", md: "6xl" }}
              lineHeight="1.02"
              color="var(--text-100)"
              overflowWrap="anywhere"
            >
              {profile.name}
            </Heading>
            <Heading
              as="h2"
              className="artistic-handnote"
              fontSize={{ base: "2xl", md: "4xl" }}
              lineHeight="1.15"
              color="var(--accent-secondary)"
            >
              {artisticContent.introduction.headline}
            </Heading>
            <Text
              maxW="680px"
              color="var(--text-300)"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight={{ base: "1.65", md: "1.85" }}
            >
              {artisticContent.introduction.intro}
            </Text>
            <Flex gap={3} wrap="wrap">
              <Button
                onClick={() => scrollToSection("projects")}
                bg="var(--primary-bg)"
                color="var(--primary-text)"
                _hover={{
                  bg: "var(--primary-hover-bg)",
                  transform: "translateY(-2px)",
                }}
                data-testid="artistic-hero-primary-action"
              >
                Explore my projects
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                variant="outline"
                borderColor="var(--line-500)"
                color="var(--text-100)"
                bg="var(--control-bg-soft)"
                _hover={{ bg: "var(--control-hover-bg)" }}
                data-testid="artistic-hero-secondary-action"
              >
                Open the notebook
              </Button>
              <ExternalAction
                href={profile.resume.href}
                label={profile.resume.label}
                ariaLabel={profile.resume.ariaLabel}
                icon={<FiDownload />}
                download={profile.resume.fileName}
                testId="artistic-hero-resume-download"
              />
            </Flex>
            <Flex
              className="artistic-interest-notes"
              display={{ base: "none", md: "flex" }}
              gap={2}
              wrap="wrap"
              pt={2}
            >
              {artisticContent.interests.slice(0, 3).map((interest, index) => (
                <Text
                  key={interest}
                  className={`artistic-note-label artistic-note-${index + 1}`}
                  px={3}
                  py={1.5}
                  color="var(--text-100)"
                  border="1px solid"
                  borderColor="var(--line-700)"
                  fontSize="xs"
                >
                  {interest}
                </Text>
              ))}
            </Flex>
          </VStack>

          <Box
            className="artistic-collage"
            data-testid="artistic-hero-collage"
            display="grid"
            gridTemplateColumns="minmax(0, 1.08fr) minmax(0, 0.92fr)"
            gridTemplateRows={{
              base: "repeat(2, minmax(100px, 1fr))",
              md: "minmax(170px, 0.8fr) minmax(190px, 1fr)",
            }}
            gap={{ base: 2, md: 3 }}
            minH={{ base: "220px", md: "520px" }}
          >
            <Box
              as="figure"
              m={0}
              gridRow="1 / 3"
              className="artistic-collage-frame artistic-collage-profile"
            >
              <Image
                src={profile.profileImage}
                alt={`${profile.name} portrait`}
                w="100%"
                h="100%"
                objectFit="cover"
              />
              <Text as="figcaption" className="artistic-collage-caption">
                Hello, this is me
              </Text>
            </Box>
            <Box
              as="figure"
              m={0}
              className="artistic-collage-frame artistic-collage-project"
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                w="100%"
                h="100%"
                objectFit="cover"
              />
              <Text as="figcaption" className="artistic-collage-caption">
                Making / {project.title}
              </Text>
            </Box>
            <Box
              as="figure"
              m={0}
              className="artistic-collage-frame artistic-collage-memory"
            >
              <Image
                src={galleryItem.src}
                alt={galleryItem.alt}
                w="100%"
                h="100%"
                objectFit="cover"
              />
              <Text as="figcaption" className="artistic-collage-caption">
                Learning / {galleryItem.title}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ArtisticHero;
