import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Background from "../src/components/background/background";
import Profile from "../src/components/profile/profile";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Viktor Garba</title>
        <meta name="description" content="Viktor Garba | #1 Tech Debt Engineer" />
      </Head>

      <main className={styles.container}>

        <Background/>
        <Profile/>

      </main>
    </div>
  )
}

export default Home
