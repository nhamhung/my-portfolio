import { Box, Heading, SimpleGrid, Badge, VStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Vue.js', 'TypeScript', 'HTML/CSS', 'JavaScript', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'Express.js', 'REST APIs', 'GraphQL', 'MongoDB'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack'],
    },
  ]

  return (
    <Box
      id="skills"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(180deg, white 0%, gray.50 100%)"
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
            Technical Skills
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
            Technical Skills
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          {skillCategories.map((category, index) => (
            <Box
              key={index}
              bg="white"
              p={8}
              borderRadius="2xl"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
              border="1px solid"
              borderColor="gray.100"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 30px rgba(102, 126, 234, 0.15)',
                borderColor: 'purple.200',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Heading
                as="h3"
                fontSize="lg"
                mb={6}
                color="gray.900"
                fontWeight={700}
                pb={3}
                borderBottom="2px solid"
                borderColor="purple.200"
              >
                {category.category}
              </Heading>
              <VStack align="stretch" gap={3}>
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    bg="purple.50"
                    color="purple.800"
                    px={4}
                    py={2.5}
                    borderRadius="lg"
                    fontSize="sm"
                    textAlign="center"
                    fontWeight={600}
                    _hover={{
                      bg: 'purple.100',
                      transform: 'scale(1.02)',
                      color: 'purple.900',
                    }}
                    transition="all 0.2s"
                  >
                    {skill}
                  </Badge>
                ))}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Scroll Arrow - Optional, can scroll to contact or top */}
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          color="purple.600"
          _hover={{ color: 'purple.700', transform: 'translateX(-50%) translateY(4px)' }}
          cursor="pointer"
          onClick={() => {
            const contactSection = document.getElementById('contact')
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' })
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          transition="all 0.3s"
          zIndex={2}
        >
          <HiArrowDown size={32} />
        </Box>
      </Box>
    </Box>
  )
}

export default Skills

