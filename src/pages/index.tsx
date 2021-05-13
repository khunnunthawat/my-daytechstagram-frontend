import Head from 'next/head';
import { SingUp } from '@/components/user/SingUp';

export default function Home() {
  return (
    <>
      <Head>
        <title>Daytechstagram-frontend</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SingUp />
    </>
  );
}
