import { Box, Heading, Text, VStack } from "@chakra-ui/react";

import {
  artisticContent,
  experience,
  sectionContent,
} from "../../data/portfolio";
import { getAnimationDelayClass } from "../../utils/animation";

const activityEntries = [
  ...artisticContent.activities.map((activity) => ({
    ...activity,
    kind: "School & community",
  })),
  ...experience.map((entry) => ({
    title: entry.title,
    organization: entry.company,
    period: entry.period,
    description: entry.description,
    kind: "Work & mentoring",
  })),
];

function ArtisticActivities() {
  return (
    <Box
      id="experience"
      className="artistic-activities artistic-notebook-band artistic-band-ink"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
      data-testid="experience-section"
    >
      <Box maxW="1160px" mx="auto">
        <Text
          color="var(--highlight-300)"
          fontSize="xs"
          fontWeight={800}
          textTransform="uppercase"
        >
          Notebook page / Activities
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
          Things I have been part of
        </Heading>
        <Text mt={5} maxW="760px" color="var(--text-300)" lineHeight="1.85">
          {sectionContent.experience.description}
        </Text>

        <VStack
          align="stretch"
          gap={0}
          mt={{ base: 10, md: 14 }}
          borderTop="1px solid"
          borderColor="var(--line-700)"
        >
          {activityEntries.map((activity, index) => (
            <Box
              key={`${activity.organization}-${activity.title}`}
              className={`artistic-activity-row reveal-up ${getAnimationDelayClass(index)}`}
              data-testid={`artistic-activity-${index}`}
              display="grid"
              gridTemplateColumns={{
                base: "1fr",
                md: "150px minmax(0, 0.8fr) minmax(0, 1.2fr)",
              }}
              gap={{ base: 3, md: 7 }}
              py={{ base: 7, md: 9 }}
              borderBottom="1px solid"
              borderColor="var(--line-700)"
            >
              <Box>
                <Text
                  color="var(--highlight-300)"
                  fontSize="xs"
                  fontWeight={800}
                  textTransform="uppercase"
                >
                  {activity.kind}
                </Text>
                <Text mt={2} color="var(--text-300)" fontSize="sm">
                  {activity.period ?? "Ongoing"}
                </Text>
              </Box>
              <Box>
                <Heading
                  as="h3"
                  fontSize={{ base: "xl", md: "2xl" }}
                  color="var(--text-100)"
                >
                  {activity.title}
                </Heading>
                <Text mt={2} color="var(--accent-300)" fontWeight={700}>
                  {activity.organization}
                </Text>
              </Box>
              <VStack align="stretch" gap={2}>
                {activity.description.map((item) => (
                  <Text key={item} color="var(--text-300)" lineHeight="1.75">
                    {item}
                  </Text>
                ))}
              </VStack>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}

export default ArtisticActivities;
