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
} from "@chakra-ui/react"

const PostBody = () => {
  return (
    <Container mt={4} pb={20} maxW="container.lg">
      <Box p={4}>
        <Text fonts="paragraph" fontSize="xl">
          Content management is an important aspect of web development. Content
          management systems like WordPress, Drupal, and Joomla have been highly
          effective in providing document management, digital asset management,
          and record retention. However, with the ever changing landscape of
          front-end technologies and the rise of Headless CMS it has become more
          apparent that these legacy systems have their drawbacks. Certain
          enterprise environments still call for these heavy and resource
          intensive technologies, but recent trends have seen a shift towards
          lightweight-template based alternatives. Before diving head deep into
          WordPress alternatives like Pico and Grav or Headless CMS solutions
          like Strapi and GraphCMS, you may be able to take advantage of a
          local-file solution that provides lightweight rendering and is no more
          resource intensive than your front-end framework of choice - enter
          Gatsby.js and MarkdownX. <br /><br />
          #Gatsby.js There are a number of things that
          can be said regarding the ease of use of static site generators.
          Although not applicable to all websites/web applications, static site
          generators like Gatsby, provide speed, search engine optimization, and
          security right out the box. One of the central ideas of Gatsby is that
          HTML content is statically generated using React DOM server-side APIs.
          Said HTML content can then be enhanced with client-side JavaScript via
          the ReactDOM.hydrate() method, which allows for app-like features in
          Gatsby generated sites. Although technically just a static site
          generator, Gatsby.js - at its core, contains all the functionality
          needed to create data enabled web applications through a sourced
          filesystem or through sourced data providers (i.e. Headless CMSs,
          private APIs, or relational/non-relational databases). <br /><br />
          #Filesystem and
          Markdown Gatsby's allows users to create file nodes directly from the
          filesystem, through the use of the gastsby-source-filesystem plugin.
          Adding the plugin to your gatsby-config.js and refreshing the Gatsby
          development environment will enable the GraphiQL viewer for your
          local-host development server. example of gatsby-config.js
        </Text>
      </Box>
    </Container>
  )
}

export default PostBody
