import Head from 'next/head'
import styles from '@/styles/Extension.module.css'
import Image from 'next/image'

export default function extension(){
    return (      
        <>
            <Head>
                <title>yt-returnname-api</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.mainContainer}>
                    <Image src="/icon.svg" width={120} height={120}/>
                    <h1>Return YouTube Comment Username</h1>
                    <p>This script is to change the handle in the YouTube comments section to a username.</p>
                    <br/>
                    <div className={styles.buttons}>
                        <button className={styles.button} onClick={()=>{location.href="https://greasyfork.org/ja/scripts/460361-return-youtube-comment-username"}}>UserScript(Greasyfork)</button>
                        <button className={styles.button} onClick={()=>{location.href="#"}}>ChromeExtension(comingsoon)</button>
                    </div>
                    <br/>
                    <button className={styles.button} onClick={()=>{location.href="https://github.com/yakisova41/return-youtube-comment-username"}}>SourceCode(Github)</button>
                                    
                </div>
            </main>

            <section className={styles.about}>
                <div className={styles.aboutContainer}>
                    <h2>What is This?</h2>
                    <br/>
                    <Image src="/rect768.svg" width={1265} height={395} className={styles.promoimg}/>
                    <br/>
                    <p className={styles.abouttext}>
                    YouTube changed the name of the comments section in a recent update to Handle, an id that starts with @.
Using this script, you can get the username through the api and overwrite it in the handle to display the traditional username
                    </p>
                </div>
            </section>
      </>
      )
}