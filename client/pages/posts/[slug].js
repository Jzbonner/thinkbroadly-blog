// chakraui imports
import {
  TabPanel,
  Grid,
  GridItem,
  Box,
  Text,
  Container,
  StylesProvider,
} from "@chakra-ui/react"

// component imports
import PostHeader from "../../components/postHeadLayout"
import PostBody from "../../components/postBodyLayout"
import Footer from "../../components/footer"

// styles imports
import styles from "../../styles/Post.module.css"

const Article = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <PostHeader />
      </div>
      <div className={styles.body}>
        <PostBody />
      </div>
      <Footer />
    </div>
  )
}

export default Article
