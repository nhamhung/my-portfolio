import {
  Box,
  Button,
  Drawer,
  Flex,
  IconButton,
  Link,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { LuMenu, LuNotebookPen, LuPanelLeft, LuX } from "react-icons/lu";

import { PortfolioStyleSelector } from "../../components/shared/PortfolioStyleSelector";
import { ColorModeButton } from "../../components/ui/color-mode";
import { profile } from "../../data/portfolio";
import type { PortfolioShellProps } from "../types";

function ArtisticShell({
  activeSection,
  activeTemplateId,
  layoutMode,
  navigationItems,
  getNavigationHref,
  onNavigate,
  onSelectTemplate,
  onToggleLayoutMode,
  children,
}: PortfolioShellProps) {
  const { open, onOpen, onClose } = useDisclosure();
  const nextLayoutLabel =
    layoutMode === "single" ? "Multi-page" : "Single page";

  const navigate = (sectionId: typeof activeSection) => {
    onNavigate(sectionId);
    onClose();
  };

  const navigationLinks = (prefix: "nav" | "mobile") =>
    navigationItems.map((item, index) => {
      const isActive = item.id === activeSection;

      return (
        <Box as="li" key={item.id} minW={0}>
          <Link
            href={getNavigationHref(item.id)}
            onClick={(event) => {
              event.preventDefault();
              navigate(item.id);
            }}
            display="flex"
            alignItems="center"
            gap={2}
            minH={prefix === "nav" ? "42px" : "46px"}
            px={prefix === "nav" ? 2 : 3}
            color={isActive ? "var(--text-100)" : "var(--text-300)"}
            borderBottom={prefix === "nav" ? "3px solid" : undefined}
            borderLeft={prefix === "mobile" ? "3px solid" : undefined}
            borderColor={isActive ? "var(--accent-400)" : "transparent"}
            bg={isActive ? "var(--active-nav-bg)" : "transparent"}
            fontSize="xs"
            fontWeight={isActive ? 800 : 600}
            aria-current={isActive ? "page" : undefined}
            data-testid={`artistic-${prefix}-link-${item.id}`}
          >
            <Text as="span" color="var(--accent-secondary)" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </Text>
            <Text as="span" overflowWrap="anywhere">
              {item.label}
            </Text>
          </Link>
        </Box>
      );
    });

  return (
    <Box
      minH="100vh"
      w="100%"
      className="portfolio-template portfolio-template-artistic artistic-shell"
      data-template-id="artistic"
    >
      <Link
        href="#portfolio-main"
        className="skip-link"
        position="fixed"
        top={2}
        left={2}
        zIndex={2000}
      >
        Skip to portfolio content
      </Link>

      <Box
        as="header"
        className="artistic-notebook-header"
        position="sticky"
        top={0}
        zIndex={1000}
        bg="var(--surface-900)"
        borderBottom="1px solid"
        borderColor="var(--line-700)"
      >
        <Flex
          maxW="1480px"
          mx="auto"
          minH={{ base: "68px", md: "76px" }}
          px={{ base: 4, md: 8 }}
          align="center"
          justify="space-between"
          gap={4}
        >
          <Link
            href={getNavigationHref("home")}
            onClick={(event) => {
              event.preventDefault();
              navigate("home");
            }}
            display="flex"
            alignItems="center"
            gap={3}
            minW={0}
            aria-label="Navigate to Artistic portfolio home"
            data-testid="artistic-brand-link"
          >
            <Flex
              boxSize="38px"
              flex="none"
              align="center"
              justify="center"
              bg="var(--accent-control-bg)"
              color="var(--accent-300)"
              border="1px solid"
              borderColor="var(--active-nav-border)"
              borderRadius="4px"
              aria-hidden="true"
            >
              <LuNotebookPen />
            </Flex>
            <Box minW={0}>
              <Text
                className="artistic-wordmark"
                color="var(--text-100)"
                fontWeight={900}
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.1"
                truncate
              >
                {profile.name}
              </Text>
              <Text
                mt={1}
                color="var(--text-300)"
                fontSize="xs"
                display={{ base: "none", sm: "block" }}
              >
                Creative notebook
              </Text>
            </Box>
          </Link>

          <Flex align="center" gap={2} flex="none">
            <PortfolioStyleSelector
              activeTemplateId={activeTemplateId}
              onSelectTemplate={onSelectTemplate}
              testIdPrefix="artistic"
            />
            <ColorModeButton
              color="var(--text-100)"
              border="1px solid"
              borderColor="var(--line-500)"
              bg="var(--control-bg)"
              data-testid="artistic-theme-toggle"
            />
            <Button
              display={{ base: "none", md: "inline-flex" }}
              size="sm"
              variant="outline"
              borderColor="var(--line-500)"
              color="var(--text-100)"
              bg="var(--control-bg-soft)"
              onClick={onToggleLayoutMode}
              aria-label={`Switch to ${nextLayoutLabel} layout`}
              data-testid="artistic-layout-toggle"
            >
              <LuPanelLeft />
              {nextLayoutLabel}
            </Button>
            <IconButton
              display={{ base: "inline-flex", xl: "none" }}
              aria-label="Open Artistic navigation"
              onClick={onOpen}
              color="var(--text-100)"
              border="1px solid"
              borderColor="var(--line-500)"
              bg="var(--control-bg)"
              data-testid="artistic-menu-toggle"
            >
              <LuMenu />
            </IconButton>
          </Flex>
        </Flex>

        <Box
          className="artistic-notebook-nav"
          display={{ base: "none", xl: "block" }}
          borderTop="1px solid"
          borderColor="var(--line-700)"
        >
          <Box
            as="nav"
            aria-label="Artistic creative notebook contents"
            maxW="1480px"
            mx="auto"
            px={8}
          >
            <Flex
              as="ul"
              listStyleType="none"
              align="stretch"
              justify="space-between"
              gap={1}
            >
              {navigationLinks("nav")}
            </Flex>
          </Box>
        </Box>
      </Box>

      <Drawer.Root
        open={open}
        onOpenChange={(event) => !event.open && onClose()}
        placement="end"
      >
        <Drawer.Backdrop bg="var(--modal-overlay-bg)" />
        <Drawer.Positioner>
          <Drawer.Content
            maxW="340px"
            bg="var(--surface-800)"
            color="var(--text-100)"
          >
            <Drawer.Header
              borderBottom="1px solid"
              borderColor="var(--line-700)"
            >
              <Flex justify="space-between" align="center" w="100%">
                <Box>
                  <Text
                    className="artistic-wordmark"
                    fontSize="lg"
                    fontWeight={900}
                  >
                    Notebook index
                  </Text>
                  <Text mt={1} color="var(--text-300)" fontSize="xs">
                    Learn / make / reflect
                  </Text>
                </Box>
                <IconButton
                  aria-label="Close Artistic navigation"
                  variant="ghost"
                  onClick={onClose}
                  data-testid="artistic-menu-close"
                >
                  <LuX />
                </IconButton>
              </Flex>
            </Drawer.Header>
            <Drawer.Body py={5}>
              <VStack align="stretch" gap={5}>
                <Box as="nav" aria-label="Artistic mobile notebook navigation">
                  <VStack as="ul" align="stretch" gap={1} listStyleType="none">
                    {navigationLinks("mobile")}
                  </VStack>
                </Box>
                <Button
                  w="100%"
                  variant="outline"
                  borderColor="var(--line-500)"
                  color="var(--text-100)"
                  onClick={() => {
                    onToggleLayoutMode();
                    onClose();
                  }}
                  data-testid="artistic-mobile-layout-toggle"
                >
                  <LuPanelLeft />
                  {nextLayoutLabel}
                </Button>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>

      <Box
        id="portfolio-main"
        as="main"
        className="artistic-notebook-canvas"
        minH="100vh"
        w="100%"
        data-layout-mode={layoutMode}
        data-template-id="artistic"
        data-testid="portfolio-main"
        tabIndex={-1}
      >
        {children}
      </Box>
    </Box>
  );
}

export default ArtisticShell;
