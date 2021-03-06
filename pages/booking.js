import Head from 'next/head';
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
  //const appointments = databaseAppointments;
  const dateKeys = Object.keys(appointments);
  console.log(appointments);

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
            <div>
              <OnlineBooking appointments={appointments} dateKeys={dateKeys} />
            </div>
            <p>Booking info, terms and conditions etc.</p>
            {/* <AppointmentPost /> */}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const appointments = await db.collection('bookingdata').find({}).limit(100).toArray();
  return {
    props: {
      appointments: JSON.parse(JSON.stringify(appointments))
    }
  };
}
