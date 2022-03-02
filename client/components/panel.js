//chakra-ui imports
import { TabPanel, Grid, GridItem, Box, Container } from "@chakra-ui/react"

const Panel = () => {
  return (
    <TabPanel>
      <Grid
        h="400px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={3} colSpan={1} bg="ivory">
          test
        </GridItem>
        <GridItem colSpan={2} bg="tomato">
          test
        </GridItem>
        <GridItem colSpan={2} bg="tomato">
          test
        </GridItem>
        <GridItem colSpan={4} bg="blue">
          test
        </GridItem>
      </Grid>
    </TabPanel>
  )
}

export default Panel
