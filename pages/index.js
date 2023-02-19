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
          <span>Endpoint(Vercel)</span>
          <div className={styles.endpointurl}>
            {"https://yt-returnname-api.vercel.app/api/idToName?id={channelId}"}
          </div>
          <br/>
          <span>Endpoint(Cloudflare pages)</span>
          <div className={styles.endpointurl}>
            {"https://yt-returnname-api.pages.dev/api/idToName?id={channelId}"}
          </div>
          
        </div>
        <br/>
        <button onClick={()=>{location.href = "https://github.com/yakisova41/yt-returnname-api"}}>SourceCode(Github)</button>
      </main>
    </>
  )
}
