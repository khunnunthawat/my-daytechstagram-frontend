import Head from 'next/head';
import { Button, DatePicker, Typography, version } from 'antd';
const { Title } = Typography;

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center flex-1 px-20 text-center'>
        <Title level={2}>antd version: {version}</Title>
        <DatePicker />
        <Button type='primary' className='ml-2'>
          Primary Button
        </Button>
      </main>
    </div>
  );
}
