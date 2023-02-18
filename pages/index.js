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
        <p className={styles.about}>YouTubeのchannelId(https://www.youtube.com/channel/xxxxxxxxxx)から名前を取得するAPIです。</p>

        <div className={styles.endpoint}>
          <span>エンドポイント</span>
          <div className={styles.endpointurl}>
            {"https://yt-returnname-api.vercel.app/api/idToName/{channelId}"}
          </div>
          
        </div>
      </main>
    </>
  )
}
