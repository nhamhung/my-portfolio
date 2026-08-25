import { Box, Image, Link, Text } from "@chakra-ui/react";

import ExternalAction from "../../components/shared/ExternalAction";
import { subsectionContent, videos, writing } from "../../data/portfolio";
import { getYouTubeEmbedUrl } from "../../utils/media";
import ArtisticSectionIntro from "./ArtisticSectionIntro";

function ArtisticJournal() {
  return (
    <Box
      as="section"
      id="journal"
      className="artistic-gallery-section artistic-reading-room"
      data-presentation="artistic-journal"
      data-testid="journal-section"
    >
      <ArtisticSectionIntro sectionId="journal" />
      <Box className="artistic-subsection-heading">
        <Text>{subsectionContent.journal.videosEyebrow}</Text>
        <Text as="h3">{subsectionContent.journal.videosTitle}</Text>
      </Box>
      <Box className="artistic-film-shelf">
        {videos.map((video) => (
          <Box as="article" key={video.id}>
            <Box>
              <iframe
                src={getYouTubeEmbedUrl(video.videoId)}
                title={video.title}
                allowFullScreen
              />
            </Box>
            <Text as="h3">{video.title}</Text>
            <Text>{video.description}</Text>
            <ExternalAction
              href={video.watchLink.href}
              label="Watch on YouTube"
              ariaLabel={video.watchLink.ariaLabel}
              variant="link"
              testId={`video-watch-link-${video.id}`}
            />
          </Box>
        ))}
      </Box>
      <Box className="artistic-subsection-heading artistic-writing-heading">
        <Text>{subsectionContent.journal.writingEyebrow}</Text>
        <Text as="h3">{subsectionContent.journal.writingTitle}</Text>
      </Box>
      <Box className="artistic-reading-shelf">
        {writing.map((post, index) => (
          <Box as="article" key={post.href} className="artistic-reading-piece">
            <Image src={post.image} alt={post.imageAlt} />
            <Box>
              <Text>
                {post.publishedDate} / {post.category}
              </Text>
              <Text as="h3">{post.title}</Text>
              <Text>{post.summary}</Text>
              <Text>{post.topics.join(" · ")}</Text>
            </Box>
            <Link
              href={post.href}
              aria-label={`Read blog post: ${post.title}`}
              data-testid={`writing-post-${post.source}-${index}`}
            >
              {post.source === "local" ? "Read here" : "Read post"}
            </Link>
          </Box>
        ))}
      </Box>
      <ExternalAction
        href="https://nhamhung.wordpress.com/"
        label="Visit blog"
        ariaLabel="Visit Learn IT together blog"
        testId="journal-visit-blog"
      />
    </Box>
  );
}

export default ArtisticJournal;
