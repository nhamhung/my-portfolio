import { Box, Button, Image, Text } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";

import ExternalAction from "../../components/shared/ExternalAction";
import { gallery, hero, profile, projects } from "../../data/portfolio";
import { scrollToSection } from "../../utils/scroll";

function ArtisticHero() {
  const project = projects[0];
  const galleryItem = gallery[1] ?? gallery[0];
  return (
    <Box
      id="home"
      className="artistic-gallery-cover"
      data-presentation="artistic-home"
    >
      <Box className="artistic-cover-copy">
        <Text>{hero.eyebrow}</Text>
        <Text as="h1" tabIndex={-1} data-chapter-heading>
          {profile.name}
        </Text>
        <Text as="h2">{hero.headline}</Text>
        <Text>{hero.intro}</Text>
        <Box className="artistic-cover-actions">
          <Button
            onClick={() => scrollToSection("projects")}
            data-testid="artistic-hero-primary-action"
          >
            {hero.primaryAction.label}
          </Button>
          <Button
            onClick={() => scrollToSection("about")}
            data-testid="artistic-hero-secondary-action"
          >
            {hero.secondaryAction.label}
          </Button>
          <ExternalAction
            href={profile.resume.href}
            label={profile.resume.label}
            ariaLabel={profile.resume.ariaLabel}
            icon={<FiDownload />}
            download={profile.resume.fileName}
            testId="artistic-hero-resume-download"
          />
        </Box>
      </Box>
      <Box
        className="artistic-cover-collage"
        data-testid="artistic-hero-collage"
      >
        <Box as="figure">
          <Image src={profile.profileImage} alt={`${profile.name} portrait`} />
          <Text as="figcaption">{profile.role}</Text>
        </Box>
        <Box as="figure">
          <Image src={project.image} alt={project.imageAlt} />
          <Text as="figcaption">{project.title}</Text>
        </Box>
        <Box as="figure">
          <Image src={galleryItem.src} alt={galleryItem.alt} />
          <Text as="figcaption">{galleryItem.title}</Text>
        </Box>
      </Box>
      <Box className="artistic-cover-stats">
        {hero.stats.map((stat) => (
          <Box key={stat.label}>
            <Text>{stat.value}</Text>
            <Text>{stat.label}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ArtisticHero;
