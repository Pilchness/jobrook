import Head from 'next/head';
import Navigation from './components/navigation';

export default function About() {
  return (
    <div className={'container'}>
      <Head>
        <title>Jo Brookbank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'pagesmain'}>
        <Navigation />
        <header className={'pagehead'}>
          <h1>About</h1>
        </header>
        <div>
          <section>
            <img
              src="/images/mainimage.jpeg"
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

            <div></div>
          </section>
        </div>
      </main>

      <footer>
        <div className={'footercontainer'}>
          <h3 style={{ textAlign: 'right', fontFamily: 'Nunito', fontWeight: '300', color: 'white', marginBottom: 5 }}>
            Jo Brookbank, Family Homeopath: 12 Three Road, Sevenoaks - Tel: 01234 567890
          </h3>
          <h6 style={{ textAlign: 'right', fontFamily: 'Nunito', fontWeight: '300', color: 'white', marginTop: 5 }}>
            Website Design ©Richard Barnes 2020
          </h6>
        </div>
      </footer>
    </div>
  );
}
