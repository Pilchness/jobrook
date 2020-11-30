import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

export default function Home() {
  function changeTitleOpacity() {
    let maintext = document.getElementById('sitename');
    if (maintext) {
      this.scrollY > 20 ? (maintext.style.opacity = 0.2) : (maintext.style.opacity = 1);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeTitleOpacity, false);
    return () => {
      window.removeEventListener('scroll', changeTitleOpacity, false);
    };
  }, []);

  return (
    <div className={'container'}>
      <Head>
        <title>Jo Brookbank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'maincontainer'}>
        <Navigation />
        <div className={'main'}>
          <img className={styles.image} src="/images/mainimage.jpeg" width="100%" height="auto" />
        </div>
        <div
          style={{
            top: '0',
            left: '0',
            marginTop: '5vw',
            marginLeft: '45vw',
            marginRight: 0
          }}
        >
          <h1
            id="sitename"
            className={styles.mainheading}
            style={{ opacity: 1, transition: 'opacity 500ms ease-in-out' }}
          >
            Jo Brookbank
          </h1>
          <h2
            id="sitesub"
            className={styles.subheading}
            style={{ opacity: 1, transition: 'opacity 500ms ease-in-out' }}
          >
            Family Homeopath
          </h2>
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

      <Footer />
    </div>
  );
}
