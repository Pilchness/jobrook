import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className={'footercontainer'}>
        <h3 style={{ textAlign: 'right', fontFamily: 'Nunito', fontWeight: '300', color: 'white', marginBottom: 5 }}>
          Jo Brookbank, Family Homeopath: 12 Three Road, Sevenoaks - Tel: 01234 567890
        </h3>
        <Link href={'https://jobrookbank.sevenoaks.business/'}>
          <h6>Website Design ©Richard Barnes 2020</h6>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
