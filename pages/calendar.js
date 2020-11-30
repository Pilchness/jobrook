import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

import { OnlineBooking } from '../calendar/onlinebooking';
import { AppointmentPost } from '../components/Form';
import { connectToDatabase } from '../util/mongodb';
import { useState } from 'react';

export default function Booking(props) {
  const databaseAppointments = {};
  for (let i = 0; i < Object.keys(props.appointments).length; i++) {
    databaseAppointments[props.appointments[i].date] = props.appointments[i].appointments;
  }
  const [appointments, updateAppointments] = useState(databaseAppointments);
  const dateKeys = Object.keys(appointments);

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
              <h1>Booking</h1>
            </header>

            <p>Booking info here</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
              <OnlineBooking appointments={appointments} dateKeys={dateKeys} />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const appointments = await db.collection('bookingdata').find({}).limit(10).toArray();
  return {
    props: {
      appointments: JSON.parse(JSON.stringify(appointments))
    }
  };
}
