import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>yt-returnname-api</title>
      </Head>
      <main className={styles.main}>
        <h1>yt returnname api</h1>
        <p className={styles.about}>API to get the name from YouTube channelId (https://www.youtube.com/channel/xxxxxxxxxx).</p>

        <div className={styles.endpoint}>
          <p>End of provision</p>
          
        </div>
        
      </main>
    </>
  )
}
