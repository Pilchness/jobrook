import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { NavBar } from './components/navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jo Brookbank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
