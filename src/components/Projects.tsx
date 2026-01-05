import { Box, Heading, Text, SimpleGrid, Badge, HStack, Button, Link, VStack } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { HiArrowDown } from 'react-icons/hi'

function Projects() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://project1-demo.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['Vue.js', 'Firebase', 'TypeScript'],
      github: 'https://github.com/yourusername/project2',
      demo: 'https://project2-demo.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts and interactive charts.',
      technologies: ['React', 'Chart.js', 'OpenWeather API'],
      github: 'https://github.com/yourusername/project3',
      demo: 'https://project3-demo.com',
    },
  ]

  return (
    <Box
      id="projects"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(180deg, #E8F5E9 0%, white 100%)"
      py={{ base: 16, md: 24 }}
      px={0}
      position="relative"
    >
      <Box w="100%" px={{ base: 4, md: 8, lg: 12 }} maxW="1200px" mx="auto">
        <VStack gap={3} mb={12} textAlign="center">
          <Box
            as="span"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight={700}
            color="purple.600"
            textTransform="uppercase"
            letterSpacing="wide"
            px={6}
            py={3}
            bg="white"
            borderRadius="full"
            boxShadow="md"
          >
            Featured Projects
          </Box>
          <Heading
            as="h2"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight={800}
            textAlign="center"
            lineHeight="shorter"
            bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
            bgClip="text"
            letterSpacing="tight"
          >
            Featured Projects
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          {projects.map((project, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="2xl"
              p={6}
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
              border="1px solid"
              borderColor="gray.100"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 40px rgba(102, 126, 234, 0.15)',
                borderColor: 'purple.200',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Heading as="h3" fontSize="lg" mb={3} color="gray.900" fontWeight={700}>
                {project.title}
              </Heading>
              <Text color="gray.800" mb={4} lineHeight="tall" fontSize="sm" fontWeight={500}>
                {project.description}
              </Text>
              <HStack flexWrap="wrap" gap={2} mb={5}>
                {project.technologies.map((tech, i) => (
                  <Badge
                    key={i}
                    bg="purple.50"
                    color="purple.700"
                    px={3}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight={600}
                  >
                    {tech}
                  </Badge>
                ))}
              </HStack>
              <HStack gap={3}>
                <Button
                  onClick={() => window.open(project.github, '_blank')}
                  size="sm"
                  variant="outline"
                  borderColor="purple.300"
                  color="purple.600"
                  fontWeight={600}
                  _hover={{
                    bg: 'purple.50',
                    borderColor: 'purple.400',
                    transform: 'translateY(-2px)',
                  }}
                  rightIcon={<FiExternalLink />}
                  transition="all 0.2s"
                >
                  GitHub
                </Button>
                <Button
                  onClick={() => window.open(project.demo, '_blank')}
                  size="sm"
                  bgGradient="linear(135deg, #667eea, #764ba2)"
                  color="white"
                  fontWeight={600}
                  rightIcon={<FiExternalLink />}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
                  }}
                  transition="all 0.2s"
                >
                  Live Demo
                </Button>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Scroll Arrow */}
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          color="purple.600"
          _hover={{ color: 'purple.700', transform: 'translateX(-50%) translateY(4px)' }}
          cursor="pointer"
          onClick={() => scrollToSection('gallery')}
          transition="all 0.3s"
          zIndex={2}
        >
          <HiArrowDown size={32} />
        </Box>
      </Box>
    </Box>
  )
}

export default Projects

