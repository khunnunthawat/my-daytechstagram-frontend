import Head from 'next/head';
import { UserForm } from '@/components/user/UserForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Daytechstagram-frontend</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <UserForm />
      </div>
    </>
  );
}
