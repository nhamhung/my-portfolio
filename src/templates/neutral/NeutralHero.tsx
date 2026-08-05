import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import ExternalAction from "../../components/shared/ExternalAction";
import { hero, profile, projects } from "../../data/portfolio";
import type { ExternalLink } from "../../types/portfolio";
import { scrollToSection } from "../../utils/scroll";

const socialIcon = (link: ExternalLink) => {
  if (link.label.toLowerCase().includes("github"))
    return <FaGithub size={19} />;
  if (link.label.toLowerCase().includes("linkedin"))
    return <FaLinkedin size={19} />;
  return <FaEnvelope size={19} />;
};

function NeutralHero() {
  const supportingProject = projects[0];

  return (
    <Box
      id="home"
      className="neutral-hero neutral-feature-story"
      px={{ base: 4, md: 8 }}
      py={{ base: 10, md: 14 }}
    >
      <Box w="100%" maxW="1440px" mx="auto">
        <Flex
          justify="space-between"
          align="flex-end"
          gap={5}
          pb={5}
          borderBottom="1px solid"
          borderColor="var(--line-700)"
        >
          <Box>
            <Text
              className="neutral-kicker"
              color="var(--accent-300)"
              fontSize="xs"
              textTransform="uppercase"
            >
              Student journal / Hello
            </Text>
            <Text mt={2} color="var(--text-300)" fontSize="sm">
              Projects, classes, and things I am learning
            </Text>
          </Box>
          <Text color="var(--text-300)" fontSize="xs" textAlign="right">
            Vol. 01
            <br />
            {profile.location}
          </Text>
        </Flex>

        <Heading
          as="h1"
          tabIndex={-1}
          data-chapter-heading
          className="neutral-display neutral-cover-title"
          fontSize={{ base: "5xl", md: "7xl" }}
          lineHeight="0.96"
          color="var(--text-100)"
          py={{ base: 8, md: 10 }}
          overflowWrap="anywhere"
        >
          {profile.name}
        </Heading>

        <Box
          className="neutral-feature-grid"
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            lg: "minmax(280px, 420px) minmax(0, 1fr)",
          }}
          gap={{ base: 8, lg: 12 }}
          alignItems="start"
        >
          <Box
            className="neutral-feature-media neutral-profile-portrait"
            data-testid="neutral-profile-portrait"
            position="relative"
            w="100%"
            maxW="420px"
            mx="auto"
            minW={0}
            overflow="hidden"
          >
            <Image
              src={profile.profileImage}
              alt={`${profile.name} portrait`}
              w="100%"
              aspectRatio="4 / 4.5"
              objectFit="cover"
            />
            <Flex
              position="absolute"
              inset="auto 0 0"
              px={4}
              py={3}
              justify="space-between"
              gap={4}
              bg="var(--caption-bg)"
              color="var(--caption-text)"
              fontSize="xs"
            >
              <Text>Portrait / Hello</Text>
              <Text textAlign="right">{profile.role}</Text>
            </Flex>
          </Box>

          <VStack
            className="neutral-feature-copy"
            align="stretch"
            justify="space-between"
            gap={8}
            minW={0}
          >
            <VStack align="stretch" gap={6}>
              <Text
                color="var(--accent-300)"
                fontSize="xs"
                fontWeight={700}
                textTransform="uppercase"
              >
                A little about me
              </Text>
              <Heading
                as="h2"
                className="neutral-display neutral-feature-headline"
                fontSize={{ base: "3xl", md: "5xl" }}
                lineHeight="1.08"
                color="var(--text-100)"
              >
                {hero.headline}
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.9"
                color="var(--text-300)"
              >
                {hero.intro}
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
                  data-testid="neutral-hero-primary-action"
                >
                  See my projects
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  borderColor="var(--line-500)"
                  color="var(--text-100)"
                  _hover={{ bg: "var(--control-bg-soft)" }}
                  data-testid="neutral-hero-secondary-action"
                >
                  Say hello
                </Button>
                <ExternalAction
                  href={profile.resume.href}
                  label={profile.resume.label}
                  ariaLabel={profile.resume.ariaLabel}
                  icon={<FiDownload />}
                  download={profile.resume.fileName}
                  testId="neutral-hero-resume-download"
                />
              </Flex>

              <HStack gap={5}>
                {profile.socialLinks.map((link) => (
                  <ExternalAction
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    ariaLabel={link.ariaLabel}
                    icon={socialIcon(link)}
                    variant="icon"
                    testId={`neutral-social-${link.label.toLowerCase()}`}
                  />
                ))}
              </HStack>
            </VStack>

            <Box
              className="neutral-feature-note"
              display="grid"
              gridTemplateColumns="112px minmax(0, 1fr)"
              gap={4}
              pt={5}
              borderTop="1px solid"
              borderColor="var(--line-700)"
            >
              <Image
                src={supportingProject.image}
                alt={supportingProject.imageAlt}
                w="112px"
                aspectRatio="1 / 1"
                objectFit="cover"
              />
              <Box minW={0}>
                <Text color="var(--accent-300)" fontSize="xs">
                  Start here
                </Text>
                <Text mt={2} color="var(--text-100)" fontWeight={700}>
                  {supportingProject.title}
                </Text>
                <Text mt={1} color="var(--text-300)" fontSize="sm">
                  A mix of projects, learning notes, and moments along the way.
                </Text>
              </Box>
            </Box>
          </VStack>
        </Box>

        <SimpleGrid
          className="neutral-facts"
          columns={{ base: 1, sm: 3 }}
          mt={{ base: 10, md: 12 }}
          borderTop="1px solid"
          borderBottom="1px solid"
          borderColor="var(--line-700)"
        >
          {hero.stats.map((stat, index) => (
            <Box key={stat.label} py={5} px={{ base: 0, sm: 5 }}>
              <Flex justify="space-between" gap={4}>
                <Text
                  fontSize="xs"
                  color="var(--text-300)"
                  textTransform="uppercase"
                >
                  {stat.label}
                </Text>
                <Text color="var(--accent-300)" fontSize="xs">
                  0{index + 1}
                </Text>
              </Flex>
              <Text
                mt={1}
                fontSize="lg"
                fontWeight={700}
                color="var(--text-100)"
              >
                {stat.value}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default NeutralHero;
