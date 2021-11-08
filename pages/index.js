import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Card from '../components/card'

const name = "Demis Struiksma";

export default function Home() {
  return ( 
      <main className={styles.main}>
        <div className={styles.bar}>This website is under construction 🚧</div> 
        <Head>
        <title>Demis Struiksma</title>
        <meta
          name="description"
          content="Demis Struiksma is a front-end web developer from Amsterdam."
        />
        </Head>

        <div>
          <p>A new portfolio site is in the works 🔨, come back later!</p>
          <iframe src="https://giphy.com/embed/a93jwI0wkWTQs" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dl-a93jwI0wkWTQs"></a></p>
        </div>

      </main>

  )
}