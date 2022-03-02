//chakra-ui imports
import { ChakraProvider } from "@chakra-ui/react"

//styles imports
import styles from "../styles/globals.css"
import { BlogTheme } from "../styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={BlogTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
