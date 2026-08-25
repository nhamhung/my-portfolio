import { useState } from "react";
import { Box, Dialog, Image, Text, useDisclosure } from "@chakra-ui/react";

import { gallery } from "../../data/portfolio";
import type { GalleryItem } from "../../types/portfolio";
import ArtisticSectionIntro from "./ArtisticSectionIntro";

function ArtisticGallery() {
  const { open, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const show = (image: GalleryItem) => {
    setSelectedImage(image);
    onOpen();
  };
  return (
    <Box
      as="section"
      id="gallery"
      className="artistic-gallery-section artistic-exhibition"
      data-presentation="artistic-gallery"
      data-testid="gallery-section"
    >
      <ArtisticSectionIntro sectionId="gallery" />
      <Box className="artistic-exhibition-grid">
        {gallery.map((image, index) => (
          <button
            type="button"
            key={image.id}
            className={`artistic-exhibit artistic-exhibit-${index % 4}`}
            onClick={() => show(image)}
            aria-label={`Open ${image.title} gallery image`}
            data-testid={`gallery-card-${image.id}`}
          >
            <Image src={image.src} alt={image.alt} />
            <Box>
              <Text>{String(index + 1).padStart(2, "0")}</Text>
              <Text as="h3">{image.title}</Text>
              <Text>{image.description}</Text>
            </Box>
          </button>
        ))}
      </Box>
      <Dialog.Root
        open={open}
        onOpenChange={(event) => !event.open && onClose()}
      >
        <Dialog.Backdrop className="artistic-dialog-backdrop" />
        <Dialog.Positioner>
          <Dialog.Content className="artistic-exhibition-dialog">
            <Dialog.CloseTrigger />
            {selectedImage ? (
              <Box p={{ base: 4, md: 7 }}>
                <Image src={selectedImage.src} alt={selectedImage.alt} />
                <Text as="h3">{selectedImage.title}</Text>
                <Text>{selectedImage.description}</Text>
              </Box>
            ) : null}
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Box>
  );
}

export default ArtisticGallery;
