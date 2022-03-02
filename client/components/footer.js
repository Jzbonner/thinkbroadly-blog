//chakra-ui imports
import { Box, HStack, Flex, Container, Spacer } from "@chakra-ui/react"
import { CopyIcon } from "@chakra-ui/icons"

const Footer = () => {
  return (
    <Box
      className="fixed bottom-0 w-full border-t-2 border-stone-800 shadow-inner"
      bg="footerBackground"
    >
      <Container mt={2} mb={2} maxW="container.sm">
        <Flex>
          <Box display="flex">
            <HStack spacing="10px">
              <CopyIcon color="footerText" />
              <Box as="p" className="font-bold" color="footerText">
                {" "}
                &bull; 2022
              </Box>
            </HStack>
          </Box>
          <Spacer />
          <HStack spacing="24px">
            <Box
              className="font-bold"
              as="a"
              href="https://github.com/Jzbonner"
              color="footerText"
            >
              jzbonner
            </Box>
            <Box
              className="font-bold"
              as="a"
              href="https://github.com/Jzbonner"
              color="footerText"
            >
              privacy
            </Box>
            <Box
              className="font-bold"
              as="a"
              href="https://github.com/Jzbonner"
              color="footerText"
            >
              license
            </Box>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
