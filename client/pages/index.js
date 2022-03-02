// component imports
import Head from "next/head"
import HeaderLayout from "../components/headLayout"
import BodyLayout from "../components/bodyLayout"
import Footer from "../components/footer"

// styles imports
import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ThinkBroadly</title>
        <meta name="description" content="a blog about things" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <HeaderLayout />
      </div>
      <div className={styles.body}>
        <div className={styles.bodyOverlay}>
          <BodyLayout />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
