//chakra-ui imports
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Divider,
  Spacer,
  Image,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react"
import { ArrowForwardIcon, LinkIcon, SmallAddIcon } from "@chakra-ui/icons"

const BodyLayout = () => {
  const BlogArticles = [
    {
      postid: 1,
      decal: "https://bit.ly/3vydhq9",
      category: "Tech",
      categoryLong: "Programming",
      categoryDescription: "Changing the world though computation",
      articles: [
        {
          articleid: 1,
          title: "JavaScript and Modern Syntax",
          tags: ["ECMA", "JS", "ES6"],
          date: "01-18-2022",
          description: "a deep dive into ES6 syntax and the fundamentals of JS",
        },
        {
          articleid: 2,
          title: "Gatsby Images",
          tags: ["FRONTEND", "JS", "UI/UX"],
          date: "08-05-2021",
          description: "understanding responsive images with Gatsby",
        },
        {
          articleid: 3,
          title: "Test Driven Development",
          tags: ["TDD", "AGILE", "DEV"],
          date: "02-12-2022",
          description: "understanding the importance of testing frameworks",
        },
        {
          articleid: 4,
          title: "Framer Motion Animations",
          tags: ["JS", "CSS", "UI/UX"],
          date: "03-29-2021",
          description:
            "utilizing modern animation principles with framer motion",
        },
      ],
    },
    {
      postid: 2,
      decal: "https://bit.ly/3Mq0WKH",
      category: "Startup",
      categoryLong: "Entrepreneurship",
      categoryDescription: "Business through growth and innovation",
      articles: [
        {
          articleid: 1,
          title: "JavaScript",
          tags: ["ECMA", "JS", "ES6"],
          date: "01-2022",
          description: "es6 syntax",
        },
      ],
    },
    {
      postid: 3,
      decal: "https://bit.ly/3ppP7dy",
      category: "Design",
      categoryLong: "UI/UX",
      categoryDescription: "Understanding human computer interaction",
      articles: [
        {
          articleid: 1,
          title: "JavaScript",
          tags: ["ECMA", "JS", "ES6"],
          date: "01-2022",
          description: "es6 syntax",
        },
      ],
    },
    {
      postid: 4,
      decal: "https://bit.ly/3hsefMa",
      category: "Culture",
      categoryLong: "Workplace diversity and inclusion",
      categoryDescription: "A technological landscape for all",
      articles: [
        {
          articleid: 1,
          title: "JavaScript",
          tags: ["ECMA", "JS", "ES6"],
          date: "01-2022",
          description: "es6 syntax",
        },
      ],
    },
  ]

  return (
    <Container mt={20} mb={20} maxW="container.lg">
      <Tabs variant="soft-rounded" align="center" colorScheme="linkedin">
        <TabList>
          {BlogArticles.map((item, postid) => (
            <Tab key={postid} color="whiteAlpha.600">
              {item.category}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {BlogArticles.map((item, postid) => (
            <TabPanel mt={7} key={postid}>
              <SimpleGrid columns={{ sm: 1, md: 2 }}>
                <Box
                  className="border-4 border-transparent shadow-2xl rounded-md"
                  p="4"
                  bgImage={item.decal}
                  bgSize="cover"
                  h="350px"
                >
                  <Flex
                    className="border-4 border-slate-800 rounded-md"
                    h="120px"
                    minW="250px"
                    mt={7}
                    ml={-12}
                    p="4"
                    bg="sectionBackground"
                    backdropFilter="blur(10px)"
                    fontWeight="semibold"
                    textTransform="uppercase"
                  >
                    <Text fontSize="lg" fontWeight="bold">
                      {item.categoryLong}
                    </Text>
                    <Text mt={4}>{item.categoryDescription}</Text>
                  </Flex>
                </Box>
                <VStack mt={{ sm: 10, md: 0 }} spacing="20">
                  {item.articles.map((article, articleid) => (
                    <Box
                      className="shadow-2xl border-b-2 border-slate"
                      key={articleid}
                      h="170px"
                      pb="5"
                      pl="5"
                      pr="5"
                      w="400px"
                      bg=""
                    >
                      <Container
                        className="rounded-full"
                        display="flex"
                        bg="slategrey"
                        mt={3}
                        p={1}
                      >
                        <HStack spacing="112px">
                          <Text as="p" fontSize="sm" color="white">
                            <ArrowForwardIcon ml={3} mr={1} />
                            {article.date}
                          </Text>
                          <Spacer />
                          <SmallAddIcon color="white" />
                        </HStack>
                      </Container>
                      <Text
                        as="h3"
                        mt={5}
                        align="left"
                        letterSpacing="1px"
                        fontWeight="bold"
                        color="white"
                      >
                        {article.title}
                      </Text>
                      <Text
                        as="p"
                        align="left"
                        fontSize="sm"
                        mt={-1}
                        mb={6}
                        color="white"
                      >
                        {article.description}
                      </Text>
                      <HStack
                        justify="center"
                        spacing="5px"
                        divider={<LinkIcon h="3px" color="footerText" />}
                      >
                        {article.tags.map((tag, index) => (
                          <Text key={index} as="p" color="#927989">
                            {tag}
                          </Text>
                        ))}
                        <Divider />
                        <Image
                          className="shadow-xl"
                          position="relative"
                          top="4"
                          left="3"
                          bg="#b4a096"
                          borderRadius="4px"
                          w="2rem"
                          src="https://res.cloudinary.com/dzmc7doja/image/upload/v1643652329/design-assets/design-icon-assets/projects-decal.png"
                        />
                      </HStack>
                    </Box>
                  ))}
                </VStack>
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default BodyLayout
