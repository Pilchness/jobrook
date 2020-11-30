import Link from 'next/link';

const Navigation = () => {
  return (
    <div className={'navouter'}>
      <Link href={'/'}>
        <a className={'navlink'}>Home</a>
      </Link>
      <Link href={'/about'}>
        <a className={'navlink'}>About</a>
      </Link>
      <Link href={'/fees'}>
        <a className={'navlink'}>Consultation Fees</a>
      </Link>
      <Link href={'/booking'}>
        <a className={'navlink'}>Booking</a>
      </Link>
      <Link href={'/testimonials'}>
        <a className={'navlink'}>Testimonials</a>
      </Link>
      <Link href={'/contact'}>
        <a className={'navlink'}>Contact</a>
      </Link>
    </div>
  );
};

export default Navigation;
