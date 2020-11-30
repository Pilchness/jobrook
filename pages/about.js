import Head from 'next/head';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

export default function About() {
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
              <h1>About Me</h1>
            </header>
            <img
              src="/images/homeopath.png"
              height="40%"
              width="40%"
              alt="Image"
              style={{ float: 'left', marginRight: 50, marginBottom: 50, border: '1px solid #000000' }}
            />

            <p>
              About...Dolore velit exercitation commodo excepteur enim laboris consectetur irure id mollit sint magna.
              Velit consequat velit non officia eiusmod sunt consequat sint sit sit excepteur irure ea nulla. Cupidatat
              commodo velit culpa adipisicing irure anim eu. Adipisicing in et labore reprehenderit cupidatat nostrud
              minim ipsum et duis sint dolor aliquip. Dolor aliquip enim ullamco enim minim consequat deserunt ipsum
              laborum dolor in ea. Est aliquip ea magna et proident anim officia nisi. Sunt sint deserunt minim amet
              nisi. Aute do elit ipsum velit anim fugiat labore aute in culpa ad pariatur non sit.
            </p>
            <p>
              About...Dolore velit exercitation commodo excepteur enim laboris consectetur irure id mollit sint magna.
              Velit consequat velit non officia eiusmod sunt consequat sint sit sit excepteur irure ea nulla. Cupidatat
              commodo velit culpa adipisicing irure anim eu. Adipisicing in et labore reprehenderit cupidatat nostrud
              minim ipsum et duis sint dolor aliquip. Dolor aliquip enim ullamco enim minim consequat deserunt ipsum
              laborum dolor in ea. Est aliquip ea magna et proident anim officia nisi. Sunt sint deserunt minim amet
              nisi. Aute do elit ipsum velit anim fugiat labore aute in culpa ad pariatur non sit.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
