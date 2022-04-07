//chakra-ui imports
import { Box, Container, Stack, Text, Badge, Image } from "@chakra-ui/react"
import { CalendarIcon } from "@chakra-ui/icons"

const Spotlight = () => {
  const article = {
    imageUrl: [
      "https://bit.ly/3IqKHKG",
      "https://bit.ly/3BR0RL2",
      "https://bit.ly/3JVgT9s",
    ],
    imageAlt: "spotlight blog image",
    tags: ["js", "tech", "coding"],
    title: ["Gatsby.js & MDX", "Figma", "Framer Motion"],
    date: "01.17.22",
    description: [
      "Connecting a Local CMS to Frontend",
      "Design Tools for Rapid Prototyping",
      "Modern Animations with Framer Motion",
    ],
  }

  return (
    <Container mt={8} maxW="container.xl">
      <Stack direction={["column", "null", "row"]} spacing="45px">
        <Box
          className="shadow-xl rounded-3xl"
          maxW="sm"
          bg="baseTone"
          opacity="0.9"
          backdropFilter="blur(30px)"
          overflow="hidden"
        >
          <Image src={article.imageUrl[0]} alt={article.imageAlt} />
          <Box p="5">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" bg="transitionTone">
                Spotlight
              </Badge>
              <Box
                color="deepTone"
                opacity="0.6"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                <Text fontFamily="tags">
                  {article.tags[0]} &bull; {article.tags[1]} &bull;{" "}
                  {article.tags[2]}
                </Text>
              </Box>
            </Box>
            <Box
              mt={3}
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="lg"
              lineHeight="tight"
              letterSpacing="wider"
              isTruncated
            >
              {article.title[0]}
            </Box>
            <Box display="flex" mt="-1" alignItems="center">
              <Box
                as="span"
                color="spotlightDescription"
                fontWeight="thin"
                letterSpacing="normal"
                fontSize="md"
              >
                {article.description[0]}
              </Box>
            </Box>
            <Box mt={4} color="gray.600">
              <CalendarIcon mt={-1} mr={2} color="gray.600" />
              {article.date}
            </Box>
          </Box>
        </Box>
        <Box
          className="shadow-xl rounded-3xl"
          maxW="sm"
          bg="baseTone"
          opacity="0.9"
          backdropFilter="blur(30px)"
          overflow="hidden"
        >
          <Image src={article.imageUrl[1]} alt={article.imageAlt} />

          <Box p="5">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" bg="transitionTone">
                Spotlight
              </Badge>
              <Box
                color="deepTone"
                opacity="0.6"
                fontWeight="semibold"
                fontFamily="tags"
                letterSpacing="wider"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {article.tags[0]} &bull; {article.tags[1]} &bull;{" "}
                {article.tags[2]}
              </Box>
            </Box>

            <Box
              mt={3}
              fontWeight="bold"
              fontSize="lg"
              lineHeight="tight"
              letterSpacing="wider"
              textTransform="uppercase"
              isTruncated
            >
              {article.title[1]}
            </Box>

            <Box display="flex" mt="1" alignItems="center">
              <Box
                as="span"
                mt={-2}
                color="spotlightDescription"
                fontWeight="normal"
                fontSize="md"
              >
                {article.description[1]}
              </Box>
            </Box>
            <Box mt={4} color="gray.600">
              <CalendarIcon mt={-1} mr={2} color="gray.600" />
              {article.date}
            </Box>
          </Box>
        </Box>
        <Box
          className="shadow-xl rounded-3xl"
          maxW="sm"
          bg="baseTone"
          opacity="0.9"
          backdropFilter="blur(30px)"
          overflow="hidden"
        >
          <Image src={article.imageUrl[2]} alt={article.imageAlt} />

          <Box p="5">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" bg="transitionTone">
                Spotlight
              </Badge>
              <Box
                color="deepTone"
                opacity="0.6"
                fontWeight="semibold"
                letterSpacing="wide"
                fontFamily="tags"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {article.tags[0]} &bull; {article.tags[1]} &bull;{" "}
                {article.tags[2]}
              </Box>
            </Box>

            <Box
              mt={3}
              fontWeight="semibold"
              fontSize="lg"
              lineHeight="tight"
              letterSpacing="wider"
              textTransform="uppercase"
              isTruncated
            >
              {article.title[2]}
            </Box>

            <Box display="flex" mt="1" alignItems="center">
              <Box
                as="span"
                mt={-2}
                color="spotlightDescription"
                fontWeight="normal"
                fontSize="md"
              >
                {article.description[2]}
              </Box>
            </Box>
            <Box mt={4} color="gray.600">
              <CalendarIcon mt={-1} mr={2} color="gray.600" />
              {article.date}
            </Box>
          </Box>
        </Box>
      </Stack>

      <Image pos="relative" top="20" left="-40" src="https://bit.ly/3xeqLZ1" />
    </Container>
  )
}

export default Spotlight
