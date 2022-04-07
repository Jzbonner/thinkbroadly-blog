//chakra-ui imports
import {
  Box,
  HStack,
  Circle,
  Divider,
  Flex,
  Container,
  Spacer,
} from "@chakra-ui/react"
import { CopyIcon } from "@chakra-ui/icons"

const Footer = () => {
  return (
    <Box className="w-full" bg="none">
      <Container mt={-12} mb={0} maxW="container.sm">
        <Flex>
          <Box display="flex">
            <Circle border="3px" p={2} pl={6} pr={6} bg="baseTone">
              <HStack spacing="10px" height="20px">
                <CopyIcon color="footerDarkText" />
                <Divider color="baseTone" orientation="vertical"/>
                <Box as="p" className="font-bold" color="footerDarkText">
                  {" "}
                  2022
                </Box>
              </HStack>
            </Circle>
          </Box>
          <Spacer />
          <Circle border="3px" p={2} pl={6} pr={6} bg="baseTone">
            <HStack spacing="24px">
              <Box
                className="font-bold"
                as="a"
                href="https://github.com/Jzbonner"
                color="footerDarkText"
              >
                jzbonner
              </Box>
              <Box
                className="font-bold"
                as="a"
                href="https://github.com/Jzbonner"
                color="footerDarkText"
              >
                privacy
              </Box>
              <Box
                className="font-bold"
                as="a"
                href="https://github.com/Jzbonner"
                color="footerDarkText"
              >
                license
              </Box>
            </HStack>
          </Circle>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
