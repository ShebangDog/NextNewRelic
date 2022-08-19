import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useId } from "react"
import Script from "next/script"
import { GetServerSideProps, NextPage } from "next"
import Link from "next/link"

type HomeProps = {
  browserTimingScript: string
}
const Home: NextPage<HomeProps> = (props) => {
  const {browserTimingScript} = props
  const id = useId()

  const handleClick = () => {
    window.newrelic.addPageAction("go to error island")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Script id={id} strategy="afterInteractive">
          {browserTimingScript}
        </Script>
        <Link href={"/ErrorIsland"}>
          <a
            className={styles.anchor}
            onClick={handleClick}
          >
            {`Go to Error Island 🎉`}
          </a>
        </Link>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const newrelic = await import("newrelic")
  const browserTimingScript = await newrelic.getBrowserTimingHeader({
    hasToRemoveScriptWrapper: true,
  })

  return {
    props: {
      browserTimingScript
    }
  }
}

export default Home
