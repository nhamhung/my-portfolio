import { Box, Image, Text } from "@chakra-ui/react";

import ExternalAction from "../../components/shared/ExternalAction";
import LogoMark from "../../components/shared/LogoMark";
import { projects } from "../../data/portfolio";
import ArtisticSectionIntro from "./ArtisticSectionIntro";

function ArtisticProjects() {
  return (
    <Box
      as="section"
      id="projects"
      className="artistic-gallery-section artistic-work-catalogue"
      data-presentation="artistic-projects"
      data-testid="projects-section"
    >
      <ArtisticSectionIntro sectionId="projects" />
      <Box className="artistic-work-grid">
        {projects.map((project, index) => (
          <Box
            as="article"
            key={project.id}
            className={`artistic-work artistic-work-${index % 3}`}
            data-testid={`artistic-project-${project.id}`}
          >
            <Box as="figure">
              <Image src={project.image} alt={project.imageAlt} />
              <Text as="figcaption">{String(index + 1).padStart(2, "0")}</Text>
            </Box>
            <Box className="artistic-work-copy">
              <LogoMark
                logoKey={project.logoKey}
                logoLabel={project.logoLabel}
                logoAccent={project.logoAccent}
                size="lg"
              />
              <Text as="h3">{project.title}</Text>
              <Text>{project.description}</Text>
              <Text>{project.technologies.join(" · ")}</Text>
              <Box>
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
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ArtisticProjects;
