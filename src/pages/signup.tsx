import Head from 'next/head';
import { UserForm } from '@/components/user/UserForm';
import { GetServerSideProps } from 'next';
import Cookies from 'cookies';

export default function Signup() {
  return (
    <>
      <Head>
        <title>Daytech stagram</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <UserForm checkUser='signup' />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies = new Cookies(req, res);
  const jwt = cookies.get('jwt');

  if (jwt) {
    res.writeHead(302, { Location: '/posts' });
    res.end();
  }

  return {
    props: {
      status: true,
    },
  };
};