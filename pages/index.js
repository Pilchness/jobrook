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
          <h1 className={styles.mainheading}>Jo Brookbank</h1>
          <h2 className={styles.subheading}>Family Homeopath</h2>
          <p className={styles.openingpara}>
            Opening paragraph introducing yourself...Dolore velit exercitation commodo excepteur enim laboris
            consectetur irure id mollit sint magna. Velit consequat velit non officia eiusmod sunt consequat sint sit
            sit excepteur irure ea nulla. Cupidatat commodo velit culpa adipisicing irure anim eu. Adipisicing in et
            labore reprehenderit cupidatat nostrud minim ipsum et duis sint dolor aliquip. Dolor aliquip enim ullamco
            enim minim consequat deserunt ipsum laborum dolor in ea. Est aliquip ea magna et proident anim officia nisi.
            Sunt sint deserunt minim amet nisi. Aute do elit ipsum velit anim fugiat labore aute in culpa ad pariatur
            non sit.
          </p>
          <div className={styles.buttoncontainer}>
            <button className={styles.ctabutton}>Book an Appointment</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
