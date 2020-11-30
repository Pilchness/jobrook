import Head from 'next/head';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

export default function Booking() {
  return (
    <div className={'container'}>
      <Head>
        <title>Jo Brookbank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'pagehead'}>
        <Navigation />

        <div>
          <section>
            <header>
              <h1>Contact</h1>
            </header>

            <p>Contact form</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
