//chakra-ui imports
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Spacer,
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
      decal: "https://bit.ly/3tWvw7f",
      category: "Tech",
      categoryLong: "Programming",
      categoryDescription: "Changing the world though computation",
      sectionDescription:
        "Programming is, quite literally, all around us. From the take-out we order, to the movies we stream, code enables everyday actions in our lives. Tech companies are no longer recognizable as just software companies — instead, they bring food to our door, help us get a taxi, influence outcomes in presidential elections, or act as a personal trainer.",
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
      decal: "https://bit.ly/3qYCmHE",
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
      decal: "https://bit.ly/3v80Orp",
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
      decal: "https://bit.ly/3qVTayM",
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
      <Tabs variant="soft-rounded" align="center" colorScheme="gray">
        <TabList
          borderRadius="xl"
          bg="baseTone"
          opacity="0.75"
          p={2}
          maxW="400px"
        >
          {BlogArticles.map((item, postid) => (
            <Tab key={postid} color="whiteAlpha.600">
              {item.category}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {BlogArticles.map((item, postid) => (
            <TabPanel mt={7} key={postid}>
              <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="20">
                <VStack spacing="20">
                  <Box
                    className="border-4 border-transparent shadow-xl rounded-full"
                    p="4"
                    bgImage={item.decal}
                    bgSize="cover"
                    bgPosition="center"
                    h="400px"
                    w="400px"
                  ></Box>
                  <Box className="border-t-4 border-slate-400">
                    <Text fontSize="lg" color="white" mt={4}>
                      {item.sectionDescription}
                    </Text>
                  </Box>
                </VStack>
                <VStack mt={{ sm: 10, md: 0 }} spacing="20">
                  {item.articles.map((article, articleid) => (
                    <Box
                      className="shadow-xl rounded-lg"
                      key={articleid}
                      h="150px"
                      pb="5"
                      pl="5"
                      pr="5"
                      w="400px"
                      backdropFilter="blur(20px)"
                      bg="baseTone"
                      opacity="0.9"
                    >
                      <Container
                        className="rounded-full"
                        display="flex"
                        bg="slategrey"
                        opacity="0.8"
                        mt={-3}
                        p={1}
                      >
                        <HStack spacing="125px">
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
                        fontSize="lg"
                        color="spotlightCardDarkText"
                      >
                        {article.title}
                      </Text>
                      <Text
                        as="p"
                        align="left"
                        fontSize="md"
                        mt={-1}
                        mb={6}
                        color="spotlightCardDarkText"
                      >
                        {article.description}
                      </Text>
                      <HStack justify="center" spacing="5px">
                        {article.tags.map((tag, index) => (
                          <Text key={index} as="p" color="blendedTone">
                            {tag}
                            <LinkIcon h="3px" color="footertext" />
                          </Text>
                        ))}
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
