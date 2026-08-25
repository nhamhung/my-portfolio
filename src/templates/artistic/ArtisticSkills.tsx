import { Box, Link, Text } from "@chakra-ui/react";

import LogoMark from "../../components/shared/LogoMark";
import { certificates, skills, subsectionContent } from "../../data/portfolio";
import ArtisticSectionIntro from "./ArtisticSectionIntro";

function ArtisticSkills() {
  return (
    <Box
      as="section"
      id="skills"
      className="artistic-gallery-section artistic-materials-index"
      data-presentation="artistic-skills"
      data-testid="skills-section"
    >
      <ArtisticSectionIntro sectionId="skills" />
      <Box className="artistic-material-cloud">
        {skills.flatMap((category) =>
          category.skills.map((skill, index) => (
            <Box
              key={`${category.category}-${skill.label}`}
              className={`artistic-material artistic-material-${index % 5}`}
            >
              <LogoMark
                logoKey={skill.logoKey}
                logoLabel={skill.logoLabel}
                logoAccent={skill.logoAccent}
                size="xs"
              />
              <Box>
                <Text>{category.category}</Text>
                <Text>{skill.label}</Text>
              </Box>
            </Box>
          )),
        )}
      </Box>
      <Box className="artistic-subsection-heading artistic-certificate-heading">
        <Text>{subsectionContent.skills.certificatesEyebrow}</Text>
        <Text as="h3">{subsectionContent.skills.certificatesTitle}</Text>
        <Text>{subsectionContent.skills.certificatesDescription}</Text>
      </Box>
      <Box className="artistic-certificate-strip">
        {certificates.map((certificate) => (
          <Link
            key={certificate.title}
            href={certificate.file}
            target="_blank"
            rel="noreferrer"
            aria-label={certificate.ariaLabel}
            data-testid={`certificate-card-${certificate.title.toLowerCase().replaceAll(" ", "-")}`}
          >
            <LogoMark
              logoKey={certificate.logoKey}
              logoLabel={certificate.logoLabel}
              logoAccent={certificate.logoAccent}
            />
            <Box>
              <Text as="h3">{certificate.title}</Text>
              <Text>
                {certificate.issuer} / {certificate.kind}
              </Text>
              <Text>{certificate.description}</Text>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default ArtisticSkills;
