// TODO: Add social media HStack next to back button
import {
  TabPanel,
  Grid,
  GridItem,
  Image,
  Box,
  Text,
  Container,
  IconButton,
  Tooltip,
  HStack,
} from "@chakra-ui/react"
import { ArrowLeftIcon, LinkIcon, MoonIcon, ChatIcon } from "@chakra-ui/icons"

const PostHeader = () => {
  return (
    <Container mt={0} mb={20} maxW="container.lg">
      <Box pt={4}>
        <HStack spacing="6">
          <Tooltip hasArrow label="go back" placement="right">
            <IconButton
              colorScheme="blackAlpha"
              aria-label="navigation"
              icon={<ArrowLeftIcon />}
            />
          </Tooltip>
          <Tooltip hasArrow label="copy link to article" placement="right">
            <IconButton
              colorScheme="blackAlpha"
              aria-label="navigation"
              icon={<LinkIcon />}
            />
          </Tooltip>
          <Tooltip hasArrow label="share to twitter" placement="right">
            <IconButton
              colorScheme="blackAlpha"
              aria-label="navigation"
              icon={<ChatIcon />}
            />
          </Tooltip>
          <Tooltip hasArrow label="toggle dark mode" placement="right">
            <IconButton
              colorScheme="blackAlpha"
              aria-label="navigation"
              icon={<MoonIcon />}
            />
          </Tooltip>
        </HStack>

        <Box
          maxW="container.sm"
          position="relative"
          top="10rem"
          left="20rem"
          zIndex="overlay"
          pl={10}
          bg="whiteAlpha.400"
          borderLeft="8px"
          borderTopEndRadius="xl"
          borderBottomEndRadius="xl"
          borderColor="baseTone"
          backdropFilter="blur(5px)"
        >
          <Text
            fonts="heading"
            fontWeight="bold"
            fontSize="9xl"
            color="blendedTone"
          >
            Gatsby.js and MDX
          </Text>
          <Text fonts="paragraph" fontSize="5xl" color="blendedTone">
            Connecting a Local CMS to Frontend
          </Text>
        </Box>
        <Image
          borderRadius="2xl"
          position="relative"
          top="-27rem"
          src="http://bit.ly/2JkFsx6"
        />
      </Box>
    </Container>
  )
}

export default PostHeader
