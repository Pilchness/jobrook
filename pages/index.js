import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navigation from './components/navigation';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jo Brookbank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <Navigation />
        <div className={styles.main}>
          <img className={styles.image} src="/images/mainimage.jpeg" width="100%" height="auto" />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            marginTop: '10vh',
            marginLeft: '45vw'
          }}
        >
          <h1 className={styles.title}>Jo Brookbank</h1>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
