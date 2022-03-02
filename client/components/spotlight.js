//chakra-ui imports
import { Box, Container, Stack, Badge, Image } from "@chakra-ui/react"
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
    date: "Jan.17.22",
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
          className="shadow-2xl rounded-3xl"
          maxW="sm"
          bg="cardBackground"
          borderWidth="5px"
          overflow="hidden"
        >
          <Image src={article.imageUrl[0]} alt={article.imageAlt} />

          <Box p="5">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="linkedin">
                Spotlight
              </Badge>
              <Box
                color="cardLightText"
                fontWeight="semibold"
                letterSpacing="wide"
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
              textTransform="uppercase"
              as="h4"
              lineHeight="tight"
              letterSpacing="1px"
              isTruncated
            >
              {article.title[0]}
            </Box>

            <Box display="flex" mt="-1" alignItems="center">
              <Box
                as="span"
                color="spotlightDescription"
                fontWeight="semibold"
                fontSize="sm"
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
          className="shadow-2xl rounded-3xl"
          maxW="sm"
          bg="cardBackground"
          borderWidth="5px"
          overflow="hidden"
        >
          <Image src={article.imageUrl[1]} alt={article.imageAlt} />

          <Box p="5">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="linkedin">
                Spotlight
              </Badge>
              <Box
                color="cardLightText"
                fontWeight="semibold"
                letterSpacing="wide"
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
              as="h4"
              lineHeight="tight"
              letterSpacing="1px"
              textTransform="uppercase"
              isTruncated
            >
              {article.title[1]}
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              <Box
                as="span"
                mt={-2}
                color="spotlightDescription"
                fontWeight="semibold"
                fontSize="sm"
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
          className="shadow-2xl rounded-3xl"
          maxW="sm"
          bg="cardBackground"
          borderWidth="5px"
          overflow="hidden"
        >
          <Image src={article.imageUrl[2]} alt={article.imageAlt} />

          <Box p="5">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="linkedin">
                Spotlight
              </Badge>
              <Box
                color="cardLightText"
                fontWeight="semibold"
                letterSpacing="wide"
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
              as="h4"
              lineHeight="tight"
              letterSpacing="1px"
              textTransform="uppercase"
              isTruncated
            >
              {article.title[2]}
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              <Box
                as="span"
                mt={-2}
                color="spotlightDescription"
                fontWeight="semibold"
                fontSize="sm"
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
    </Container>
  )
}

export default Spotlight
