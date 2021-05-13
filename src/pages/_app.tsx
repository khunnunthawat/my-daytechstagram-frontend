import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import MainLayout from '@/components/layouts/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='min-h-screen flex'>
      <MainLayout>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </MainLayout>
    </div>
  );
}

export default MyApp;

// className='w-full min-h-full flex max-w-2xl mx-auto p-5'
