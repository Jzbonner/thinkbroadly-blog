//chakra-ui imports
import { ChakraProvider } from "@chakra-ui/react"

// fontsouce imports 
import "@fontsource/hind" 
import "@fontsource/open-sans-condensed"
import "@fontsource/open-sans"

//styles imports
import styles from "../styles/globals.css"
import { BlogTheme } from "../styles/theme"

function BlogApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={BlogTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default BlogApp
