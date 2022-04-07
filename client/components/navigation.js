// TODO: add functinality for sidebar
// TODO: add functinality for darkmode

//chakra-ui imports
import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Container,
  IconButton,
  Spacer,
} from "@chakra-ui/react"
import { HamburgerIcon, MoonIcon } from "@chakra-ui/icons"

const Navigation = () => {
  return (
    <Container maxW="container.xl">
      <Box mt={2} p={2}>
        <SimpleGrid columns={3} spacing={10}>
          <Box display="flex" alignItems="center">
            <IconButton
              colorScheme="blackAlpha"
              aria-label="navigation menu"
              icon={<HamburgerIcon />}
            />
          </Box>
          <Flex justifyContent="center">
            <Image
              className="animate-rotate-in"
              src="https://bit.ly/3DzRIHn"
              alt="logo"
              quality={100}
            />
          </Flex>
          <Box display="flex" alignItems="center">
            <Spacer />
            <IconButton
              colorScheme="blackAlpha"
              aria-label="dark mode"
              icon={<MoonIcon />}
            />
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  )
}

export default Navigation
