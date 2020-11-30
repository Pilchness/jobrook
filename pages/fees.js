import Head from 'next/head';
import Navigation from './components/navigation';
import Footer from './components/footer';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { treatments } from './data/treatments';

export default function Fees() {
  const [selectedTreatment, setSelectedTreatment] = useState(0);

  const router = useRouter();

  const tablePrices = (
    <table id="prices">
      <tr>
        <th>Treatment</th>
        <th>Duration</th>
        <th>Price</th>
      </tr>
      <tr onClick={() => setSelectedTreatment(1)}>
        <td>{treatments[1].name}</td>
        <td>{treatments[1].duration}</td>
        <td>£{treatments[1].price}</td>
      </tr>
      <tr onClick={() => setSelectedTreatment(2)}>
        <td>{treatments[2].name}</td>
        <td>{treatments[2].duration}</td>
        <td>£{treatments[2].price}</td>
      </tr>
      <tr onClick={() => setSelectedTreatment(3)}>
        <td>{treatments[3].name}</td>
        <td>{treatments[3].duration}</td>
        <td>£{treatments[3].price}</td>
      </tr>
      <tr onClick={() => setSelectedTreatment(4)}>
        <td>{treatments[4].name}</td>
        <td>{treatments[4].duration}</td>
        <td>£{treatments[4].price}</td>
      </tr>
      <tr onClick={() => setSelectedTreatment(5)}>
        <td>{treatments[5].name}</td>
        <td>{treatments[5].duration}</td>
        <td>£{treatments[5].price}</td>
      </tr>
    </table>
  );

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
              <h1>Consultation Fees</h1>
            </header>

            <p>
              Fees...Dolore velit exercitation commodo excepteur enim laboris consectetur irure id mollit sint magna.
              Velit consequat velit non officia eiusmod sunt consequat sint sit sit excepteur irure ea nulla. Cupidatat
              commodo velit culpa adipisicing irure anim eu.{' '}
            </p>
            <p>Click on a treatment for more information.</p>

            {selectedTreatment !== 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr minmax(150px, 25%)' }}>
                <div>{tablePrices}</div>
                <div
                  style={{
                    marginLeft: '1vw',
                    backgroundColor: 'lightseagreen',
                    paddingLeft: 20,
                    paddingRight: 20,
                    textAlign: 'center'
                  }}
                >
                  <h3
                    style={{ textAlign: 'center', fontFamily: 'Nunito', fontWeight: 900 }}
                    onClick={() => setSelectedTreatment(0)}
                  >
                    {`${treatments[selectedTreatment].name} £${treatments[selectedTreatment].price}`}
                  </h3>
                  <p style={{ fontSize: '1em' }}>{treatments[selectedTreatment].description}</p>
                  <button onClick={() => router.push('/booking')} className={'buttoncontainer'}>
                    Book Now
                  </button>
                </div>
              </div>
            ) : (
              <div>{tablePrices}</div>
            )}
            <p>More treatment info here.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
