import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Cookies from 'cookies';

export default function Home() {
  return (
    <>
      <Head>
        <title>Daytech stagram</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies = new Cookies(req, res);
  const jwt = cookies.get('jwt');

  if (jwt) {
    res.writeHead(302, { Location: '/posts' });
    res.end();
  } else {
    res.writeHead(302, { Location: '/signup' });
    res.end();
  }

  return {
    props: {
      status: true,
    },
  };
};