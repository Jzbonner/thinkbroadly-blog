//chakra-ui imports
import {
  Box,
  Circle,
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
      <Box mt={2} p="1">
        <SimpleGrid columns={3} spacing={10}>
          <Box display="flex" alignItems="center">
            <IconButton
              colorscheme="grey"
              aria-label="navigation menu"
              icon={<HamburgerIcon />}
            />
          </Box>
          <Circle p={2}>
            <Image
              className="animate-pulse"
              src="https://bit.ly/33NIf1N"
              alt="logo"
              width={{ base: "50", sm: "50", md: "32" }}
              height={{ base: "50", sm: "50", md: "32" }}
              quality={100}
            />
          </Circle>
          <Box display="flex" alignItems="center">
            <Spacer />
            <IconButton
              colorscheme="grey"
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
