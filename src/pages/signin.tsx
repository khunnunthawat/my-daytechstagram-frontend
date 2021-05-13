import Head from 'next/head';
import { UserForm } from '@/components/user/UserForm';

export default function Signin() {
  return (
    <>
      <Head>
        <title>Daytech stagram</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <UserForm checkUser='signin' />
      </div>
    </>
  );
}
